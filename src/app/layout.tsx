import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/layouts/theme/Provider";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { baseDomain, blogDesc, blogName } from "@/config/const";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL(baseDomain),
  title: blogName,
  description: blogDesc,
  openGraph: {
    title: blogName,
    description: blogDesc,
    siteName: blogName,
    images: ["/thumbnail.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: blogName,
    description: blogDesc,
    images: ["/thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-my-20 scroll-smooth">
      <body className="font-pretendard flex min-h-screen flex-col">
        <ThemeProvider>
          <Header />
          <main className="mt-[64px] flex flex-1 flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
        <GoogleAnalytics gaId="G-C4F73LMPKW" />
      </body>
    </html>
  );
}
