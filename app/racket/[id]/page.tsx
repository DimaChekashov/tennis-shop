import RacketPage from "@/pages/racket";
import { fetchAllRackets } from "@/shared/api/rackets";
import { RacketType } from "@/shared/lib/types";
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

  // TODO: Create helper for fetching
  const racket = await fetchAllRackets().then((data) =>
    data.find((racket: RacketType) => racket.id === Number(id))
  );

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
