import { SiteNav } from "@/components/nav/SiteNav";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero />
      </main>
    </>
  );
}
