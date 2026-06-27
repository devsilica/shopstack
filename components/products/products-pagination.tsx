import { Button } from "@/components/ui/button";

export default function ProductsPagination() {
  return (
    <div className="mt-20 flex justify-center gap-3">

      <Button variant="outline">
        Previous
      </Button>

      <Button>
        1
      </Button>

      <Button variant="outline">
        2
      </Button>

      <Button variant="outline">
        3
      </Button>

      <Button variant="outline">
        Next
      </Button>

    </div>
  );
}