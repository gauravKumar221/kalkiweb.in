import { NextResponse } from "next/server";
import { isAuthenticatedAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const auth = await isAuthenticatedAdmin(request);

  if (auth && auth.valid) {
    return NextResponse.json({
      authenticated: true,
      user: { email: auth.email, role: "admin" },
    });
  }

  return NextResponse.json({
    authenticated: false,
  });
}
