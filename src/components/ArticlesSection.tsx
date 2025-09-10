import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ArticlesSection = () => {
  const articles = [
    {
      id: "sensory-processing",
      title: "Understanding Sensory Processing in Autism",
      excerpt: "Explore how sensory differences impact daily life and discover effective strategies for creating sensory-friendly environments.",
      content: `Sensory processing differences are a core aspect of autism that significantly impact daily experiences. Many autistic individuals have heightened or reduced sensitivity to various sensory inputs including sounds, lights, textures, and movements.

Understanding these differences is crucial for:
• Creating supportive environments at home and school
• Developing effective coping strategies
• Reducing sensory overwhelm and stress
• Promoting self-advocacy skills

Key strategies include identifying personal sensory triggers, creating sensory break spaces, using noise-canceling headphones or fidget tools, and gradually building tolerance through controlled exposure when appropriate.`
    },
    {
      id: "communication-styles",
      title: "Diverse Communication Styles in Autism",
      excerpt: "Learn about the variety of communication methods used by autistic individuals and how to support effective interaction.",
      content: `Communication in autism is beautifully diverse, ranging from verbal speech to alternative communication methods. Understanding and respecting these differences is essential for meaningful connection.

Communication may include:
• Spoken language (which may develop differently)
• Sign language or picture exchange systems
• Written communication or typing
• Assistive technology and communication devices
• Non-verbal communication like gestures and body language

Supporting communication involves patience, using clear and direct language, allowing processing time, respecting communication preferences, and never assuming lack of understanding based on communication style.`
    },
    {
      id: "strengths-based",
      title: "Embracing a Strengths-Based Approach",
      excerpt: "Discover how focusing on strengths and interests can lead to better outcomes and increased self-esteem.",
      content: `A strengths-based approach recognizes that autism comes with unique abilities and perspectives that should be celebrated and nurtured. This positive framework shifts focus from deficits to possibilities.

Common strengths in autism include:
• Attention to detail and pattern recognition
• Deep expertise in areas of interest
• Logical and systematic thinking
• Honesty and direct communication
• Strong sense of justice and fairness
• Ability to think outside conventional frameworks

Implementing this approach means building on natural interests, creating opportunities for special talents to shine, focusing on what someone can do rather than what they can't, and recognizing different ways of learning and processing information.`
    },
    {
      id: "transition-support",
      title: "Supporting Transitions and Changes",
      excerpt: "Practical strategies for helping autistic individuals navigate changes in routine and environment.",
      content: `Transitions and unexpected changes can be particularly challenging for autistic individuals who often thrive on predictability and routine. Understanding this need and providing appropriate support is crucial.

Effective transition support includes:
• Advance notice when possible
• Visual schedules and countdown timers
• Practice runs for new environments
• Comfort items during transitions
• Clear explanations of what will happen
• Backup plans for unexpected changes

The goal is to build confidence and independence while respecting the need for structure and predictability. With proper support, many autistic individuals can successfully navigate various transitions throughout their lives.`
    }
  ];

  return (
    <section id="articles" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Helpful Articles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Evidence-based insights and practical advice from autism experts and community members
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {articles.map((article) => (
              <AccordionItem 
                key={article.id} 
                value={article.id}
                className="bg-card rounded-lg shadow-card hover:shadow-floating transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {article.excerpt}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {article.content}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;