import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GuidesSection from '@/components/GuidesSection';
import AboutSection from '@/components/AboutSection';
import ArticlesSection from '@/components/ArticlesSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <GuidesSection />
        <AboutSection />
        <ArticlesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
