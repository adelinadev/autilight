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
    <section id="guides" className="py-20" style={{ backgroundColor: '#EEF1FF' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 style={{color: "#4A3AFF"}}>ПРОПОЗИЦІЇ</h6>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-6" style={{color: '#170F49'}}>
            Корисні PDF матеріали
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            PDF-гіди для батьків, які хочуть швидко та впевнено реагувати на перші 
            ознаки аутизму у дитини, отримати практичні поради та підтримку для розвитку вже сьогодні.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* First Card - White background */}
          <Card className="bg-white shadow-card hover:shadow-floating transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="flex p-6 gap-6">
              {/* Left block - light purple background with half-circle */}
              <div className="flex-shrink-0 w-16 h-16 bg-purple-100/60 rounded-2xl flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"></div>
              </div>
              
              {/* Right block */}
              <div className="flex-1">
                <p className="text-sm text-gray-400 mb-0.5">Розвиток дитини до 3р.</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Червоні прапорці</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Все що треба знати батькам, для раннього виявлення й упевнених дій
                </p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900 line-through decoration-red-500 decoration-2">299</span>
                  <span className="text-lg text-gray-600 ml-1">грн.</span>
                </div>
                
                <p className="text-lg font-bold text-gray-900 mb-4">
                  Коротко, чітко, без паніки, зрозумійте перші кроки
                </p>
                
                {/* Checklist */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Чіткі червоні прапорці за віком</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Коментарі фахівців</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Поради, що робити далі</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Бонус: 2 вправи на розвиток</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 text-base"
                  onClick={() => handlePurchase('Розвиток дитини до 3р')}
                >
                  ОТРИМАТИ БЕЗКОШТОВНО
                </Button>
              </div>
            </div>
          </Card>

          {/* Second Card - Purple gradient background */}
          <Card className="shadow-card hover:shadow-floating transition-all duration-300 transform hover:-translate-y-2 overflow-hidden" style={{ background: 'linear-gradient(135deg, #6366F1, #4F46E5)' }}>
            <div className="p-6">
              {/* Header with icon and title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-10 bg-gradient-to-b from-purple-600 to-purple-800 rounded-sm"></div>
                </div>
                
                <div className="flex-1">
                  <p className="text-purple-100 text-sm mb-1">Інформація для батьків</p>
                  <h4 className="text-white text-lg mb-1">Аутизм?</h4>
                  <h3 className="text-white text-2xl font-bold">Твій перший гід</h3>
                </div>
              </div>
              
              <p className="text-purple-100 text-base mb-6">
                Ваш вибір — ваша підтримка
              </p>
              
              <div className="mb-6">
                <span className="text-white text-6xl font-bold">349</span>
                <span className="text-purple-200 text-xl ml-2">грн.</span>
              </div>
              
              <h4 className="text-white text-lg font-semibold mb-4">
                Повний покроковий план розвитку:
              </h4>
              
              {/* Checklist */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">Відповіді на часті питання</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">7 розділів</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">17 таблиць та чек-листів</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">Стисла інформація без води</span>
                </li>
              </ul>
              
              <Button 
                className="w-full rounded-full bg-white hover:bg-gray-100 text-purple-700 font-bold py-4 text-lg"
                onClick={() => handlePurchase('Аутизм? Твій перший гід')}
              >
                ОТРИМАТИ ДОСТУП
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;