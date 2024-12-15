import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#f6e9ce] relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-50"></div>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
          {/* On mobile, image comes first */}
          <div className="w-full md:w-1/2 flex justify-center items-center order-first md:order-last mb-8 md:mb-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-48 md:w-56 lg:w-64 aspect-square"
            >
              <img
                src="/lovable-uploads/3abea22f-c5b5-42e4-acac-f22420a6d5c7.png"
                alt="Tanmay"
                className="rounded-2xl shadow-2xl object-cover w-full h-full"
              />
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-left">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm Tanmay
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold">
              I Supercharge businesses with <span className="text-green-600">AI</span> ⚡
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              AI automations expert and technical AI tutorials writer at Ben's Bites (100k+ readers). 
              I help businesses implement practical AI solutions that drive real results.
            </p>
            <div className="flex justify-start pt-4">
              <a 
                href="https://calendly.com/tanmay-iamtanmay/30min"
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:translate-y-[-2px] cursor-pointer group"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://calendly.com/tanmay-iamtanmay/30min", "_blank");
                }}
              >
                <span className="group-hover:translate-x-0.5 transition-transform duration-300">Book a Strategy Call</span>
                <MessageCircle className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            <a href="https://bensbites.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <img src="/lovable-uploads/a22e121d-b85f-4d69-837f-0c1523121397.png" alt="Ben's Bites" className="h-6 md:h-8" />
            </a>
            <a href="https://lindy.ai" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <img src="/lovable-uploads/9cf2b3e1-78a1-4fce-a40c-8bb57ddccd5e.png" alt="Lindy" className="h-6 md:h-8" />
            </a>
            <a href="https://happywagon.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <img src="/lovable-uploads/02481cd9-fc97-4c0d-8a50-5df066b4d2e6.png" alt="Happy Wagon" className="h-6 md:h-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 50" className="w-full" preserveAspectRatio="none">
          <path fill="#FFFFFF" fillOpacity="1" d="M0,16L48,18.7C96,21,192,27,288,29.3C384,32,480,32,576,29.3C672,27,768,21,864,21.3C960,21,1056,27,1152,29.3C1248,32,1344,32,1392,32L1440,32L1440,50L1392,50C1344,50,1248,50,1152,50C1056,50,960,50,864,50C768,50,672,50,576,50C480,50,384,50,288,50C192,50,96,50,48,50L0,50Z"></path>
        </svg>
      </div>
    </section>
  );
};