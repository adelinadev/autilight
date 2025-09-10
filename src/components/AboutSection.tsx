const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About AUTILIGHT
            </h2>
            <p className="text-xl text-muted-foreground">
              Illuminating paths to understanding and acceptance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                AUTILIGHT was founded with a simple yet powerful mission: to provide accessible, 
                evidence-based resources that empower autistic individuals, their families, and 
                support networks with the knowledge and tools they need to thrive.
              </p>
              
              <h3 className="text-2xl font-semibold text-primary">Our Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in neurodiversity and the unique strengths that autistic individuals 
                bring to our communities. Our resources are developed in collaboration with 
                autistic advocates, researchers, and families to ensure they're both scientifically 
                sound and practically useful.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h4 className="text-xl font-semibold mb-3 text-primary">10,000+</h4>
                <p className="text-muted-foreground">Families supported with our resources</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h4 className="text-xl font-semibold mb-3 text-primary">50+</h4>
                <p className="text-muted-foreground">Expert contributors and reviewers</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h4 className="text-xl font-semibold mb-3 text-primary">24/7</h4>
                <p className="text-muted-foreground">Access to digital resources and support</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground italic">
              "Understanding autism isn't about fixing what's broken—it's about recognizing 
              and nurturing what's different, valuable, and beautiful."
            </p>
            <p className="mt-4 font-semibold text-primary">— Dr. Sarah Chen, Autism Researcher & Advocate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;