"use client";

import Image from "next/image";
import { Short, ShortCategories } from "@/lib/types";
import { ChangeEvent, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { usePathname, useRouter } from "next/navigation";
import { InputSearch } from "@/components/ui/input-search";

type ShortsProps = {
  initialShorts: Short[];
};

export default function Shorts({ initialShorts }: ShortsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [searchValue, setSearchValue] = useState("");
  const [shorts, setShorts] = useState(initialShorts);
  const [category, setCategory] = useState<string>();

  useEffect(() => {
    setShorts(initialShorts);
    setSearchValue("");
  }, [initialShorts]);

  const onChangeCategory = (selectedCategory: string) => {
    const nextCategory =
      selectedCategory === category ? undefined : selectedCategory;
    setCategory(nextCategory);

    router.push(
      `${pathname}${nextCategory ? `?category=${nextCategory}` : ""}`
    );
  };

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredShorts = initialShorts.filter(
      (short) =>
        short.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        short.category.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setShorts(filteredShorts);
    setSearchValue(e.target.value);
  };

  return (
    <>
      <InputSearch
        className="w-[400px]"
        placeholder="Search..."
        onChange={onSearch}
        value={searchValue}
      />
      <div className="text-title font-semibold py-1 mt-6 mb-4">Shorts</div>
      <div className="flex space-x-2 py-3">
        {Object.keys(ShortCategories).map((shortCategory) => (
          <Badge
            key={shortCategory}
            variant={shortCategory === category ? "default" : "outline"}
            onClick={() => onChangeCategory(shortCategory)}
          >
            {ShortCategories[shortCategory as keyof typeof ShortCategories]}
          </Badge>
        ))}
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
                  {ShortCategories[short.category]}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
