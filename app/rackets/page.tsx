import RacketsPage from "@/pages/rackets";
import { fetchRackets } from "@/shared/api/fetchRackets";
import { RacketType } from "@/shared/lib/types";

export default async function Rackets() {
  const rackets = await fetchRackets().then((res) => res.json());
  const brands: string[] = Array.from(
    new Set(rackets.map((racket: RacketType) => racket.brand.name))
  );

  return <RacketsPage racketsData={rackets} brandsNames={brands} />;
}
