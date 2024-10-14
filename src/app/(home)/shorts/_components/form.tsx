"use client";

import Image from "next/image";
import { Short, ShortType } from "@/app/types";
import { useOptimistic, useState } from "react";
import { Badge } from "@/components/ui/badge";

type FormProps = {
  initialShorts: Short[];
};

export default function Form({ initialShorts }: FormProps) {
  const [shorts, setShorts] = useOptimistic(initialShorts);
  const [selectedShortTypes, setSelectedShortTypes] = useState<string[]>([]);

  return (
    <>
      <div className="text-title font-semibold py-1 mt-6 mb-4">Shorts</div>
      <div className="flex space-x-2 py-3">
        {Object.keys(ShortType).map((shortType) => {
          const isSelected = selectedShortTypes.includes(shortType);
          return (
            <Badge
              key={shortType}
              variant={isSelected ? "default" : "outline"}
              onClick={() =>
                isSelected
                  ? setSelectedShortTypes(
                      selectedShortTypes.filter(
                        (selectedShortType) => selectedShortType !== shortType
                      )
                    )
                  : setSelectedShortTypes([...selectedShortTypes, shortType])
              }
            >
              {ShortType[shortType as keyof typeof ShortType]}
            </Badge>
          );
        })}
      </div>
      <div className="grid grid-cols-5 gap-3 mt-6">
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
                <div className="text-fg-primary-reverse text-sm font-medium mb-1">
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
    </>
  );
}
