import { ROUTES } from "@/shared/lib/consts";
import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold">403 - forbidden!</h2>
      <Link
        href={ROUTES.home}
        className="mt-6 px-6 py-3 bg-accent text-white rounded cursor-pointer"
      >
        На главную страницу
      </Link>
    </div>
  );
}
