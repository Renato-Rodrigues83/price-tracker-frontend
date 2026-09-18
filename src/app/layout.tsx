import type { Metadata } from "next";
import { Inter, PT_Sans_Caption } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Price Tracker",
  description: "Monitore preços de produtos em diferentes lojas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${ptSansCaption.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
