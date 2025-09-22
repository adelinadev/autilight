import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import circle from '@/assets/circle.png';
import square from '@/assets/square.png';

const GuidesSection = () => {
  const { toast } = useToast();

  const handlePurchase = (guideName: string) => {
    toast({
      title: "Redirecting to purchase",
      description: `Taking you to purchase ${guideName}`,
    });
  };

  return (
    <section id="guides" className=" font-dm-sans py-20" style={{ backgroundColor: '#EEF1FF' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 style={{color: "#4A3AFF"}}>ПРОПОЗИЦІЇ</h6>
          <h2 className="font-dm-sans text-4xl md:text-5xl font-bold mb-6 mt-6" style={{color: '#170F49'}}>
            Корисні PDF матеріали
          </h2>
          <p className="font-dm-sans text-xl text-muted-foreground max-w-2xl mx-auto">
            PDF-гіди для батьків, які хочуть швидко та впевнено реагувати на перші 
            ознаки аутизму у дитини, отримати практичні поради та підтримку для розвитку вже сьогодні.
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center justify-center">
        <Card
            className="shadow-card hover:shadow-floating transition-all duration-300 transform hover:-translate-y-2 overflow-hidden
                      w-full max-w-sm sm:max-w-md md:w-[394px] md:h-[660px]"
            style={{
              borderRadius: '24px',
              border: '1px solid #ffffff',
              background: '#FFFFFF',
              opacity: 1,
              color: '#6F6C90',
            }}
            >
            <div className="p-4 sm:p-6 flex flex-col h-full">
              <div>
                {/* Header */}
                <div className="flex items-start gap-4 mb-4 sm:mb-6">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center" style={{background: '#ECEBFF'}}>
                    <img 
                      src={circle} 
                      alt="Icon" 
                      className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-lg" 
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm mb-1">Розвиток дитини до 3р.</p>
                    <h4 className="text-base sm:text-lg mb-1">Червоні прапорці</h4>
                  </div>
                </div>

                <p className="text-sm sm:text-base mb-4 sm:mb-6">
                  Все що треба знати батькам для раннього виявлення й упевненіх дій
                </p>

                <div className="mb-4 sm:mb-6 relative inline-block">
                  <span className="text-4xl sm:text-6xl font-bold text-black relative">
                    299
                    <span className="absolute left-0 top-1/2 w-full h-[2px] sm:h-[3px] bg-red-500 rotate-[-20deg] origin-center"></span>
                  </span>
                  <span className="text-lg sm:text-xl ml-2">грн.</span>
                </div>

                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  Коротко, чітко, без паніки, зрозумійте перші кроки
                </h4>

                {/* Checklist */}
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-sm sm:text-base">
                  {[
                    'Чіткі червоні прапорці за віком',
                    'Коментарі фахівців',
                    'Поради, що робити далі',
                    'Бонус: 2 вправі на розвиток',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <div
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0"
                        style={{ background: '#4A3AFF' }}
                      >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="mt-auto mb-[30px] sm:mb-[50px] flex justify-center">
                <Button
                  className="w-full sm:w-[308px] h-[56px] sm:h-[72px] rounded-[96px] hover:bg-gray-100 
                            text-white font-bold flex items-center justify-center gap-[6px]"
                            style={{background: '#4A3AFF'}}
                >
                  ОТРИМАТИ БЕЗКОШТОВНО
                </Button>
              </div>
            </div>
          </Card>

          {/* ==================== Друга картка ==================== */}

          <Card
            className="shadow-card hover:shadow-floating transition-all duration-300 transform hover:-translate-y-2 overflow-hidden
                      w-full max-w-sm sm:max-w-md md:w-[394px] md:h-[660px]"
            style={{
              borderRadius: '24px',
              border: '1px solid #4A3AFF',
              background: '#4A3AFF',
              opacity: 1,
            }}
            >
            <div className="p-4 sm:p-6 flex flex-col h-full">
              <div>
                {/* Header */}
                <div className="flex items-start gap-4 mb-4 sm:mb-6">

                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center" style={{background: '#ECEBFF'}}>
                    <img 
                      src={square} 
                      alt="Icon" 
                      className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-lg" 
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-purple-100 text-xs sm:text-sm mb-1">Інформація для батьків</p>
                    <h4 className="text-white text-base sm:text-lg mb-1">Аутизм?</h4>
                    <h3 className="text-white text-lg sm:text-2xl font-bold">Твій перший гід</h3>
                  </div>
                </div>

                <p className="text-purple-100 text-sm sm:text-base mb-4 sm:mb-6">Ваш вибір — ваша підтримка</p>

                <div className="mb-4 sm:mb-6">
                  <span className="text-white text-4xl sm:text-6xl font-bold">349</span>
                  <span className="text-purple-200 text-lg sm:text-xl ml-2">грн.</span>
                </div>

                <h4 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  Повний покроковий план розвитку:
                </h4>

                {/* Checklist */}
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-sm sm:text-base">
                  {['Відповіді на часті питання', '7 розділів', '17 таблиць та чек-листів', 'Стисла інформація без води'].map(
                    (item, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-white">{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Button */}
              <div className="mt-auto mb-[30px] sm:mb-[50px] flex justify-center">
                <Button
                  className="w-full sm:w-[308px] h-[56px] sm:h-[72px] rounded-[96px] bg-white hover:bg-gray-100 
                            text-purple-700 font-bold flex items-center justify-center gap-[6px]"
                >
                  ОТРИМАТИ ДОСТУП
                </Button>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default GuidesSection;