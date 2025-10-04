import { UserProvider } from "@/app/providers/user-provider";
import { getUser } from "@/shared/api/user";
import Footer from "@/widgets/footer";
import Header from "@/widgets/header";
import { PropsWithChildren } from "react";

export default async function AuthLayout({ children }: PropsWithChildren) {
  const { data } = await getUser();

  console.log(data);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <UserProvider user={data}>
        <Header />
        <main className="min-w-xs container mx-auto">{children}</main>
        <Footer />
      </UserProvider>
    </div>
  );
}
