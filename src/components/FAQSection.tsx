import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      id: "what-is-autilight",
      question: "What is AUTILIGHT and how can it help me?",
      answer: `AUTILIGHT is a comprehensive resource platform designed to support autistic individuals, families, and caregivers with evidence-based information and practical tools. We provide PDF guides, articles, and resources created by autism experts and community advocates.

Our platform helps by offering:
• Accessible, research-backed information about autism
• Practical strategies for daily challenges
• Support for families navigating diagnosis and beyond
• A neurodiversity-affirming approach that celebrates autistic strengths
• 24/7 access to digital resources and support materials`
    },
    {
      id: "who-creates-content",
      question: "Who creates your content and how do you ensure quality?",
      answer: `Our content is developed through collaboration between autism researchers, clinicians, autistic self-advocates, and families with lived experience. Every resource goes through a rigorous review process to ensure accuracy and practical relevance.

Our quality assurance includes:
• Review by board-certified professionals
• Input from autistic community members
• Regular updates based on latest research
• Feedback incorporation from users
• Cultural sensitivity and accessibility reviews`
    },
    {
      id: "age-range",
      question: "What age ranges do your resources cover?",
      answer: `Our resources span across the lifespan, from early childhood through adulthood. We recognize that autism support needs evolve throughout life, and our materials reflect this understanding.

We cover:
• Early childhood (2-5 years): Early intervention and support
• School age (6-17 years): Educational strategies and social skills
• Transition years (18-25 years): Moving to independence
• Adulthood (25+ years): Workplace, relationships, and self-advocacy
• Resources for parents, siblings, and extended family members`
    },
    {
      id: "evidence-based",
      question: "Are your strategies evidence-based?",
      answer: `Absolutely. All our recommendations are grounded in current research and best practices in autism support. We prioritize approaches that have been scientifically validated while also honoring the lived experiences of autistic individuals.

Our evidence-based approach includes:
• References to peer-reviewed research
• Alignment with professional guidelines (ASHA, AAP, etc.)
• Input from autistic researchers and advocates
• Regular review and updates as new evidence emerges
• Focus on interventions that respect autistic autonomy and dignity`
    },
    {
      id: "cost-accessibility",
      question: "Are there free resources available, and what about financial assistance?",
      answer: `We believe autism support should be accessible to everyone. While our comprehensive PDF guides are premium resources, we offer several free options and assistance programs.

Free resources include:
• Basic articles and information sheets
• Community forum access
• Monthly newsletter with tips and updates
• Free webinar series

We also offer sliding scale pricing and scholarship programs for families facing financial hardship. Contact us to learn about assistance options.`
    },
    {
      id: "professional-use",
      question: "Can professionals and educators use these resources?",
      answer: `Yes! Our resources are designed to support both families and professionals working with autistic individuals. We offer institutional licensing and professional development materials.

Professional benefits include:
• Classroom and therapy implementation guides
• Staff training materials
• Progress tracking tools
• Collaboration strategies with families
• Professional development certificates
• Bulk licensing options for schools and clinics`
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our resources and approach to autism support
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-card rounded-lg shadow-card hover:shadow-floating transition-all duration-300 border-0"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                  <h3 className="text-lg font-semibold text-primary">
                    {faq.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {faq.answer}
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

export default FAQSection;