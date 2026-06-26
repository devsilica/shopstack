import {
  ShieldCheck,
  Truck,
  RotateCcw,
  CreditCard,
} from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Free Shipping",
  },
  {
    icon: RotateCcw,
    title: "30-Day Returns",
  },
  {
    icon: CreditCard,
    title: "Secure Checkout",
  },
  {
    icon: ShieldCheck,
    title: "2-Year Warranty",
  },
];

export default function ProductBenefits() {
  return (
    <div className="space-y-4 rounded-3xl border p-6">
      {benefits.map((benefit) => (
        <div
          key={benefit.title}
          className="flex items-center gap-3"
        >
          <benefit.icon className="h-5 w-5 text-neutral-700" />

          <span className="text-sm font-medium">
            {benefit.title}
          </span>
        </div>
      ))}
    </div>
  );
}