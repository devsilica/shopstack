import CheckoutOptionCard from "./checkout-option-card";

export default function CheckoutOptions() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">

      <CheckoutOptionCard
        title="Sign In"
        description="Access your saved addresses, payment methods, and previous orders."
        buttonText="Sign In"
        href="/login"
      />

      <CheckoutOptionCard
        title="Create Account"
        description="Create an account for faster checkout and order tracking."
        buttonText="Create Account"
        href="/signup"
        variant="outline"
      />

      <CheckoutOptionCard
        title="Guest Checkout"
        description="Continue your purchase without creating an account."
        buttonText="Continue"
        href="/checkout"
        variant="secondary"
      />

    </div>
  );
}