import { Hero } from "@/components/sections/Hero";
import { Challenges } from "@/components/sections/Challenges";
import { Process } from "@/components/sections/Process";
import { Tutorials } from "@/components/sections/Tutorials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="challenges">
        <Challenges />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="tutorials">
        <Tutorials />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <CTA />
    </main>
  );
};

export default Index;