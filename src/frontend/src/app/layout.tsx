import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vivid Media | Kurumsal Dijital Pazarlama ve B2B Growth Ajansı",
  description: "Kurumsal B2B devleri ve yüksek teknoloji girişimleri için veri odaklı SEO, Google Ads, Sosyal Medya ve CRO hizmetleri. 20-35 yaş karar vericiler için modern büyüme ortağınız.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-navy text-foreground">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
