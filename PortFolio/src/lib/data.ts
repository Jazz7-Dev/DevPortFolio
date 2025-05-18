import { Video, Category } from "./types";
import { 
  Home, 
  Flame, 
  Play, 
  Clock, 
  History, 
  ThumbsUp, 
  Clapperboard, 
  Gamepad2, 
  Music2, 
  Newspaper, 
  Trophy, 
  Lightbulb
} from "lucide-react";

export const categories: Category[] = [
  { id: "all", name: "All", icon: Home },
  { id: "trending", name: "Trending", icon: Flame },
  { id: "shorts", name: "Shorts", icon: Play },
  { id: "music", name: "Music", icon: Music2 },
  { id: "gaming", name: "Gaming", icon: Gamepad2 },
  { id: "programming", name: "Programming", icon: Clapperboard },
  { id: "history", name: "History", icon: History },
  { id: "watchLater", name: "Watch Later", icon: Clock },
  { id: "likedVideos", name: "Liked Videos", icon: ThumbsUp },
  { id: "news", name: "News", icon: Newspaper },
  { id: "sports", name: "Sports", icon: Trophy },
  { id: "learning", name: "Learning", icon: Lightbulb },
];

export const videos: Video[] = [
  {
    id: "1",
    title: "How to Build a Modern Website with React in 2025",
    thumbnail: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelName: "WebDev Mastery",
    channelAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    views: "1.2M views",
    uploadedAt: "3 weeks ago",
    duration: "18:24",
    category: "programming"
  },
  {
    id: "2",
    title: "Learn Tailwind CSS in 60 Minutes | Complete Beginner's Guide",
    thumbnail: "https://images.pexels.com/photos/5483064/pexels-photo-5483064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelName: "CSS Wizard",
    channelAvatar: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    views: "845K views",
    uploadedAt: "2 months ago",
    duration: "59:45",
    category: "programming"
  },
  {
    id: "3",
    title: "Top Gaming Moments of 2025",
    thumbnail: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelName: "Gaming Central",
    channelAvatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    views: "2.8M views",
    uploadedAt: "1 month ago",
    duration: "22:15",
    category: "gaming"
  },
  {
    id: "4",
    title: "Summer Music Mix 2025 | Best Pop Hits",
    thumbnail: "https://images.pexels.com/photos/7015034/pexels-photo-7015034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelName: "Music Vibes",
    channelAvatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    views: "567K views",
    uploadedAt: "5 days ago",
    duration: "1:45:12",
    category: "music"
  },
  {
    id: "5",
    title: "AI in 2025: What Developers Need to Know",
    thumbnail: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelName: "Future Tech",
    channelAvatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    views: "3.4M views",
    uploadedAt: "2 weeks ago",
    duration: "34:18",
    category: "programming"
  },
  {
    id: "6",
    title: "Epic Gaming Fails Compilation",
    thumbnail: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelName: "Gaming Laughs",
    channelAvatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    views: "756K views",
    uploadedAt: "3 months ago",
    duration: "28:56",
    category: "gaming"
  },
  {
    id: "7",
    title: "Classical Music for Studying and Focus",
    thumbnail: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelName: "Classical Vibes",
    channelAvatar: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    views: "1.3M views",
    uploadedAt: "1 month ago",
    duration: "24:47",
    category: "music"
  },
  {
    id: "8",
    title: "Breaking News: Tech Revolution",
    thumbnail: "https://images.pexels.com/photos/16129877/pexels-photo-16129877/free-photo-of-futuristic-glowing-keyboard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelName: "Tech News",
    channelAvatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    views: "925K views",
    uploadedAt: "2 weeks ago",
    duration: "32:09",
    category: "news"
  },
  {
    id: "9",
    title: "World Cup Highlights 2025",
    thumbnail: "https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelName: "Sports Central",
    channelAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    views: "487K views",
    uploadedAt: "2 months ago",
    duration: "1:12:35",
    category: "sports"
  },
  {
    id: "10",
    title: "Learn Physics in 20 Minutes",
    thumbnail: "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelName: "Quick Learning",
    channelAvatar: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    views: "658K views",
    uploadedAt: "3 weeks ago",
    duration: "15:23",
    category: "learning"
  },
  {
    id: "11",
    title: "Top 10 Music Hits This Week",
    thumbnail: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelName: "Music Charts",
    channelAvatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    views: "1.1M views",
    uploadedAt: "2 months ago",
    duration: "26:42",
    category: "music"
  },
  {
    id: "12",
    title: "Latest Gaming News Roundup",
    thumbnail: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelName: "Gaming News",
    channelAvatar: "https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    views: "423K views",
    uploadedAt: "4 months ago",
    duration: "42:31",
    category: "gaming"
  }
];