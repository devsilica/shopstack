import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Newsletter from "@/components/layout/newsletter";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

import SearchHero from "@/components/search/search-hero";
import SearchBar from "@/components/search/search-bar";
import FilterSidebar from "@/components/search/filter-sidebar";
import SortDropdown from "@/components/search/sort-dropdown";
import SearchResults from "@/components/search/search-results";

export default function SearchPage() {
  return (
    <>
      <Navbar />

      <SearchHero />

      <Section className="pt-0">
        <Container>
          <SearchBar />

          <div className="mt-12 grid gap-12 lg:grid-cols-[280px_1fr]">
            <FilterSidebar />

            <div>
              <div className="mb-8 flex justify-end">
                <SortDropdown />
              </div>

              <SearchResults />
            </div>
          </div>
        </Container>
      </Section>

      <Newsletter />

      <Footer />
    </>
  );
}