import { useState, useEffect } from 'react';

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

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
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          <div className="hidden md:flex space-x-8">
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
                className={`text-sm font-medium transition-colors hover:text-accent ${
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
              className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-all"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};