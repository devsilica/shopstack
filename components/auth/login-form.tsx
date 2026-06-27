import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  return (
    <form className="space-y-6">

      <Input
        type="email"
        placeholder="Email Address"
      />

      <Input
        type="password"
        placeholder="Password"
      />

      <Button
        className="w-full rounded-full"
        size="lg"
      >
        Sign In
      </Button>

      <p className="text-center text-sm text-neutral-500">
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="font-medium underline"
        >
          Create one
        </Link>
      </p>

    </form>
  );
}