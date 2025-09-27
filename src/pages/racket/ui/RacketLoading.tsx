export const RacketLoading = () => {
  return (
    <div className="flex gap-4 flex-col items-center justify-center min-h-full">
      <div className="relative">
        <div className="w-12 h-12 rounded-full absolute border-4 border-solid border-gray-200"></div>
        <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-blue-500 border-t-transparent"></div>
      </div>

      <div className="text-center">
        <p className="text-lg font-semibold text-white">
          Загружаем информацию о ракетке
        </p>
        <p className="text-sm text-gray-500 mt-1">Пожалуйста, подождите...</p>
      </div>
    </div>
  );
};
