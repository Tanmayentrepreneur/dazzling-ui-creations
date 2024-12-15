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
      <div className="bg-black/90 text-white py-2 text-center text-sm">
        This site was made with AI in less than 6 hours 🙂
      </div>
    </main>
  );
};

export default Index;