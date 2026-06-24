import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WishlistButtonProps {
  active?: boolean;
  onClick?: () => void;
}

export default function WishlistButton({
  active = false,
  onClick,
}: WishlistButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full bg-white/90 backdrop-blur"
      onClick={onClick}
    >
      <Heart
        className={active ? "fill-black text-black" : ""}
        size={18}
      />
    </Button>
  );
}