import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'challenges', 'process', 'tutorials', 'faq'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'md:bg-white/80 md:backdrop-blur-lg md:shadow-md' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            <div className="hidden md:flex space-x-12 justify-center flex-1">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'challenges', label: 'Challenges' },
                { id: 'process', label: 'Process' },
                { id: 'tutorials', label: 'Tutorials' },
                { id: 'faq', label: 'FAQ' },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-base font-medium transition-colors hover:text-accent ${
                    activeSection === id ? 'text-accent' : 'text-primary'
                  }`}
                >
                  {label}
                </button>
              ))}
              <a
                href="https://calendly.com/tanmay-iamtanmay/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:translate-y-[-2px]"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 md:hidden`}>
        <div className="p-6 space-y-4">
          {[
            { id: 'hero', label: 'Home' },
            { id: 'challenges', label: 'Challenges' },
            { id: 'process', label: 'Process' },
            { id: 'tutorials', label: 'Tutorials' },
            { id: 'faq', label: 'FAQ' },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:text-accent ${
                activeSection === id ? 'text-accent bg-gray-100 rounded-lg' : 'text-primary'
              }`}
            >
              {label}
            </button>
          ))}
          <a
            href="https://calendly.com/tanmay-iamtanmay/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-all mt-6"
          >
            Book a Call
          </a>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};