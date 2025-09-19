import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false); // Закриваємо мобільне меню після кліку
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="hover:scale-105 transition-transform duration-300"
            >
            <img 
              src={logoImage} 
              alt="AUTILIGHT Logo" 
              className="h-[40px] w-auto" // підлаштуй під розмір у макеті
            />
          </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
        <a 
            onClick={() => scrollToSection('guides')} 
            className="font-dm-sans font-normal text-[20px] leading-[20px] text-[#170F49] hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            PDF Гайди
          </a>
          <a 
            onClick={() => scrollToSection('about')} 
            className="font-dm-sans font-normal text-[20px] leading-[20px] text-[#170F49] hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            Про проєкт
          </a>
          <a 
            onClick={() => scrollToSection('articles')} 
            className="font-dm-sans font-normal text-[20px] leading-[20px] text-[#170F49] hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            Статті
          </a>
          <a 
            onClick={() => scrollToSection('faq')} 
            className="font-dm-sans font-normal text-[20px] leading-[20px] text-[#170F49] hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            Часті питання
          </a>
          <Button variant="cta" onClick={() => scrollToSection('faq')} className="
                w-[317px] h-[55px] 
                rounded-[56px] 
                pt-[16px] pr-[32px] pb-[19px] pl-[32px] 
                bg-[#FF3A3A] 
                shadow-[0px_3px_12px_0px_#4A3AFF2E]
                font-dm-sans font-normal text-[18px] leading-[20px] text-[#ffffff]
                hover:scale-105 transition-transform duration-300">
                  Отримати доступ за 349 грн
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </Button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-md">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <a onClick={() => scrollToSection('guides')} className="text-foreground hover:text-primary transition-colors duration-300 font-medium cursor-pointer">PDF Гайди</a>
            <a onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors duration-300 font-medium cursor-pointer">Про проєкт</a>
            <a onClick={() => scrollToSection('articles')} className="text-foreground hover:text-primary transition-colors duration-300 font-medium cursor-pointer">Статті</a>
            <a onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors duration-300 font-medium cursor-pointer">FQA</a>
            <Button variant="cta" onClick={() => scrollToSection('faq')} className="hover:text-primary">Отримати доступ за 349 грн</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
