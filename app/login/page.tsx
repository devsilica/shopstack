import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import AuthLayout from "@/components/auth/auth-layout";
import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <AuthLayout
        title="Welcome Back"
        description="Sign in to manage your orders, wishlist, and account."
      >
        <LoginForm />
      </AuthLayout>

      <Footer />
    </>
  );
}