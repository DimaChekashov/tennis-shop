import TopTenPage from "@/pages/top-ten";
import { fetchTopTenRackets } from "@/shared/api/rackets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tennis Shop - Top-10 Rackets",
};

export default async function Rackets() {
  const rackets = await fetchTopTenRackets();

  return <TopTenPage racketsData={rackets} />;
}
