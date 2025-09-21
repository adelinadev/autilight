import { Link } from "react-router-dom";

const ArticlesSection = () => {
  const articles = [
    {
      id: "sensory-processing",
      title: "Стаття 1",
      excerpt: "Простими словами про аутизм у дітей.",
      link: "/articles/sensory-processing",
    },
    {
      id: "communication-styles",
      title: "Стаття 2",
      excerpt: "Простими словами про аутизм у дітей.",
      link: "/articles/communication-styles",
    },
    {
      id: "strengths-based",
      title: "Стаття 3",
      excerpt: "Простими словами про аутизм у дітей.",
      link: "/articles/strengths-based",
    },
    {
      id: "transition-support",
      title: "Стаття 4",
      excerpt: "Простими словами про аутизм у дітей.",
      link: "/articles/transition-support",
    },
  ];

  return (
    <section id="articles" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Корисні статті
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Доказові висновки та практичні поради від експертів з аутизму та членів спільноти
          </p>
        </div>

        {/* Список статей */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={article.link}
              className="block bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">
                {article.title}
              </h3>
              <p className="text-muted-foreground mb-4">{article.excerpt}</p>
              <span className="text-[#4A3AFF] font-medium hover:underline">
                Читати
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
