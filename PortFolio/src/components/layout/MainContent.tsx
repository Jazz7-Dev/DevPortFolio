import { useState } from "react";
import { ChipsBar } from "@/components/ChipsBar";
import { VideoGrid } from "@/components/video/VideoGrid";
import { cn } from "@/lib/utils";
import type { SortOption } from "@/lib/types";

interface MainContentProps {
  isSidebarOpen: boolean;
}

export function MainContent({ isSidebarOpen }: MainContentProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  return (
    <main 
      className={cn(
        "min-h-[calc(100vh-3.5rem)] pt-14 md:pt-16",
        "lg:ml-64"
      )}
    >
      <ChipsBar 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <div className="p-4">
        <VideoGrid category={selectedCategory} sortBy={sortBy} />
      </div>
    </main>
  );
}