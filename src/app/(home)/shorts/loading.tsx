import { Badge } from "@/components/ui/badge";
import { InputSearch } from "@/components/ui/input-search";
import { Skeleton } from "@/components/ui/skeleton";
import { ShortCategories } from "@/lib/types";

export default function ShortsLoading() {
  return (
    <>
      <InputSearch
        placeholder="Search..."
        className="w-[400px] h-[36px]"
        disabled
      />
      <div className="text-title font-semibold py-1 mt-6 mb-4">Shorts</div>
      <div className="flex space-x-2 py-3">
        {Object.keys(ShortCategories).map((shortCategory) => (
          <Badge key={shortCategory} variant="outline">
            {ShortCategories[shortCategory as keyof typeof ShortCategories]}
          </Badge>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-3 mt-6">
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
      </div>
    </>
  );
}
