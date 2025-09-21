import RacketPage from "@/pages/racket";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "4" }, { id: "7" }];
}

export default async function Racket({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <RacketPage racketId={id} />;
}
