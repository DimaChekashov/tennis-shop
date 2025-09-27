import RacketPage from "@/pages/racket";
import { fetchRacketById } from "@/shared/api/rackets";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const { data, isError } = await fetchRacketById(id);

  if (isError || data === undefined) return {};

  return {
    title: `Tennis Shop - ${data.name}`,
    description: data.description,
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
