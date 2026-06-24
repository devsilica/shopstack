import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">ShopStack</h1>
      </main>

      <Footer />
    </>
  );
}