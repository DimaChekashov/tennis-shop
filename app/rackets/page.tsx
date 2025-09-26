import RacketsPage from "@/pages/rackets";
import { fetchRackets } from "@/shared/api/rackets";
import { RacketType } from "@/shared/lib/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Tennis Shop - Rackets",
};

export default async function Rackets() {
  // TODO: Create helper for fetching
  const rackets = await fetchRackets({ page: 1, limit: 10 });

  if (!rackets || !rackets.data) return notFound();

  const brands: string[] = Array.from(
    new Set(rackets.data.map((racket: RacketType) => racket.brand.name))
  );

  return <RacketsPage racketsData={rackets.data} brandsNames={brands} />;
}
