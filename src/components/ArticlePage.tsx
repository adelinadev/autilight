import { useParams } from "react-router-dom";
import bg from "../assets/bg.png";

// Контент для статей
const articlesContent: Record<
  string,
  { title: string; subtitle: string; image: string; text: string }
> = {
  "sensory-processing": {
    title: "Що таке РАС?",
    subtitle: "Простими словами про аутизм у дітей",
    image: bg,
    text: `Sensory processing differences are a core aspect of autism that significantly impact daily experiences. 
    Many autistic individuals have heightened or reduced sensitivity to various sensory inputs including sounds, lights, textures, and movements.`,
  },
  "communication-styles": {
    title: "Стаття 2: Communication Styles",
    subtitle: "Простими словами про аутизм у дітей",
    image: bg,
    text: `Communication in autism is beautifully diverse, ranging from verbal speech to alternative communication methods. 
    Understanding and respecting these differences is essential for meaningful connection.`,
  },
  "strengths-based": {
    title: "Стаття 3: Strengths-Based Approach",
    subtitle: "Простими словами про аутизм у дітей",
    image: bg,
    text: `A strengths-based approach recognizes that autism comes with unique abilities and perspectives that should be celebrated and nurtured.`,
  },
  "transition-support": {
    title: "Стаття 4: Transition Support",
    subtitle: "Простими словами про аутизм у дітей",
    image: bg,
    text: `Transitions and unexpected changes can be particularly challenging for autistic individuals who often thrive on predictability and routine.`,
  },
};

const ArticlePage = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articleId ? articlesContent[articleId] : null;

  if (!article) return <p>Стаття не знайдена</p>;

  return (
    <section className="py-20 container mx-auto px-4 space-y-12">
      {/* Заголовок */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        {article.title}
      </h1>

      {/* Підзаголовок */}
      <p className="text-xl text-muted-foreground mb-8 text-left">
        {article.subtitle}
      </p>

      {/* Картинка + текст */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        <img
          src={article.image}
          alt={article.title}
          width={740}
          height={450}
          className="rounded-2xl object-cover w-full md:w-[740px] md:h-[450px]"
        />
        <p className="text-lg md:text-xl text-muted-foreground md:flex-1">
          {article.text}
        </p>
      </div>

      {/* Додатковий параграф */}
      <div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {article.text}
        </p>
      </div>
    </section>
  );
};

export default ArticlePage;
