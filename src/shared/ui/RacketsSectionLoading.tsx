export const RacketsSectionLoading = () => {
  return (
    <div className="h-[calc(((100vw*4)/3)+92px)] sm:h-[965] md:h-[439] lg:h-[437] xl:h-[506] 2xl:h-[492] mb-15 flex flex-col items-center justify-center">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-2 text-gray-600">Загрузка...</p>
    </div>
  );
};
