import { motion } from "framer-motion";
import { Lightbulb, Rocket, Target } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Smart, Not Complex",
    description: "We identify your lowest-hanging fruit – the tasks eating up time and resources right now. By starting with quick wins, you see immediate value while we build toward bigger solutions.",
    icon: Lightbulb
  },
  {
    number: "2",
    title: "Build What Works",
    description: "No over-engineered solutions. We combine battle-tested tools and workflows to create automations that just work. Everything is documented, maintainable, and built to grow with your business.",
    icon: Rocket
  },
  {
    number: "3",
    title: "Scale What Succeeds",
    description: "Every automation is tied to clear metrics – time saved, costs reduced, or revenue generated. Once we prove what works, we double down and scale it across your organization.",
    icon: Target
  }
];

export const Process = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">The No-BS Approach</h2>
        <div className="space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-start relative"
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary flex items-center justify-center">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-4xl md:text-6xl font-bold text-secondary mb-4">{step.number}</div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-base md:text-lg">{step.description}</p>
                </div>
                {index !== steps.length - 1 && (
                  <div className="absolute left-6 md:left-8 top-16 bottom-0 w-px bg-secondary hidden md:block" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};