import { getUser } from "@/shared/api/user";
import Footer from "@/widgets/footer";
import Header from "@/widgets/header";
import { PropsWithChildren } from "react";

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
