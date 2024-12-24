import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[120vh] flex items-center bg-[#f6e9ce] relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-6xl mx-auto gap-12">
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold"
            >
              Hi, I'm Tanmay
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-5xl font-semibold"
            >
              I Supercharge businesses with <span className="text-green-600">AI</span> ⚡
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0"
            >
              AI automations expert and technical AI tutorials writer at Ben's Bites (100k+ readers). 
              I help businesses implement practical AI solutions that drive real results.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center md:justify-start pt-6"
            >
              <button 
                onClick={() => window.open('https://calendly.com/tanmay-iamtanmay/30min', '_blank')}
                className="bg-black text-white px-8 md:px-10 py-4 md:py-5 rounded text-lg font-semibold 
                         flex items-center gap-3 transition-all duration-300 ease-out 
                         hover:scale-105 hover:shadow-lg hover:translate-y-[-2px] hover:bg-black/90
                         active:scale-95 cursor-pointer group"
              >
                <span className="group-hover:translate-x-0.5 transition-transform duration-300">Book a Strategy Call</span>
                <MessageCircle className="w-6 h-6 group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-48 md:w-56 lg:w-64 aspect-square"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <img
                  src="/lovable-uploads/9f4eeae0-cf22-4c6d-9b74-26e7f5f64326.png"
                  alt="Tanmay"
                  className="rounded-2xl shadow-2xl object-cover w-full h-full"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#f6e9ce]/0 via-[#f6e9ce]/10 to-[#f6e9ce]/30 rounded-2xl -z-10 blur-xl transform scale-110" />
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 md:mt-20"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://bensbites.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-all duration-300 hover:opacity-80"
            >
              <img src="/lovable-uploads/a22e121d-b85f-4d69-837f-0c1523121397.png" alt="Ben's Bites" className="h-8 md:h-10" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://lindy.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-all duration-300 hover:opacity-80"
            >
              <img src="/lovable-uploads/9cf2b3e1-78a1-4fce-a40c-8bb57ddccd5e.png" alt="Lindy" className="h-8 md:h-10" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://happywagon.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-all duration-300 hover:opacity-80"
            >
              <img src="/lovable-uploads/02481cd9-fc97-4c0d-8a50-5df066b4d2e6.png" alt="Happy Wagon" className="h-8 md:h-10" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-1 h-16 relative overflow-hidden">
            <motion.div
              animate={{ 
                y: [0, 40, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};