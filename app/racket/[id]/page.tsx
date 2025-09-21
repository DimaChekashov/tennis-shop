import RacketPage from "@/pages/racket";
import { fetchRackets } from "@/shared/api/fetchRackets";
import { Metadata } from "next";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "4" }, { id: "7" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const racket = await fetchRackets()
    .then((res) => res.json())
    .then((data) => data[Number(id) - 1]);

  if (!racket) return {};

  return {
    title: `Tennis Shop - ${racket.name}`,
    description: racket.description,
  };
}

export default async function Racket({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <RacketPage racketId={id} />;
}
