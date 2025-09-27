import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/widgets/header";
import Footer from "@/widgets/footer";
import NextTopLoader from "nextjs-toploader";

import "@/app/styles/globals.css";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "Tennis Shop",
  description: "Tennis Shop - Rackets and equipment for tennis players",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} grid grid-rows-[auto_1fr_auto] min-h-screen`}
      >
        <NextTopLoader />
        <Header />
        <main className="container mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
