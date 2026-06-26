import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import AuthLayout from "@/components/auth/auth-layout";
import SignupForm from "@/components/auth/signup-form";

export default function SignupPage() {
  return (
    <>
      <Navbar />

      <AuthLayout
        title="Create Account"
        description="Join ShopStack and enjoy faster checkout, order tracking, and saved favorites."
      >
        <SignupForm />
      </AuthLayout>

      <Footer />
    </>
  );
}