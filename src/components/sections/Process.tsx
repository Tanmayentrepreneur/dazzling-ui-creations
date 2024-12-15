import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Smart, Not Complex",
    description: "We identify your lowest-hanging fruit – the tasks eating up time and resources right now. By starting with quick wins, you see immediate value while we build toward bigger solutions."
  },
  {
    number: "2",
    title: "Build What Works",
    description: "No over-engineered solutions. We combine battle-tested tools and workflows to create automations that just work. Everything is documented, maintainable, and built to grow with your business."
  },
  {
    number: "3",
    title: "Scale What Succeeds",
    description: "Every automation is tied to clear metrics – time saved, costs reduced, or revenue generated. Once we prove what works, we double down and scale it across your organization."
  }
];

export const Process = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">The No-BS Approach</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 left-0 text-6xl font-bold text-accent/20">
                {step.number}
              </div>
              <div className="pt-8">
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};