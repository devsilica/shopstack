import { CheckCircle2, Circle } from "lucide-react";

const steps = [
  { title: "Order Placed", completed: true },
  { title: "Payment Confirmed", completed: true },
  { title: "Shipped", completed: true },
  { title: "Out for Delivery", completed: false },
  { title: "Delivered", completed: false },
];

export default function TrackingTimeline() {
  return (
    <div className="mt-10 rounded-[32px] border bg-white p-8">
      <h2 className="mb-8 text-2xl font-semibold">
        Tracking Timeline
      </h2>

      <div className="space-y-8">
        {steps.map((step) => (
          <div key={step.title} className="flex items-center gap-5">
            {step.completed ? (
              <CheckCircle2 className="text-green-600" />
            ) : (
              <Circle className="text-neutral-400" />
            )}

            <span>{step.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}