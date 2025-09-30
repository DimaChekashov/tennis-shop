import { fetchRackets, fetchTopTenRackets } from "@/shared/api/rackets";
import { ROUTES } from "@/shared/lib/consts";
import { RacketsSection } from "@/shared/ui/RacketsSection";
import { RacketsSectionLoading } from "@/shared/ui/RacketsSectionLoading";
import { Suspense } from "react";

export const HomePage = async () => {
  const rackets = fetchRackets({ page: 1, limit: 10 });
  const topTenRackets = fetchTopTenRackets();

  return (
    <>
      <Suspense fallback={<RacketsSectionLoading />}>
        <RacketsSection
          title="Ракетки"
          routeHref={ROUTES.rackets}
          racketsPromise={rackets}
        />
      </Suspense>
      <Suspense fallback={<RacketsSectionLoading />}>
        <RacketsSection
          title="Топ 10 ракеток"
          routeHref={ROUTES.topTen}
          racketsPromise={topTenRackets}
        />
      </Suspense>
    </>
  );
};
