import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';


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
      className="min-h-screen flex items-center justify-center relative overflow-hidden mt-20 sm:mt-0 pt-20 sm:pt-0"
      style={{
        background: `
          radial-gradient(circle at 10% 90%, rgba(74, 58, 255, 0.35), transparent 20%),
          radial-gradient(circle at 90% 20%, rgba(150, 45, 255, 0.35), transparent 20%),
           #ffffff`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      >
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="text-center mb-8">
            <h1 
              className="font-dm-sans font-bold text-xs sm:text-sm md:text-base tracking-[0.24em] uppercase mb-3"
              style={{ color: "#4A3AFF" }}
            >
              безпечний простір для батьків
            </h1>

            <h2 
              className="font-dm-sans font-bold text-2xl sm:text-3xl md:text-5xl leading-tight mb-2 whitespace-nowrap"
              style={{ color: "#19213D" }}
            >
              Коли діагноз — не вирок
            </h2>
            <h2 
              className="font-dm-sans font-bold text-2xl sm:text-3xl md:text-5xl leading-tight mb-6"
              style={{ color: "#19213D" }}
            >
              Це лише початок шляху до розвитку
            </h2>
          </div>

          <p className="font-dm-sans  min-w-877 text-[16px] mb-8 text-white/90 mx-auto leading-relaxed" style={{ color: "#6F6C90" }}>
            Пояснюємо простими словами, що таке аутизм, як його розпізнати та з чого почати допомогу.<br></br> 
            Щоб ваша дитина мала більше шансів заговорити, контактувати, бути собою — у своєму темпі.
          </p>
          <form onSubmit={handleSubmit} className="max-w-[700px] mx-auto relative">
            <div className="flex flex-col sm:flex-row sm:relative gap-3 sm:gap-0 h-[78px]">
              <Input
                type="email"
                placeholder="ваш e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="
                  w-full h-[56px] sm:h-[78px] 
                  rounded-[40px] sm:rounded-[60px] 
                  border border-[#EFF0F6] 
                  bg-[#FFFFFF] 
                  px-4 sm:px-6
                  text-sm sm:text-base
                  text-foreground placeholder:text-muted-foreground
                  shadow-[0px_8px_25px_0px_#0D0A2C0F]
                "
              />

              <Button
                type="submit"
                className="
                  w-full sm:w-[306px] 
                  h-[48px] sm:h-[55px] 
                  rounded-[40px] sm:rounded-[56px] 
                  bg-[#4A3AFF] 
                  text-white 
                  font-dm-sans font-normal text-sm sm:text-[18px] leading-[20px] 
                  px-6 sm:px-[32px]
                  flex items-center justify-center
                  gap-[6px] sm:gap-[8px]
                  sm:absolute sm:right-1 sm:top-1/2 sm:-translate-y-1/2
                "
                >
                  Отримати безкоштовно
              </Button>

            </div>
          </form>

          <div className="mt-4 flex items-center justify-center gap-3">
            <Checkbox
              id="free-checkbox"
              defaultChecked
              className="
                w-6 h-6 rounded-full 
                border-2 border-[#4A3AFF] 
                bg-[#4A3AFF] 
                data-[state=unchecked]:bg-white 
                data-[state=checked]:bg-[#4A3AFF]
                data-[state=checked]:text-white
              "
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
                color: '#4A3AFF',
                padding: '2px 8px',
                borderRadius: '4px'
              }}
            >
              Безкоштовно
            </label>
            <span className="text-white/90 text-sm" style={{ color: "#6F6C90" }}>
              Жодного спаму - лише підтримка на місяць
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;