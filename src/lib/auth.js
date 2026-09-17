import crypto from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "kalki_admin_token";
const SECRET = process.env.ADMIN_JWT_SECRET || "kalki_agency_admin_secret_token_key_2026";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "kalkiweb06@gmail.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "kalkiadmin@221";

// Create a secure signed session token: "email:timestamp:signature"
export function createAdminToken(email) {
  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days
  const payload = `${email}:${expiresAt}`;
  const signature = crypto.createHmac("sha256", SECRET).update(payload).digest("hex");
  return `${payload}:${signature}`;
}

// Verify session token
export function verifyAdminToken(token) {
  if (!token || typeof token !== "string") return false;

  const parts = token.split(":");
  if (parts.length !== 3) return false;

  const [email, expiresAtStr, signature] = parts;
  const expiresAt = parseInt(expiresAtStr, 10);

  if (isNaN(expiresAt) || Date.now() > expiresAt) {
    return false; // Expired
  }

  const expectedPayload = `${email}:${expiresAtStr}`;
  const expectedSignature = crypto.createHmac("sha256", SECRET).update(expectedPayload).digest("hex");

  if (crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
    return { email, valid: true };
  }

  return false;
}

// Check admin credentials
export function validateAdminCredentials(email, password) {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
}

// Check if request is authenticated as admin
export async function isAuthenticatedAdmin(request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
    if (!token) return false;
    return verifyAdminToken(token);
  } catch (err) {
    return false;
  }
}
