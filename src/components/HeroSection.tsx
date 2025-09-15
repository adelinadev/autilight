import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch with valuable autism resources and support.",
      });
      setEmail('');
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/20"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="text-center">
            <h1 className="font-dm-sans font-bold text-[16px] leading-[18px] tracking-[0.24em] uppercase" style={{ color: "#4A3AFF" }}>
              безпечний простір для батьків
            </h1>
            <h2 className="font-dm-sans text-[50px] font-bold" style={{ color: "#19213D" }}>
              Коли діагноз — не вирок
            </h2>
            <h2 className="font-dm-sans text-[50px] font-bold" style={{ color: "#19213D" }}>
              Це лише початок шляху до розвитку
            </h2>
          </div>

          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md max-w-2xl mx-auto leading-relaxed" style={{ color: "#19213D" }}>
          Пояснюємо простими словами, що таке аутизм, як його розпізнати та з чого почати допомогу. Щоб ваша дитина мала більше шансів заговорити, контактувати, бути собою — у своєму темпі.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="ваш e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/90 backdrop-blur-sm border-white/20 text-foreground placeholder:text-muted-foreground"
              required
            />
            <Button type="submit" variant="hero" size="lg" className="animate-float">
              Отримати безкоштовно 
            </Button>
          </form>
          
          <div className="mt-4 flex items-center justify-center gap-3">
            <Checkbox 
              id="free-checkbox" 
              defaultChecked 
              className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-primary"
            />
            <label 
              htmlFor="free-checkbox" 
              className="text-center cursor-pointer"
              style={{
              
                fontFamily: 'DM Sans',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '23px',
                textDecoration: 'underline',
                color: 'white',
                padding: '2px 8px',
                borderRadius: '4px'
              }}
            >
              Безкоштовно
            </label>
            <span className="text-white/90 text-sm">
              Жодного спаму - лише підтримка на місяць
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;