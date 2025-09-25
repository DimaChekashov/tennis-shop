import RacketPage from "@/pages/racket";
import { fetchRackets } from "@/shared/api/rackets";
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
  const rackets = await fetchRackets({ page: 1, limit: 20 });

  if (!rackets || !rackets.data) return {};

  const racket = rackets.data.find((racket) => racket.id === Number(id));

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
