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
    <div className="grid md:grid-cols-3 items-start">

      {/* Ліва колонка: Навігація українською */}
      <div className="flex flex-col space-y-5" style={{color: '#979797'}}>
        <Button 
          variant="ghost" 
          onClick={() => scrollToSection('about')}
          className="justify-start px-0 hover:text-primary text-[18px]"
          style={{color: '#170F49'}}
        >
        Про проєкт
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => scrollToSection('articles')}
          className="justify-start px-0 hover:text-primary text-[18px]"
          style={{color: '#170F49'}}
        >
          Cтатті
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => scrollToSection('guides')}
          className="justify-start px-0 hover:text-primary text-[18px]"
          style={{color: '#170F49'}}
        >
          PDF-гайди
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => scrollToSection('faq')}
          className="justify-start px-0 hover:text-primary text-[18px]"
          style={{color: '#170F49'}}
        >
          Умови використання сайту
        </Button>
        <p style={{color: '#979797'}}>
          Ми не є медичними чи психологічними фахівцями. Матеріали на цьому сайті призначені лише 
          для інформаційних цілей, не є медичною або психотерапевтичною консультацією, не замінюють 
          професійну діагностику чи рекомендації спеціаліста та не є закликом до дії чи самостійного лікування.
        </p>
      </div>


      {/* Друга колонка: Логотип */}
      <div className="text-center">
        <img src={logoImage} alt="Autilight Logo" className="mx-auto mb-4 w-36 sm:w-44" />
      </div>

            {/* Третя колонка: Підписка */}
      <div className="flex flex-col gap-2 w-full max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Ваш email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-background border-border rounded-[40px] px-4 py-2 w-[300px] h-[50px]"
          required
        />
        <Button 
          type="submit" 
          variant="subscribe" 
          className="bg-[#4A3AFF] text-white hover:bg-[#5B4CFF] transition-colors rounded-[40px] py-2 px-6 w-[270px] h-[50px]"
          onClick={handleSubscribe}
        >
          Підписатися
        </Button>
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