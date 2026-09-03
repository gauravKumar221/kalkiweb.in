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
    title: "Kalki Web – A Creative Agency",
    description: "We grow brands with bold design & digital marketing. From high-performing websites to data-driven campaigns – we help your business scale.",
};
export default function RootLayout({ children, }) {
    return (<html lang="en" className={cn("dark", poppins.variable)}>
      <body className={cn("min-h-screen bg-background font-sans antialiased", poppins.variable, kalam.variable, notoDevanagari.variable, notoBengali.variable, notoGurmukhi.variable, notoJP.variable, notoSC.variable)}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>);
}
