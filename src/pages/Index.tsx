import { Hero } from "@/components/sections/Hero";
import { Challenges } from "@/components/sections/Challenges";
import { Process } from "@/components/sections/Process";
import { Tutorials } from "@/components/sections/Tutorials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Challenges />
      <Process />
      <Tutorials />
      <FAQ />
      <CTA />
    </main>
  );
};

export default Index;