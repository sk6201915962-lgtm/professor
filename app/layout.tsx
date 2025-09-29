import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import SimpleChatbot from "@/components/simple-chatbot";
import ScrollToTop from "@/components/common/ScrollToTop";
import "./globals.css";
import { SEO_METADATA_HOME } from "@/lib/SEO_TAGS";
import ClientWrapper from "./ClientWrapper";
export const metadata: Metadata = SEO_METADATA_HOME;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ClientWrapper>
          <Navbar />
          {children}
          <Analytics />
          <SimpleChatbot />
          <ScrollToTop />
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
