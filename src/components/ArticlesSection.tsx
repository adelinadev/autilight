import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

// 🔹 імпорти картинок
import article1Img from "../assets/article1.png"; 
import article2Img from "../assets/article2.png"; 
import article3Img from "../assets/article3.png"; 
import article4Img from "../assets/article4.png"; 




const ArticlesSection = () => {
  const articles = [
    {
      id: "article1",
      title: "Що таке РАС?",
      subtitle: "Простими словами про аутизм у дітей",
      image: article1Img,
      rightText: (
        <>
          <p>
            <strong>РАС</strong> — це нейророзвитковий стан, який впливає на те,
            як дитина взаємодіє зі світом, спілкується, грається й сприймає
            інформацію. Це не хвороба і не тимчасова «проблема» — це особливість
            розвитку мозку.
          </p>
          <p className="mt-4">
            Діти з РАС можуть мати труднощі з соціальною взаємодією, мовленням,
            поведінкою або сприйняттям сенсорних подразників (звуків, світла,
            дотику).
          </p>
        </>
      ),
      bottomText: (
        <>
          <h3 className="text-xl font-bold mt-6 mb-3">Які ознаки можуть насторожити?</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Відсутність або затримка мовлення</li>
            <li>Відсутність зорового контакту</li>
            <li>Небажання або труднощі у взаємодії з іншими дітьми</li>
            <li>Повторювані рухи (махання руками, гойдання)</li>
            <li>Надмірна прив’язаність до звичок або предметів</li>
            <li>Сильна реакція на звуки, текстури, світло або запахи</li>
          </ul>
          <p>
            Але важливо пам’ятати: наявність однієї чи кількох ознак ще не
            означає РАС. Діагностику проводить лише спеціаліст.
          </p>
          <h3 className="text-xl font-bold mt-6 mb-3">Що далі?</h3>
          <p>
            На цьому сайті ти знайдеш прості пояснення, підтримку й практичну
            інформацію. Ми не ставимо діагнозів, не замінюємо лікарів — але
            допомагаємо пройти цей шлях не на самоті.
          </p>
        </>
      ),
    },
    {
      id: "article2",
      title: "Стаття 2",
      subtitle: "Простими словами про аутизм у дітей",
      image: article2Img,
      rightText: <p>Короткий текст у правому блоці.</p>,
      bottomText: <p>Повний текст статті.</p>,
    },
    {
      id: "article3",
      title: "Стаття 3",
      subtitle: "Простими словами про аутизм у дітей",
      image: article3Img,
      rightText: <p>Короткий текст у правому блоці.</p>,
      bottomText: <p>Повний текст статті.</p>,
    },
    {
      id: "article4",
      title: "Стаття 4",
      subtitle: "Простими словами про аутизм у дітей",
      image: article4Img,
      rightText: <p>Короткий текст у правому блоці.</p>,
      bottomText: <p>Повний текст статті.</p>,
    },
  ];

  return (
    <section id="articles" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4" style={{color: '#170F49'}}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Корисні статті
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Доказові висновки та практичні поради від експертів з аутизму та
            членів спільноти
          </p>
        </div>

        <Accordion type="multiple" className="max-w-5xl mx-auto">
          {articles.map((article) => (
            <AccordionItem
              key={article.id}
              value={article.id}
              className="bg-white rounded-xl shadow-md mb-4"
            >
              <AccordionTrigger className="px-6 py-4 text-left">
                <div>
                  <h3 className="text-2xl font-bold" style={{color: '#170F49'}}>{article.title}</h3>
                  <p className="text-muted-foreground">{article.subtitle}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <hr className="border-muted my-4" />

                <div className="grid md:grid-cols-2 gap-6 mb-6" style={{background: '#EEF1FF'}}>
                  <div>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="text-base leading-relaxed">{article.rightText}</div>
                </div>

                <div className="text-base leading-relaxed">{article.bottomText}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ArticlesSection;
