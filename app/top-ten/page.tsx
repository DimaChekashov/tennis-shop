import TopTenPage from "@/pages/top-ten";
import { fetchTopTenRackets } from "@/shared/api/rackets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tennis Shop - Top-10 Rackets",
  description: "Tennis Shop - Top-10 Rackets for tennis players",
};

export default async function TopTenRackets() {
  const { isError, data } = await fetchTopTenRackets();

  if (isError) {
    throw new Error("error");
  }

  if (data === undefined) return <>Список ракеток пуст!</>;

  return <TopTenPage racketsData={data} />;
}
