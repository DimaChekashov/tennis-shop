import RacketsPage from "@/pages/rackets";
import { fetchRackets } from "@/shared/api/fetchRackets";
import { RacketType } from "@/shared/lib/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tennis Shop - Rackets",
};

export default async function Rackets() {
  // TODO: Create helper for fetching
  const rackets = await fetchRackets().then((res) => res.json());
  const brands: string[] = Array.from(
    new Set(rackets.map((racket: RacketType) => racket.brand.name))
  );

  return <RacketsPage racketsData={rackets} brandsNames={brands} />;
}
