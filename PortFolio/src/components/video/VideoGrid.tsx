import { VideoCard } from "@/components/video/VideoCard";
import { videos } from "@/lib/data";
import type { SortOption } from "@/lib/types";

interface VideoGridProps {
  category: string;
  sortBy: SortOption;
}

export function VideoGrid({ category, sortBy }: VideoGridProps) {
  const filteredVideos = videos.filter(
    video => category === "all" || video.category === category
  );

  const sortedVideos = [...filteredVideos].sort((a, b) => {
    if (sortBy === "newest") {
      return a.uploadedAt.includes("day") ? -1 : 1;
    } else if (sortBy === "oldest") {
      return a.uploadedAt.includes("month") ? -1 : 1;
    } else {
      // Sort by views (popular)
      const aViews = parseInt(a.views.replace(/[^0-9]/g, ""));
      const bViews = parseInt(b.views.replace(/[^0-9]/g, ""));
      return bViews - aViews;
    }
  });

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {sortedVideos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}