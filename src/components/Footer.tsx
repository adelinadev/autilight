import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import logoImage from '@/assets/logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our weekly autism support newsletter.",
      });
      setEmail('');
    }
  };

  return (
<footer className="bg-card border-t border-border py-16">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-12 items-start">

      {/* Ліва колонка: Навігація українською */}
      <div className="flex flex-col space-y-3">
        <Button 
          variant="ghost" 
          onClick={() => scrollToSection('guides')}
          className="justify-start px-0 text-muted-foreground hover:text-primary"
        >
          PDF Гайди
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => scrollToSection('about')}
          className="justify-start px-0 text-muted-foreground hover:text-primary"
        >
          Про проєкт
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => scrollToSection('articles')}
          className="justify-start px-0 text-muted-foreground hover:text-primary"
        >
          Статті
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => scrollToSection('faq')}
          className="justify-start px-0 text-muted-foreground hover:text-primary"
        >
          Часті питання
        </Button>
      </div>

      {/* Друга колонка: Логотип */}
      <div className="text-center">
        <img src={logoImage} alt="Autilight Logo" className="mx-auto mb-4 w-36 sm:w-44" />
        <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
          Empowering autism understanding through evidence-based resources and community support.
        </p>
      </div>

      {/* Третя колонка: Підписка */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-primary mb-6">Stay Updated</h3>
        <p className="text-sm text-muted-foreground mb-2">
          Get weekly insights and new resources delivered to your inbox.
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-background border-border focus:border-primary rounded-[40px] px-4 sm:px-6 py-2 sm:py-3"
            required
          />
          <Button 
            type="submit" 
            variant="subscribe" 
            className="bg-[#4A3AFF] text-white hover:bg-[#5B4CFF] transition-colors rounded-[40px] py-2 sm:py-3 px-6 sm:px-8 w-full sm:w-auto"
          >
            Підписатися
          </Button>
        </form>
      </div>

    </div>

    <div className="border-t border-border mt-12 pt-8 text-center">
      <p className="text-sm text-muted-foreground">
        © 2024 AUTILIGHT. All rights reserved. | Created with love for the autism community.
      </p>
    </div>
  </div>
</footer>

  
  );
};

export default Footer;