import { ROUTES } from "@/shared/lib/consts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Ракетка не найдена!",
  description: "404 - Ракетка не найдена!",
};

export default async function Racket() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full">
      <h1 className="text-4xl font-bold">404 - Ракетка не найдена!</h1>
      <Link
        href={ROUTES.rackets}
        className="mt-6 px-6 py-3 bg-accent text-white rounded"
      >
        Все ракетки
      </Link>
    </div>
  );
}
