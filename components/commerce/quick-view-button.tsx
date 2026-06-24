import { Button } from "@/components/ui/button";

interface QuickViewButtonProps {
  onClick?: () => void;
}

export default function QuickViewButton({
  onClick,
}: QuickViewButtonProps) {
  return (
    <Button
      variant="outline"
      className="w-full rounded-full"
      onClick={onClick}
    >
      Quick View
    </Button>
  );
}