import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { Link } from "react-router-dom";
import { newsArticles, slugify } from "@/data/news";
const news = newsArticles;

export default function News() {
  const [first, ...rest] = news;
  return (
    <Layout>
      <PageHero eyebrow="News" title={<>Notícias do <em className="text-sage-light italic font-light">Instituto</em></>} subtitle="Novidades, eventos, conteúdo e bastidores da nossa rotina de cuidado." />
      <section className="py-20 bg-cream">
        <div className="container-x">
          <Link to={`/news/${slugify(first.title)}`} className="grid lg:grid-cols-2 gap-12 mb-16 group block">
            <img src={first.img} alt={first.title} className="w-full aspect-[4/3] object-cover" />
            <div className="flex flex-col justify-center">
              <span className="text-[10px] tracking-[0.25em] uppercase text-sage">{first.tag} · {first.date}</span>
              <h2 className="mt-4 font-display text-4xl text-navy leading-tight group-hover:text-sage transition-colors">{first.title}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{first.excerpt}</p>
              <span className="mt-6 text-[11px] tracking-[0.25em] uppercase text-sage border-b border-sage/30 pb-1 self-start">Ler matéria completa →</span>
            </div>
          </Link>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {rest.map(a => (
              <Link key={a.title} to={`/news/${slugify(a.title)}`} className="group block">
                <img src={a.img} alt={a.title} className="w-full aspect-[4/3] object-cover" />
                <span className="block mt-4 text-[10px] tracking-[0.25em] uppercase text-sage">{a.tag} · {a.date}</span>
                <h3 className="mt-2 font-display text-xl text-navy leading-snug group-hover:text-sage transition-colors">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground font-light leading-relaxed line-clamp-3">{a.excerpt}</p>
                <span className="mt-3 inline-block text-[10px] tracking-[0.25em] uppercase text-sage">Ler mais →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
