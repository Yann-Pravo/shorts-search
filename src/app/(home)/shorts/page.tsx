import Form from "./_components/shorts";
import { fetchShortsAction } from "./_components/fetch-shorts.action";

export default async function Shorts({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const result = await fetchShortsAction(searchParams?.category);
  const shorts = result?.data;

  return (
    <div className="px-10 py-3">
      {shorts && <Form initialShorts={shorts} />}
    </div>
  );
}
