import Image from "next/image";
import { Short, ShortType } from "@/app/types";

export default async function Shorts() {
  const data = await fetch(process.env.NEXT_PUBLIC_API_URL || "");
  const shorts: Short[] = await data.json();
  return (
    <div className="px-10 py-3">
      <div className="text-title font-semibold py-1 mt-6 mb-4">Shorts</div>
      <div className="grid grid-cols-5 gap-3">
        {shorts.map((short) => (
          <div key={short.id} className="relative h-[380px] w-full rounded-xl">
            <Image
              className="rounded-xl object-cover"
              fill
              src={short.thumbnail}
              alt={short.title}
            />
            <div className="absolute w-full h-2/4 bottom-0 bg-gradient-to-b from-gradient-from to-gradient-to" />
            <div className="relative h-full w-full flex items-end px-2.5 py-3">
              <div>
                <div className="text-fg-primary-reverse text-sm font-medium">
                  {short.title}
                </div>
                <div className="text-tag p-1 border rounded-md text-fg-inactive inline">
                  {ShortType[short.category]}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
