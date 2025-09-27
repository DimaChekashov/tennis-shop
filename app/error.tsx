"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-full">
      <h2 className="text-4xl font-bold">Что-то пошло не так!</h2>
      <button
        className="mt-6 px-6 py-3 bg-accent text-white rounded cursor-pointer"
        onClick={() => reset()}
      >
        Перезагрузить страницу
      </button>
    </div>
  );
}
