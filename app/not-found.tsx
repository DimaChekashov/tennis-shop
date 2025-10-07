import { ROUTES } from "@/shared/lib/consts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tennis Shop - 404",
  description: "404 - Страница не найдена!",
};

export default async function Racket() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404 - Страница не найдена!</h1>
      <Link
        href={ROUTES.home}
        className="mt-6 px-6 py-3 bg-accent text-white rounded"
      >
        На главную
      </Link>
    </div>
  );
}
