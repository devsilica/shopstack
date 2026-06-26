import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CheckoutOptionCardProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  variant?: "default" | "outline" | "secondary";
}

export default function CheckoutOptionCard({
  title,
  description,
  buttonText,
  href,
  variant = "default",
}: CheckoutOptionCardProps) {
  return (
    <div className="rounded-[32px] border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h2 className="text-3xl font-semibold">{title}</h2>

      <p className="mt-4 text-neutral-600 leading-7">
        {description}
      </p>

      <Button
        asChild
        variant={variant}
        className="mt-8 w-full rounded-full"
      >
        <Link href={href}>
          {buttonText}
        </Link>
      </Button>
    </div>
  );
}