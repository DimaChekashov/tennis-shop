export default async function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-2 text-gray-600">Загрузка...</p>
    </div>
  );
}
