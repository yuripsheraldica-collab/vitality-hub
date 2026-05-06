import Layout from "@/components/site/Layout";
import { Link, useParams } from "react-router-dom";
import { newsArticles, slugify } from "@/data/news";
import { ArrowLeft } from "lucide-react";

export default function NewsArticle() {
  const { slug } = useParams();
  const article = newsArticles.find(a => slugify(a.title) === slug);
  if (!article) {
    return (
      <Layout>
        <section className="pt-40 pb-20 container-x">
          <h1 className="font-display text-3xl text-navy">Matéria não encontrada</h1>
          <Link to="/news" className="mt-4 inline-block text-sage">← Voltar para News</Link>
        </section>
      </Layout>
    );
  }
  return (
    <Layout>
      <article className="pt-32 pb-20 bg-cream">
        <div className="container-x max-w-3xl">
          <Link to="/news" className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-sage mb-8"><ArrowLeft className="w-3.5 h-3.5" /> Voltar para News</Link>
          <span className="text-[10px] tracking-[0.25em] uppercase text-sage">{article.tag} · {article.date}</span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl text-navy leading-tight">{article.title}</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed font-light">{article.excerpt}</p>
          <img src={article.img} alt={article.title} className="mt-10 w-full aspect-[16/9] object-cover" />
          <div className="mt-10 prose prose-lg max-w-none text-foreground">
            {article.full.split("\n\n").map((p, i) => (
              <p key={i} className="text-base text-foreground/80 leading-relaxed mb-5">{p}</p>
            ))}
          </div>
        </div>
      </article>
    </Layout>
  );
}