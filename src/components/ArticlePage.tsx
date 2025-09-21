import { useParams } from "react-router-dom";

// Можна додати свій контент і картинки для кожної статті
const articlesContent: Record<
  string,
  { title: string; subtitle: string; image: string; text: string }
> = {
  "sensory-processing": {
    title: "Стаття 1: Sensory Processing",
    subtitle: "Простими словами про аутизм у дітей",
    image: "/images/sensory.jpg",
    text: `Sensory processing differences are a core aspect of autism that significantly impact daily experiences. 
    Many autistic individuals have heightened or reduced sensitivity to various sensory inputs including sounds, lights, textures, and movements.`,
  },
  "communication-styles": {
    title: "Стаття 2: Communication Styles",
    subtitle: "Простими словами про аутизм у дітей",
    image: "/images/communication.jpg",
    text: `Communication in autism is beautifully diverse, ranging from verbal speech to alternative communication methods. 
    Understanding and respecting these differences is essential for meaningful connection.`,
  },
  "strengths-based": {
    title: "Стаття 3: Strengths-Based Approach",
    subtitle: "Простими словами про аутизм у дітей",
    image: "/images/strengths.jpg",
    text: `A strengths-based approach recognizes that autism comes with unique abilities and perspectives that should be celebrated and nurtured.`,
  },
  "transition-support": {
    title: "Стаття 4: Transition Support",
    subtitle: "Простими словами про аутизм у дітей",
    image: "/images/transition.jpg",
    text: `Transitions and unexpected changes can be particularly challenging for autistic individuals who often thrive on predictability and routine.`,
  },
};

const ArticlePage = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articleId ? articlesContent[articleId] : null;

  if (!article) return <p>Стаття не знайдена</p>;

  return (
    <section className="py-20 container mx-auto px-4 space-y-16">
      {/* Перший блок: заголовок та підзаголовок */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
        <p className="text-xl text-muted-foreground">{article.subtitle}</p>
      </div>

      {/* Другий блок: картинка ліворуч, текст праворуч */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={article.image}
          alt={article.title}
          className="w-full md:w-1/2 rounded-2xl object-cover"
        />
        <p className="text-lg md:text-xl text-muted-foreground md:w-1/2">
          {article.text}
        </p>
      </div>

      {/* Третій блок: текст */}
      <div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {article.text}
        </p>
      </div>
    </section>
  );
};

export default ArticlePage;
