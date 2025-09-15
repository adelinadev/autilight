import preview1 from '@/assets/preview-1.png';
import preview2 from '@/assets/preview-2.png';
import preview3 from '@/assets/preview-3.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* First Block: Image + Text */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-background to-muted/30">
              <div className="relative w-full h-full">
                {/* First image - full height of parent, no gaps */}
                <img
                  src={preview1}
                  alt="first"
                  className="h-full w-auto absolute top-0 right-0 z-10 object-cover rounded-xl shadow-xl"
                  // style={{ border: '1px solid red' }}
                />

                {/* Second image - overlaps first by 15% from left side */}
                <img
                  src={preview2}
                  alt="second"
                  /*className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl shadow-xl absolute top-20 right-40 md:right-24 z-20"*/
                  className="h-full w-auto absolute z-20 object-cover rounded-xl shadow-xl"
                  style={{
                    top: '15%',
                    right: '35%',
                  }}
                />

                <img
                  src={preview3}
                  alt="third"
                  className="h-auto w-[50%] absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30 object-cover rounded-xl shadow-xl" 
                /> 

              </div>
            </div>
        </div>

            
            <div className="space-y-6">
              <div className="text-sm font-medium text-primary tracking-wider uppercase">
                ЛАСКАВО ПРОСИМО НА НАШ
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Інформаційний ресурс для батьків дітей із підозрою на РАС та з аутизмом розвитку
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Перші кроки, підтримка, достовірна інформація.
              </h2>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-full text-lg transition-colors">
                ОТРИМАТИ ДОСТУП
              </button>
            </div>
          </div>

          {/* Middle Block: Information Text */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-block border-2 border-primary rounded-lg px-8 py-4 bg-background">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                На цьому сайті ви знайдете
              </h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Ми створили цей ресурс для вас — батьків, які шукають відповіді, підтримку 
              й надійні поради на шляху раннього виявлення та розвитку дитини з 
              підозрою на розлад аутистичного спектра (РАС).
            </p>
          </div>

          {/* Third Block: Action Cards */}
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Read Articles Card */}
              <div className="bg-primary/5 rounded-2xl p-8 space-y-4 hover:bg-primary/10 transition-colors">
                <div className="text-sm font-medium text-primary tracking-wider uppercase">
                  ЧИТАТИ
                </div>
                <h4 className="text-xl font-bold text-foreground">
                  Інформативні статті, створені на основі сучасних наукових даних
                </h4>
                <div className="flex justify-center pt-4">
                  <div className="w-16 h-12 bg-blue-400 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-6 bg-blue-200 rounded"></div>
                  </div>
                </div>
              </div>

              {/* FAQ Card */}
              <div className="bg-primary/5 rounded-2xl p-8 space-y-4 hover:bg-primary/10 transition-colors">
                <div className="text-sm font-medium text-primary tracking-wider uppercase">
                  ПЕРЕЙТИ ДО ПИТАНЬ
                </div>
                <h4 className="text-xl font-bold text-foreground">
                  FAQ з відповідями на найпоширеніші питання батьків
                </h4>
                <div className="flex justify-center pt-4">
                  <div className="w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center">
                    <div className="text-white text-2xl font-bold">?</div>
                  </div>
                </div>
              </div>

              {/* PDF Guides Card */}
              <div className="bg-primary/5 rounded-2xl p-8 space-y-4 hover:bg-primary/10 transition-colors">
                <div className="text-sm font-medium text-primary tracking-wider uppercase">
                  TAGLINE
                </div>
                <h4 className="text-xl font-bold text-foreground">
                  <span className="text-primary">PDF-гайди</span> які можна завантажити і користуватися у зручний час
                </h4>
                <div className="flex justify-center pt-4">
                  <div className="w-16 h-12 bg-blue-400 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-200 rounded flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-full text-sm transition-colors w-full">
                    ОТРИМАТИ ДОСТУП
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;