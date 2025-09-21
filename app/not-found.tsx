import { ROUTES } from "@/shared/lib/consts";
import Link from "next/link";

export default async function Racket() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full">
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
