import { getUser } from "@/shared/api/user";
import Footer from "@/widgets/footer";
import Header from "@/widgets/header";
import { Roboto } from "next/font/google";
import { PropsWithChildren } from "react";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export default async function AuthLayout({ children }: PropsWithChildren) {
  const data = await getUser();

  console.log(data);

  return (
    <>
      <Header />
      <main className="min-w-xs container mx-auto">{children}</main>
      <Footer />
    </>
  );
}
