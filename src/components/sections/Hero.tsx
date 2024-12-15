import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f6e9ce] relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-50"></div>
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm Tanmay
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 flex items-center gap-2">
              I Supercharge businesses with{" "}
              <span className="text-green-600 inline-flex items-center">
                AI <span className="ml-1">⚡</span>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              AI automations expert and technical AI tutorials writer at Ben's Bites (100k+ readers). 
              I help businesses implement practical AI solutions that drive real results.
            </p>
            <div className="flex justify-center md:justify-start">
              <motion.a 
                href="https://calendly.com/tanmay-iamtanmay/30min"
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-black/90 transition-all duration-300 w-auto group relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="relative z-10">Book a Strategy Call</span>
                <MessageCircle className="w-5 h-5 relative z-10" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-full transition-all duration-300"></div>
              </motion.a>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center">
            <div className="relative w-1/3 aspect-square">
              <img
                src="/lovable-uploads/72f0edda-969d-4480-ab7b-c57e9c3c183d.png"
                alt="Tanmay"
                className="rounded-2xl shadow-2xl object-cover w-full h-full transform-none"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <a href="https://bensbites.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <img src="/lovable-uploads/a22e121d-b85f-4d69-837f-0c1523121397.png" alt="Ben's Bites" className="h-6 md:h-10" />
            </a>
            <a href="https://lindy.ai" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <img src="/lovable-uploads/9cf2b3e1-78a1-4fce-a40c-8bb57ddccd5e.png" alt="Lindy" className="h-6 md:h-10" />
            </a>
            <a href="https://happywagon.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <img src="/lovable-uploads/02481cd9-fc97-4c0d-8a50-5df066b4d2e6.png" alt="Happy Wagon" className="h-6 md:h-10" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full">
          <path fill="#FFFFFF" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};