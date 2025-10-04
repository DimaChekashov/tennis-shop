import RacketsPage from "@/pages/rackets";
import { fetchRackets } from "@/shared/api/rackets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tennis Shop - Rackets",
  description: "Tennis Shop - Rackets for tennis players",
};

export default async function Rackets() {
  const racketsPromise = fetchRackets({ page: 1, limit: 20 });

  return <RacketsPage racketsPromise={racketsPromise} />;
}
