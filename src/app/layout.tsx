import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import "./styles/globals.css";
import Header from "@/widgets/header";
import Footer from "@/widgets/footer/Footer";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "Tennis Shop",
  description: "tennis rocket shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
