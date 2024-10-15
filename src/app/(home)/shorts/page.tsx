import { fetchShortsAction } from "./_components/fetch-shorts.action";
import Shorts from "./_components/shorts";

export default async function ShortsPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const result = await fetchShortsAction(searchParams?.category);
  const shorts = result?.data;

  // Only here to check loading status
  // const sleep = (ms: number) =>
  //   new Promise((resolve) => setTimeout(resolve, ms));
  // await sleep(2000);

  return <>{shorts && <Shorts initialShorts={shorts} />}</>;
}
