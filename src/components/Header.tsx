import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('hero')} 
          className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
        >
          /AUTILIGHT
        </button>
        
        <div className="hidden md:flex items-center space-x-8">
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('guides')}
            className="hover:text-primary"
          >
            PDF Guides
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('about')}
            className="hover:text-primary"
          >
            About
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('articles')}
            className="hover:text-primary"
          >
            Articles
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('faq')}
            className="hover:text-primary"
          >
            FAQ
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </nav>
    </header>
  );
};

export default Header;