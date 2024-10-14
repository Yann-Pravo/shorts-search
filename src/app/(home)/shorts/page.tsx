import { Short } from "@/app/types";
import Form from "./_components/form";

export default async function Shorts() {
  const data = await fetch(process.env.NEXT_PUBLIC_API_URL || "");
  const shorts: Short[] = await data.json();

  return (
    <div className="px-10 py-3">
      <Form initialShorts={shorts} />
    </div>
  );
}
