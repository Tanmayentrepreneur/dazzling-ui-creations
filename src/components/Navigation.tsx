import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'challenges', 'process', 'tutorials', 'faq'];
      const heroSection = document.getElementById('hero');
      
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsScrolled(heroBottom < 0);
      }

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
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black transition-all duration-300 ${
        isScrolled ? 'h-16' : 'h-24'
      } hidden md:block`}>
        <div className="container mx-auto h-full px-4">
          <div className="flex items-center justify-center h-full">
            <div className="flex items-center space-x-12">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'challenges', label: 'Challenges' },
                { id: 'process', label: 'Process' },
                { id: 'tutorials', label: 'Tutorials' },
                { id: 'faq', label: 'FAQ' },
                { id: 'socials', label: 'Socials', href: 'https://x.com/TanmayBrainiac' },
              ].map(({ id, label, href }) => (
                href ? (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg font-medium transition-colors hover:text-accent ${
                      activeSection === id ? 'text-accent' : 'text-primary'
                    }`}
                  >
                    {label}
                  </a>
                ) : (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`text-lg font-medium transition-colors hover:text-accent ${
                      activeSection === id ? 'text-accent' : 'text-primary'
                    }`}
                  >
                    {label}
                  </button>
                )
              ))}
              <a
                href="mailto:Tanmay@IamTanmay.pro"
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-black text-white px-6 py-2.5 rounded text-lg font-medium transition-all duration-300 ease-out hover:bg-black/90 ${
                  isScrolled ? 'mt-0' : 'mt-0'
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button - Only visible on mobile */}
      <button 
        className="fixed top-4 left-4 z-50 p-2 md:hidden bg-white/80 backdrop-blur-md rounded-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu - Only shown when menu button is clicked */}
      <div className={`fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-white/80 backdrop-blur-md shadow-lg transition-transform duration-300 ease-in-out z-50 md:hidden`}>
        <div className="p-6 space-y-4">
          {[
            { id: 'hero', label: 'Home' },
            { id: 'challenges', label: 'Challenges' },
            { id: 'process', label: 'Process' },
            { id: 'tutorials', label: 'Tutorials' },
            { id: 'faq', label: 'FAQ' },
            { id: 'socials', label: 'Socials', href: 'https://x.com/TanmayBrainiac' },
          ].map(({ id, label, href }) => (
            <button
              key={id}
              onClick={() => href ? window.open(href, '_blank') : scrollToSection(id)}
              className={`block w-full text-left px-4 py-2 text-base font-medium transition-colors hover:text-accent ${
                activeSection === id ? 'text-accent bg-gray-100 rounded' : 'text-primary'
              }`}
            >
              {label}
            </button>
          ))}
          <a
            href="mailto:Tanmay@IamTanmay.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-black text-white px-4 py-3 rounded text-base font-medium hover:bg-black/90 transition-all"
          >
            Contact
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