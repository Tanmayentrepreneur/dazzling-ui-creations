import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-secondary bg-dots relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-50"></div>
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm Tanmay
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 flex items-center gap-2">
              I supercharge your business with <span className="text-green-600">AI</span>
              <span>⚡</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              AI automations expert and technical AI tutorials writer at Ben's Bites (100k+ readers). 
              I help businesses implement practical AI solutions that drive real results.
            </p>
            <a 
              href="https://calendly.com/tanmay-iamtanmay/30min"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-black/90 transition-all"
            >
              Book a Strategy Call
              <MessageCircle className="w-5 h-5" />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <img
                src="/lovable-uploads/72f0edda-969d-4480-ab7b-c57e9c3c183d.png"
                alt="Tanmay"
                className="rounded-2xl shadow-2xl"
                style={{ transform: 'rotate(-90deg)', maxHeight: '400px', objectFit: 'cover' }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <a href="https://bensbites.com" target="_blank" rel="noopener noreferrer">
              <img src="/lovable-uploads/a22e121d-b85f-4d69-837f-0c1523121397.png" alt="Ben's Bites" className="h-8 md:h-10" />
            </a>
            <a href="https://lindy.ai" target="_blank" rel="noopener noreferrer">
              <img src="/lovable-uploads/9cf2b3e1-78a1-4fce-a40c-8bb57ddccd5e.png" alt="Lindy" className="h-8 md:h-10" />
            </a>
            <a href="https://happywagon.com" target="_blank" rel="noopener noreferrer">
              <img src="/lovable-uploads/02481cd9-fc97-4c0d-8a50-5df066b4d2e6.png" alt="Happy Wagon" className="h-8 md:h-10" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};