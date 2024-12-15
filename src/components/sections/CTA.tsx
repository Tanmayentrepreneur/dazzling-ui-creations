import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 px-4 bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let us handle your AI automation so you can focus on what you're best at.
          </h2>
          <button className="button-primary mb-12 mx-auto flex items-center gap-2">
            Book a Strategy Call
            <ArrowRight className="w-5 h-5" />
          </button>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-accent" />
              <span>No Lock-in Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-accent" />
              <span>End-to-end Implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-accent" />
              <span>Full Documentation & Training</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};