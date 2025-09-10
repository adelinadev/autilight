import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
      <div className="absolute inset-0 bg-background/20 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Empowering Autism 
            <span className="block gradient-text">Understanding</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md max-w-2xl mx-auto leading-relaxed">
            Comprehensive guides and resources to support autistic individuals, families, and communities with evidence-based information and practical tools.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email for updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/90 backdrop-blur-sm border-white/20 text-foreground placeholder:text-muted-foreground"
              required
            />
            <Button type="submit" variant="hero" size="lg" className="animate-float">
              Get Started
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-white/70">
            Join our community of 10,000+ families finding support and understanding
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;