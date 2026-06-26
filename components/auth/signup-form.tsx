import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupForm() {
  return (
    <form className="space-y-6">

      <Input
        placeholder="Full Name"
      />

      <Input
        type="email"
        placeholder="Email Address"
      />

      <Input
        type="password"
        placeholder="Password"
      />

      <Input
        type="password"
        placeholder="Confirm Password"
      />

      <Button
        className="w-full rounded-full"
        size="lg"
      >
        Create Account
      </Button>

      <p className="text-center text-sm text-neutral-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium underline"
        >
          Sign In
        </Link>
      </p>

    </form>
  );
}