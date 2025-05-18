import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { type Video } from "@/lib/types";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="group overflow-hidden border-0 bg-transparent shadow-none transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative cursor-pointer overflow-hidden rounded-xl">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <img
            src={video.thumbnail}
            alt={video.title}
            className={cn(
              "h-full w-full object-cover transition-transform duration-300",
              isHovered && "scale-105"
            )}
          />
        </AspectRatio>
        <div className="absolute bottom-1 right-1 rounded bg-black/80 px-1 py-0.5 text-xs text-white">
          {video.duration}
        </div>
      </div>
      
      <div className="mt-3 flex gap-3">
        <div className="h-9 w-9 shrink-0">
          <img
            src={video.channelAvatar}
            alt={video.channelName}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="line-clamp-2 text-base font-medium leading-tight text-foreground">
            {video.title}
          </h3>
          
          <div className="mt-1 flex items-center text-sm text-muted-foreground">
            <span>{video.channelName}</span>
            <CheckCircle className="ml-1 h-3.5 w-3.5 fill-muted-foreground text-background" />
          </div>
          
          <div className="text-sm text-muted-foreground">
            <span>{video.views}</span>
            <span className="mx-1">•</span>
            <span>{video.uploadedAt}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}