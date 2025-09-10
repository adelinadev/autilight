import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const GuidesSection = () => {
  const { toast } = useToast();

  const handlePurchase = (guideName: string) => {
    toast({
      title: "Redirecting to purchase",
      description: `Taking you to purchase ${guideName}`,
    });
  };

  return (
    <section id="guides" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Expert PDF Guides
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive, research-backed guides created by autism specialists to support your journey with practical insights and strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card shadow-card hover:shadow-floating transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Understanding Autism Spectrum
              </CardTitle>
              <CardDescription className="text-base">
                A comprehensive introduction to autism characteristics, strengths, and support strategies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Early signs and diagnosis process
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Sensory processing insights
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Communication strategies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Family support approaches
                </li>
              </ul>
              <div className="mt-6 text-2xl font-bold text-primary">$29.99</div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="purchase" 
                size="lg" 
                className="w-full"
                onClick={() => handlePurchase('Understanding Autism Spectrum')}
              >
                Purchase Guide
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-card shadow-card hover:shadow-floating transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Daily Life Strategies
              </CardTitle>
              <CardDescription className="text-base">
                Practical tools for managing daily routines, transitions, and challenging situations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Creating supportive routines
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Managing meltdowns
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  School collaboration tips
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Social skills development
                </li>
              </ul>
              <div className="mt-6 text-2xl font-bold text-primary">$34.99</div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="purchase" 
                size="lg" 
                className="w-full"
                onClick={() => handlePurchase('Daily Life Strategies')}
              >
                Purchase Guide
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;