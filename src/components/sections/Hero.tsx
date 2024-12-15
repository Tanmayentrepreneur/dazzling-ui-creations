import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          I'm Tanmay
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-accent">
          I supercharge your business with AI
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          AI automations expert helping businesses implement practical AI automation that drives real results
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="button-primary flex items-center gap-2">
            Book a Strategy Call
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};