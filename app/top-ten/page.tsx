import TopTenPage from "@/pages/top-ten";
import { fetchTopTenRackets } from "@/shared/api/rackets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tennis Shop - Top-10 Rackets",
  description: "Tennis Shop - Top-10 Rackets for tennis players",
};

export default async function TopTenRackets() {
  const rackets = await fetchTopTenRackets();

  if (rackets.isError) return "error";

  if (rackets.data === undefined) return "no data";

  return <TopTenPage racketsData={rackets.data} />;
}
