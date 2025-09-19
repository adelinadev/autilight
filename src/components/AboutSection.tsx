import preview1 from '@/assets/preview-1.png';
import preview2 from '@/assets/preview-2.png';
import preview3 from '@/assets/preview-3.png';
import laptop from '@/assets/laptop.png';
import fqa from '@/assets/fqa.png';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid md:grid-cols-[70%_30%]">
            <div className="flex w-full px-0 mx-0">
              <div className="w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-background to-muted/30 relative">
                <img
                  src={preview1}
                  alt="first"
                  className="h-full w-auto absolute top-0 right-0 z-10 object-contain rounded-xl w-full h-auto md:w-auto md:h-full"
                />
                <img
                  src={preview2}
                  alt="second"
                  className="h-[90%] w-auto absolute z-20 object-contain rounded-xl w-full h-auto md:h-[90%] md:w-auto"
                  style={{
                    top: '8%',
                    right: '40%',
                  }}
                />
                <img
                  src={preview3}
                  alt="third"
                  className="h-auto w-[65%] absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30 object-contain rounded-xl w-full h-auto md:w-[65%] md:h-auto"
                />
              </div>
            </div>

            {/* Блок з текстом */}
            <div className="mt-10 md:mt-0 flex flex-col items-center md:items-start space-y-4 text-center md:text-left justify-center">
              <div className="text-sm font-medium text-primary tracking-wider uppercase">
                ЛАСКАВО ПРОСИМО НА НАШ
              </div>
              <p
                style={{
                  fontFamily: "'Work Sans', sans-serif", 
                  fontWeight: 500, 
                  fontStyle: "normal",
                  fontSize: "20px",
                  lineHeight: "120%", 
                  letterSpacing: "-2%",
                  color: "1c2d6c"
                }}
              >
                Інформаційний ресурс для батьків дітей із підозрою на РАС та з аутизмом розвитку
              </p>
              <h4 className="text-m md:text-3xl font-bold leading-tight" style={{color: '#19213D'}}>
                Перші кроки, підтримка, достовірна інформація.
              </h4>
              <button className="hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-full text-lg transition-colors" style={{background: '#4A3AFF'}}>
                ОТРИМАТИ ДОСТУП
              </button>
            </div>
          </div>
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
          <div className="space-y-8 flex flex-col items-center">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex flex-col md:w-[580px] space-y-4">
                <div className="bg-primary/5 rounded-2xl p-6 space-y-2 hover:bg-primary/10 transition-colors flex items-center justify-between" style={{width: '580px', height: '230px'}}>
                  <div className="flex flex-col h-full">
                    <Link to="/articles" className="text-sm hover:underline" >ЧИТАТИ</Link>
                    <p className="font-dm-sans font-bold text-[22px] leading-[28px] tracking-[0px] text-foreground">
                      Інформативні статті, створені на основі сучасних наукових даних
                    </p>
                  </div>
                  {/* Права частина: картинка */}
                  <img src={laptop} alt="Ноутбук" className="h-full object-contain rounded-lg" />
                </div>

                {/* Другий блок */}
                <div className="bg-primary/5 rounded-2xl p-6 space-y-2 hover:bg-primary/10 transition-colors flex items-center justify-between" style={{width: '580px', height: '230px'}}>
                  {/* Ліва частина тексту */}
                  <div className="flex flex-col h-full">
                    <Link to="#"className="text-sm hover:underline" style={{ color: '#4A3AFF' }}>ПЕРЕЙТИ ДО ПИТАНЬ</Link>
                    <p className="font-dm-sans font-bold text-[22px] leading-[28px] tracking-[0px] text-foreground">
                      FAQ з відповідями на найпоширеніші питання батьків
                    </p>
                  </div>
                  {/* Права частина: картинка */}
                  <img src={fqa} alt="Питання" className="h-full object-contain rounded-lg" />
                </div>
              </div>

              {/* Права частина: один великий блок */}
              <div className="md:w-[580px] flex flex-col mt-4 md:mt-0">
                <div className="bg-primary/5 rounded-2xl p-6 space-y-2 hover:bg-primary/10 transition-colors" style={{width: '580px', height: '480px'}}>
                  <div className="text-sm font-medium text-primary tracking-wider uppercase">
                    TAGLINE 3
                  </div>
                  <h4 className="text-lg font-bold text-foreground">
                    <span className="text-primary">PDF-гайд 3</span> для зручного використання
                  </h4>
                  <div className="pt-2">
                    <button
                      className="hover:bg-primary/90 font-bold py-2 px-4 rounded-full text-sm transition-colors w-full"
                      style={{ background: '#4A3AFF' }}
                    >
                      ОТРИМАТИ ДОСТУП
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Third Block end*/}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
