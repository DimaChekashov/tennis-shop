import RacketsPage from "@/pages/rackets";
import { fetchRackets } from "@/shared/api/rackets";
import { RacketType } from "@/shared/lib/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tennis Shop - Rackets",
};

export default async function Rackets() {
  const { isError, data } = await fetchRackets({ page: 1, limit: 20 });

  if (isError) return "error";

  if (data === undefined) return "no data";

  const brands: string[] = Array.from(
    new Set(data.map((racket: RacketType) => racket.brand.name))
  );

  return <RacketsPage racketsData={data} brandsNames={brands} />;
}
