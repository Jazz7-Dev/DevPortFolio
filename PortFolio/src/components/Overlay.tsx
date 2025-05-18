import { cn } from "@/lib/utils";

interface OverlayProps {
  isVisible: boolean;
  onClick: () => void;
}

export function Overlay({ isVisible, onClick }: OverlayProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-20 bg-black/50 transition-opacity duration-300",
        isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        "lg:pointer-events-none lg:opacity-0"
      )}
      onClick={onClick}
    />
  );
}