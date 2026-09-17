import { Poppins, Kalam, Noto_Sans_Devanagari, Noto_Sans_Bengali, Noto_Sans_Gurmukhi, Noto_Sans_JP, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ClientLayout from "@/components/client-layout";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});
const kalam = Kalam({ subsets: ["latin"], weight: ["400"], variable: "--font-kalam", display: "swap" });
const notoDevanagari = Noto_Sans_Devanagari({ subsets: ["devanagari"], weight: ["400", "700"], variable: "--font-noto-devanagari", display: "swap" });
const notoBengali = Noto_Sans_Bengali({ subsets: ["bengali"], weight: ["400", "700"], variable: "--font-noto-bengali", display: "swap" });
const notoGurmukhi = Noto_Sans_Gurmukhi({ subsets: ["gurmukhi"], weight: ["400", "700"], variable: "--font-noto-gurmukhi", display: "swap" });
const notoJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-noto-jp", display: "swap" });
const notoSC = Noto_Sans_SC({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-noto-sc", display: "swap" });
export const metadata = {
  title: "Best Digital Marketing Agency India | Top-Rated SEO & Website Development Company - Kalki Web",
  description: "Kalki Web is the top-rated & most trusted SEO company and digital marketing agency in India. We specialize in high-converting website development, Google Ads PPC management, Shopify e-commerce, and performance marketing to scale ambitious brands.",
  keywords: [
    "Digital Marketing Agency India",
    "Best Digital Marketing Agency",
    "Digital Marketing Company India",
    "SEO Company India",
    "Top-Rated & Most Trusted SEO Company in India",
    "SEO Services India",
    "Best SEO Company",
    "Web Design Company India",
    "Website Development Company",
    "Web Development Agency India",
    "Social Media Marketing Agency",
    "Google Ads Management",
    "PPC Management Services",
    "Performance Marketing Agency",
    "Online Marketing Agency",
    "E-commerce Website Development",
    "Shopify Development Company",
    "WordPress Development Company",
    "Lead Generation Agency",
    "Digital Branding Agency",
    "Hire Digital Marketing Agency",
    "Digital Marketing Services for Business",
    "SEO Services for Small Business",
    "Affordable Digital Marketing Services",
    "Professional SEO Services",
    "Google Ads Agency India",
    "Social Media Marketing Services",
    "Website Development Services India",
  ],
  metadataBase: new URL("https://www.kalkiweb.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Digital Marketing Agency India | Kalki Web",
    description: "Top-rated SEO company, web development agency, and Google Ads PPC management in India.",
    url: "https://www.kalkiweb.in",
    siteName: "Kalki Web",
    locale: "en_IN",
    type: "website",
  },
};
export default function RootLayout({ children, }) {
    return (<html lang="en" className={cn("dark", poppins.variable)}>
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NKQ41QRW2N"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-NKQ41QRW2N');
            `,
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", poppins.variable, kalam.variable, notoDevanagari.variable, notoBengali.variable, notoGurmukhi.variable, notoJP.variable, notoSC.variable)}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>);
}
