import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import preview5 from '@/assets/preview-5.png';
import openartImage from '@/assets/openart-image.png';
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
                  background: 'white'
                }}>
                  <div className="text-black leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Call to Action Section */}
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden h-auto">
  {/* Ліва колонка */}
  <div className="flex-1 p-6 md:p-8 lg:p-12 flex flex-col justify-center text-center lg:text-left"
       style={{ backgroundColor: '#5242FF' }}>
    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
      Помітили щось тривожне?
    </h3>
    <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
      Завантажте гід і дізнайтесь, як вчасно підтримати розвиток вашої дитини.
    </p>
    <Button
      onClick={handleGetGuide}
      className="bg-white hover:bg-gray-100 text-purple-700 font-bold py-3 px-6 rounded-full text-base md:text-lg w-full sm:w-auto"
    >
      ОТРИМАТИ БЕЗКОШТОВНО
    </Button>
  </div>

  {/* Права колонка */}
  <div
    className="flex-1 relative flex justify-center items-center p-6 md:p-8 lg:p-12 bg-cover bg-center"
    style={{
      backgroundColor: '#5242FF',
      backgroundImage: `url(${openartImage})`, // фонова картинка
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}
  >
    {/* Перша картинка */}
    <img
      src={preview5}
      alt="PDF Guide Preview"
      className="w-40 h-full md:w-56 lg:w-auto lg:h-full rounded-xl object-cover z-10"
    />
  </div>
</div>




        



      </div>
    </section>
  );
};

export default FAQSection;