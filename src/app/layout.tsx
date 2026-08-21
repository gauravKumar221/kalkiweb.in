
import type { Metadata } from "next";
import { Inter, Kalam, Noto_Sans_Devanagari, Noto_Sans_Bengali, Noto_Sans_Gurmukhi, Noto_Sans_JP, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ClientLayout from "@/components/client-layout";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const kalam = Kalam({ subsets: ["latin"], weight: ["400"], variable: "--font-kalam" });
const notoDevanagari = Noto_Sans_Devanagari({ subsets: ["devanagari"], weight: ["400", "700"], variable: "--font-noto-devanagari" });
const notoBengali = Noto_Sans_Bengali({ subsets: ["bengali"], weight: ["400", "700"], variable: "--font-noto-bengali" });
const notoGurmukhi = Noto_Sans_Gurmukhi({ subsets: ["gurmukhi"], weight: ["400", "700"], variable: "--font-noto-gurmukhi" });
const notoJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-noto-jp" });
const notoSC = Noto_Sans_SC({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-noto-sc" });


export const metadata: Metadata = {
  title: "Kalki Web – A Creative Agency",
  description: "We grow brands with bold design & digital marketing. From high-performing websites to data-driven campaigns – we help your business scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          kalam.variable,
          notoDevanagari.variable,
          notoBengali.variable,
          notoGurmukhi.variable,
          notoJP.variable,
          notoSC.variable
        )}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
