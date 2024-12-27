import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[120vh] flex items-center bg-[#f6e9ce] relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-6xl mx-auto gap-12">
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm Tanmay
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold">
              I Supercharge businesses with <span className="text-green-600">AI</span> ⚡
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
              AI automations expert and technical AI tutorials writer at Ben's Bites (100k+ readers). 
              I help businesses implement practical AI solutions that drive real results.
            </p>
            <div className="flex justify-center md:justify-start pt-6">
              <button 
                onClick={() => window.open('https://calendly.com/tanmay-iamtanmay/30min', '_blank')}
                className="bg-black text-white px-8 md:px-10 py-4 md:py-5 rounded text-lg font-semibold flex items-center gap-3 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:translate-y-[-2px] cursor-pointer group"
              >
                <span className="group-hover:translate-x-0.5 transition-transform duration-300">Book a Strategy Call</span>
                <MessageCircle className="w-6 h-6 group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-48 md:w-56 lg:w-64 aspect-square"
            >
              <img
                src="/lovable-uploads/9f4eeae0-cf22-4c6d-9b74-26e7f5f64326.png"
                alt="Tanmay"
                className="rounded-2xl shadow-2xl object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <a href="https://bensbites.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <img src="/lovable-uploads/a22e121d-b85f-4d69-837f-0c1523121397.png" alt="Ben's Bites" className="h-8 md:h-10" />
            </a>
            <a href="https://lindy.ai" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <img src="/lovable-uploads/02481cd9-fc97-4c0d-8a50-5df066b4d2e6.png" alt="Happy Wagon" className="h-8 md:h-10" />
            </a>
            <a href="https://happywagon.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <img src="/lovable-uploads/9cf2b3e1-78a1-4fce-a40c-8bb57ddccd5e.png" alt="Lindy" className="h-8 md:h-10" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};