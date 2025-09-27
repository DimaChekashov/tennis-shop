"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-4xl font-bold">Что-то пошло не так!</h2>
        <button
          className="mt-6 px-6 py-3 bg-accent text-white rounded cursor-pointer"
          onClick={() => reset()}
        >
          Перезагрузить страницу
        </button>
      </body>
    </html>
  );
}
