import { motion } from "framer-motion";
import { AlertTriangle, Brain, Clock, Code, DollarSign, Target } from "lucide-react";

const challenges = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Overwhelmed by AI Tools",
    description: "You've tried various AI tools but they're creating more complexity instead of simplifying your workflow. You need a clear strategy that actually works."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Time-Consuming Setup",
    description: "Setting up AI tools takes too much time and effort. You need efficient solutions that can be implemented quickly without disrupting your business."
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Cost Concerns",
    description: "AI implementations often exceed budgets with unclear ROI. You need cost-effective solutions that deliver measurable business value."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Technical Complexity",
    description: "Complex technical requirements are holding you back. You need practical solutions that don't require extensive technical expertise."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Unclear Direction",
    description: "You're unsure which AI tools are right for your business. You need expert guidance to choose and implement the most effective solutions."
  },
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: "Integration Issues",
    description: "Integrating AI with existing systems is challenging. You need seamless solutions that work with your current business processes."
  }
];

export const Challenges = () => {
  return (
    <section className="py-20 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Sound familiar?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 text-primary">{challenge.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>
              <p className="text-muted-foreground">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 50" className="w-full" preserveAspectRatio="none">
          <path fill="#f6e9ce" fillOpacity="1" d="M0,16L48,18.7C96,21,192,27,288,29.3C384,32,480,32,576,29.3C672,27,768,21,864,21.3C960,21,1056,27,1152,29.3C1248,32,1344,32,1392,32L1440,32L1440,50L1392,50C1344,50,1248,50,1152,50C1056,50,960,50,864,50C768,50,672,50,576,50C480,50,384,50,288,50C192,50,96,50,48,50L0,50Z"></path>
        </svg>
      </div>
    </section>
  );
};