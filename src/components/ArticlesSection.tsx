// src/components/ArticlesSection.tsx
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { articles } from "../data/articles";
import { Link } from "react-router-dom"; // якщо потрібно робити лінки на сторінку статті

const ArticlesSection: React.FC = () => {
  return (
    <section id="articles" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4" style={{ color: "#170F49" }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#170F49'}}>
            Корисні статті
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Доказові висновки та практичні поради від експертів з аутизму та членів спільноти
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
                  <h3 className="text-2xl font-bold" style={{ color: "#170F49" }}>
                    {article.title}
                  </h3>
                  {article.subtitle && (
                    <p className="text-muted-foreground">{article.subtitle}</p>
                  )}
                  {/* Ключові слова */}
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-6">
                <hr className="border-muted my-4" />

                {/* Якщо є зображення — показуємо зверху */}
                {article.keywords && article.keywords.length > 0 && (
                    <div className="mb-10 text-gray-600 text-lg">
                      <strong>Ключові слова:</strong> {article.keywords.join(", ")}
                    </div>

                )}
                {/* {article.image && (
                  <div className="mb-6">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full max-w-md rounded-lg shadow-md object-cover"
                    />
                  </div>
                )} */}
                {/* Універсальний блок контенту — тут будь-яка розмітка з articles.tsx буде коректно відображена */}
                <div className="text-base leading-relaxed prose max-w-none">
                  {article.content}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ArticlesSection;
