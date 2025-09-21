import RacketsPage from "@/pages/rackets";
import { fetchRockets } from "@/shared/api/fetchRockets";
import { RacketType } from "@/shared/lib/types";

export default async function Rackets() {
  const rackets = await fetchRockets().then((res) => res.json());
  const brands: string[] = Array.from(
    new Set(rackets.map((racket: RacketType) => racket.brand.name))
  );

  return <RacketsPage racketsData={rackets} brandsNames={brands} />;
}
