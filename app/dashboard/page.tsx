import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

import DashboardHeader from "@/components/dashboard/dashboard-header";
import StatsCard from "@/components/dashboard/stats-card";
import RecentOrders from "@/components/dashboard/recent-orders";
import WishlistPreview from "@/components/dashboard/wishlist-preview";
import QuickActions from "@/components/dashboard/quick-actions";

export default function DashboardPage() {
  return (
    <>
      <Navbar />

      <Section>
        <Container>

          <DashboardHeader />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard title="Orders" value="24" />
            <StatsCard title="Wishlist" value="12" />
            <StatsCard title="Reviews" value="8" />
            <StatsCard title="Reward Points" value="1,280" />
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr]">
            <RecentOrders />
            <QuickActions />
          </div>

          <div className="mt-12">
            <WishlistPreview />
          </div>

        </Container>
      </Section>

      <Footer />
    </>
  );
}