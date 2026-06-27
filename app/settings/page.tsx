import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

import SettingsHeader from "@/components/settings/settings-header";
import ProfileSettings from "@/components/settings/profile-settings";
import AddressSettings from "@/components/settings/address-settings";
import NotificationSettings from "@/components/settings/notification-settings";
import SecuritySettings from "@/components/settings/security-settings";

export default function SettingsPage() {
  return (
    <>
      <Navbar />

      <Section>
        <Container>

          <SettingsHeader />

          <div className="mt-10 grid gap-8">

            <ProfileSettings />

            <AddressSettings />

            <NotificationSettings />

            <SecuritySettings />

          </div>

        </Container>
      </Section>

      <Footer />
    </>
  );
}