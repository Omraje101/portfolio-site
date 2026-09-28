import { SiteNav } from "@/components/nav/SiteNav";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero />
        <Work />
      </main>
    </>
  );
}
