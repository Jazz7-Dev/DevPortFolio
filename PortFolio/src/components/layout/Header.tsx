import { useRef, useState } from "react";
import { 
  Bell, 
  Menu, 
  Mic, 
  Search,
  Upload, 
  UserCircle,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onToggleSidebar: () => void;
}

export function Header({ onToggleSidebar }: HeaderProps) {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchFocus = () => {
    if (window.innerWidth < 768) {
      setIsMobileSearchOpen(true);
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  const handleCloseSearch = () => {
    setIsMobileSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left section - Logo & menu */}
        <div className={cn("flex items-center gap-4", isMobileSearchOpen && "hidden md:flex")}>
          <Button 
            onClick={onToggleSidebar}
            variant="ghost" 
            size="icon" 
            className="shrink-0"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
          
          <div className="flex items-center gap-1 text-xl font-semibold">
            <svg 
              className="h-6 w-6 text-red-600" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            <span className="hidden sm:inline">YouTube</span>
          </div>
        </div>

        {/* Center section - Search */}
        <div className={cn(
          "absolute left-0 right-0 top-0 z-50 flex h-full items-center justify-between bg-background px-4 py-3 md:static md:flex-1 md:justify-center md:px-0 md:py-0",
          !isMobileSearchOpen && "hidden md:flex"
        )}>
          {isMobileSearchOpen && (
            <Button 
              onClick={handleCloseSearch}
              variant="ghost" 
              size="icon" 
              className="mr-2 md:hidden"
            >
              <X className="h-5 w-5" />
            </Button>
          )}
          
          <div className="flex w-full max-w-[600px] items-center">
            <div className="relative flex-1">
              <Input
                ref={searchInputRef}
                placeholder="Search"
                className="rounded-r-none border-r-0 pr-10"
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0 h-full rounded-none"
              >
                <X className="h-4 w-4 opacity-60" />
              </Button>
            </div>
            <Button className="h-10 rounded-l-none bg-muted/80 hover:bg-muted">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="ml-2">
              <Mic className="h-5 w-5" />
              <span className="sr-only">Search with voice</span>
            </Button>
          </div>
        </div>

        {/* Right section - Actions */}
        <div className={cn("flex items-center gap-1", isMobileSearchOpen && "hidden md:flex")}>
          <Button 
            onClick={handleSearchFocus}
            variant="ghost" 
            size="icon" 
            className="md:hidden"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Upload className="h-5 w-5" />
            <span className="sr-only">Upload</span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          
          <ThemeToggle />
          
          <Button variant="ghost" size="icon" className="rounded-full">
            <UserCircle className="h-6 w-6" />
            <span className="sr-only">Account</span>
          </Button>
        </div>
      </div>
    </header>
  );
}