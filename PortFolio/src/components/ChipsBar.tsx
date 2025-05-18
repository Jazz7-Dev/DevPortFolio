import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { SortOption } from "@/lib/types";

interface ChipsBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const chips = [
  "All", 
  "Music", 
  "Gaming", 
  "Programming", 
  "News", 
  "Sports", 
  "Learning"
];

export function ChipsBar({ 
  selectedCategory, 
  onCategoryChange,
  sortBy,
  onSortChange
}: ChipsBarProps) {
  return (
    <div className="relative border-b py-3">
      <div className="flex items-center justify-between px-4">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max gap-2">
            {chips.map((chip) => (
              <Button
                key={chip}
                variant={selectedCategory === chip.toLowerCase() ? "default" : "secondary"}
                className="rounded-lg px-3 py-1.5 text-sm font-medium"
                size="sm"
                onClick={() => onCategoryChange(chip.toLowerCase())}
              >
                {chip}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>

        <div className="ml-4 shrink-0">
          <Select value={sortBy} onValueChange={(value) => onSortChange(value as SortOption)}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Gradient fade effect for scroll indication */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}