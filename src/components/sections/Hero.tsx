import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#DECBA4] relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-50"></div>
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm Tanmay
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              I supercharge businesses with <span className="text-green-600">AI</span> ⚡
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              AI automations expert and technical AI tutorials writer at Ben's Bites (100k+ readers). 
              I help businesses implement practical AI solutions that drive real results.
            </p>
            <div className="flex justify-center md:justify-start">
              <a 
                href="https://calendly.com/tanmay-iamtanmay/30min"
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-black/90 transition-all w-full md:w-1/2"
              >
                Book a Strategy Call
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative w-1/2 aspect-square">
              <img
                src="/lovable-uploads/72f0edda-969d-4480-ab7b-c57e9c3c183d.png"
                alt="Tanmay"
                className="rounded-2xl shadow-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-wrap justify-center items-center gap-16">
            <a href="https://bensbites.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <img src="/lovable-uploads/a22e121d-b85f-4d69-837f-0c1523121397.png" alt="Ben's Bites" className="h-8 md:h-10" />
            </a>
            <a href="https://lindy.ai" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <img src="/lovable-uploads/9cf2b3e1-78a1-4fce-a40c-8bb57ddccd5e.png" alt="Lindy" className="h-8 md:h-10" />
            </a>
            <a href="https://happywagon.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <img src="/lovable-uploads/02481cd9-fc97-4c0d-8a50-5df066b4d2e6.png" alt="Happy Wagon" className="h-8 md:h-10" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path fill="#F7E7CE" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};