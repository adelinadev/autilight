import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import preview4 from '@/assets/preview-4.png';
import preview5 from '@/assets/preview-5.png';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const FAQSection = () => {
  const { toast } = useToast();

  const faqs = [
    {
      id: "when-to-contact-specialist",
      question: "Коли потрібно звертатися до фахівця?",
      answer: "Якщо ви помітили у дитини тривожні симптоми або сумніваєтесь у розвитку — не чекайте. Краще звернутися раніше до педіатра, невролога або дитячого психолога."
    },
    {
      id: "who-diagnoses-ras",
      question: "Хто діагностує РАС?",
      answer: "Діагноз розладу аутистичного спектру може поставити тільки кваліфікований спеціаліст після комплексного обстеження."
    },
    {
      id: "can-ras-be-cured",
      question: "Чи можна виліковати РАС?",
      answer: "РАС неможливо 'виліковати', але з правильною підтримкою та терапією можна значно покращити якість життя дитини."
    },
    {
      id: "can-ras-be-influenced-second",
      question: "Чи можна вплинути РАС?",
      answer: "Так, рання діагностика та відповідна терапія можуть значно допомогти в розвитку дитини з аутизмом."
    },
    {
      id: "what-methods-help",
      question: "Які методи допомоги існують?",
      answer: "Існує багато методів: поведінкова терапія, логопедична корекція, ерготерапія, сенсорна інтеграція та інші підходи."
    },
    {
      id: "what-methods-help-second",
      question: "Які методи допомоги існують?",
      answer: "Кожна дитина унікальна, тому план терапії завжди індивідуальний та розробляється командою спеціалістів."
    },
    {
      id: "do-vaccines-affect-ras",
      question: "Чи впливають вакцини на розвиток РАС?",
      answer: "Ні, численні наукові дослідження довели, що вакцини не викликають аутизм та не впливають на його розвиток."
    },
    {
      id: "how-to-support-family",
      question: "Як підтримати родину, якщо у дитини РАС?",
      answer: "Важливо надати емоційну підтримку, практичну допомогу та допомогти знайти професійних спеціалістів."
    }
  ];

  const handleGetGuide = () => {
    toast({
      title: "Redirecting to guide",
      description: "Taking you to get the free guide",
    });
  };

  return (
    <section id="faq" className="py-20" style={{ backgroundColor: '#F3F4F6' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            А тут часті запитання
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border-0"
              >
                <AccordionTrigger 
                  className="px-8 py-6 hover:no-underline text-left rounded-2xl text-white font-medium text-lg"
                  style={{ 
                    background: index === 0 
                      ? 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' 
                      : 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)'
                  }}
                >
                  <div className="flex items-center w-full">
                    <span className="flex-1">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 mt-2 rounded-2xl" style={{ 
                  background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)'
                }}>
                  <div className="text-white leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Call to Action Section */}
        <div className="rounded-3xl p-6 md:p-8 lg:p-12 relative overflow-hidden" style={{ 
          background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)'
        }}>
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
            <div className="flex-1 text-center lg:text-left lg:max-w-lg">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
                Помітили щось тривожне?
              </h3>
              <p className="text-lg md:text-xl text-white/90 mb-6 lg:mb-8 leading-relaxed">
                Завантажте гід і дізнайтесь, як вчасно підтримати розвиток вашої дитини.
              </p>
              <Button 
                onClick={handleGetGuide}
                className="bg-white hover:bg-gray-100 text-purple-700 font-bold py-4 px-8 rounded-full text-lg w-full sm:w-auto"
              >
                ОТРИМАТИ БЕЗКОШТОВНО
              </Button>
            </div>
            <div className="flex-shrink-0 flex lg:justify-end">
              <img 
                src={preview4} 
                alt="PDF Guide Preview" 
                className="h-full w-auto absolute top-0 right-0 z-10 object-cover rounded-xl"
              />
              <img 
                src={preview5} 
                alt="PDF Guide Preview" 
                className="h-full w-auto absolute top-50% right-90% z-10 object-cover rounded-xl"
                style={{
                  top: '70%',
                  right: '20%'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;