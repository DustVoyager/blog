import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/layouts/theme/Provider";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { baseDomain, blogDesc, blogName } from "@/config/const";

export const metadata: Metadata = {
  metadataBase: new URL(baseDomain),
  title: blogName,
  description: blogDesc,
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
      </body>
    </html>
  );
}
