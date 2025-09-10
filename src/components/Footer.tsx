import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

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
          {/* Left: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary mb-6">Navigation</h3>
            <div className="flex flex-col space-y-3">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('guides')}
                className="justify-start px-0 text-muted-foreground hover:text-primary"
              >
                PDF Guides
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('about')}
                className="justify-start px-0 text-muted-foreground hover:text-primary"
              >
                About
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('articles')}
                className="justify-start px-0 text-muted-foreground hover:text-primary"
              >
                Articles
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('faq')}
                className="justify-start px-0 text-muted-foreground hover:text-primary"
              >
                FAQ
              </Button>
            </div>
          </div>

          {/* Center: Logo and Company Info */}
          <div className="text-center">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-3xl font-bold gradient-text hover:scale-105 transition-transform duration-300 mb-4 block mx-auto"
            >
              /AUTILIGHT
            </button>
            <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
              Empowering autism understanding through evidence-based resources and community support.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Email Subscription */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary mb-6">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get weekly insights and new resources delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-border focus:border-primary"
                required
              />
              <Button type="submit" variant="subscribe" className="w-full">
                Subscribe
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