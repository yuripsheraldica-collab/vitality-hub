import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { Link } from "react-router-dom";
import academia1 from "@/assets/academia-1.jpg";
import academia2 from "@/assets/academia-2.jpg";
import recepcao from "@/assets/recepcao.jpg";
import fachada from "@/assets/fachada.jpg";

const news = [
  { img: fachada, tag: "Instituto", date: "12 Mar 2026", title: "Instituto Evolução amplia estrutura de fisioterapia ortopédica", excerpt: "Novo espaço de avaliação funcional reforça atendimento individualizado." },
  { img: academia1, tag: "Bem-estar", date: "28 Fev 2026", title: "Hidroterapia: como a piscina aquecida acelera reabilitação", excerpt: "Os benefícios comprovados do meio aquático em protocolos de recuperação." },
  { img: academia2, tag: "Saúde", date: "10 Fev 2026", title: "Por que treinar com acompanhamento médico muda tudo", excerpt: "A integração entre clínica e treino reduz risco de lesão e melhora resultados." },
  { img: recepcao, tag: "Eventos", date: "20 Jan 2026", title: "Workshop aberto: longevidade e saúde funcional após os 40", excerpt: "Inscrições gratuitas para a comunidade de Limeira." },
];

export default function News() {
  const [first, ...rest] = news;
  return (
    <Layout>
      <PageHero eyebrow="News" title={<>Notícias do <em className="text-sage-light italic font-light">Instituto</em></>} subtitle="Novidades, eventos, conteúdo e bastidores da nossa rotina de cuidado." />
      <section className="py-20 bg-cream">
        <div className="container-x">
          <article className="grid lg:grid-cols-2 gap-12 mb-16 group cursor-pointer">
            <img src={first.img} alt="" className="w-full aspect-[4/3] object-cover" />
            <div className="flex flex-col justify-center">
              <span className="text-[10px] tracking-[0.25em] uppercase text-sage">{first.tag} · {first.date}</span>
              <h2 className="mt-4 font-display text-4xl text-navy leading-tight group-hover:text-sage transition-colors">{first.title}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{first.excerpt}</p>
              <Link to="#" className="mt-6 text-[11px] tracking-[0.25em] uppercase text-sage border-b border-sage/30 pb-1 self-start">Ler matéria →</Link>
            </div>
          </article>
          <div className="grid md:grid-cols-3 gap-8">
            {rest.map(a => (
              <article key={a.title} className="group cursor-pointer">
                <img src={a.img} alt="" className="w-full aspect-[4/3] object-cover" />
                <span className="block mt-4 text-[10px] tracking-[0.25em] uppercase text-sage">{a.tag} · {a.date}</span>
                <h3 className="mt-2 font-display text-xl text-navy leading-snug group-hover:text-sage transition-colors">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground font-light">{a.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
