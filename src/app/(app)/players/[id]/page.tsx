interface PlayerPageProps {
  params: Promise<{ id: string }>;
}

export default async function PlayerPage({ params }: PlayerPageProps) {
  const { id } = await params;

  return (
    <div>
      <h1 className="text-2xl font-semibold">Player #{id}</h1>
      <p className="mt-2 text-muted-foreground">Full profile and TVS Index metrics.</p>
    </div>
  );
}
