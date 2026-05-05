import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { Link } from "react-router-dom";

const news = [
  {
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    tag: "Instituto", date: "12 Mar 2026",
    title: "Instituto Evolução amplia estrutura de fisioterapia ortopédica",
    excerpt: "Novo espaço de avaliação funcional reforça atendimento individualizado.",
    body: "O Instituto Evolução inaugura uma nova ala dedicada exclusivamente à fisioterapia ortopédica e à avaliação funcional. O ambiente, projetado com equipamentos de última geração, permite análises biomecânicas detalhadas e protocolos personalizados de reabilitação. A ampliação reflete o compromisso do Instituto com cuidado clínico de excelência, integrando médicos, fisioterapeutas e profissionais do movimento em um único plano terapêutico voltado a resultados duradouros."
  },
  {
    img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1400&q=80",
    tag: "Bem-estar", date: "28 Fev 2026",
    title: "Hidroterapia: como a piscina aquecida acelera reabilitação",
    excerpt: "Os benefícios comprovados do meio aquático em protocolos de recuperação.",
    body: "A hidroterapia tem se destacado como uma das ferramentas mais eficazes em processos de reabilitação. A flutuação reduz o impacto sobre articulações, enquanto a resistência da água permite o fortalecimento progressivo de forma segura. No Instituto Evolução, a piscina aquecida é utilizada em protocolos pós-cirúrgicos, no tratamento de dores crônicas e em programas de condicionamento para idosos. Estudos recentes mostram redução de até 40% no tempo de recuperação quando comparado a abordagens convencionais."
  },
  {
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=80",
    tag: "Saúde", date: "10 Fev 2026",
    title: "Por que treinar com acompanhamento médico muda tudo",
    excerpt: "A integração entre clínica e treino reduz risco de lesão e melhora resultados.",
    body: "Treinar sem orientação médica é como dirigir sem revisão: funciona, até parar de funcionar. A integração entre avaliação clínica e prescrição de exercícios permite identificar limitações, ajustar intensidade e prevenir lesões antes que aconteçam. No Instituto Evolução, cada aluno da academia passa por triagem com a equipe médica, garantindo que o treino some saúde — não cobre dela. O modelo tem mostrado redução expressiva em afastamentos por dor e ganhos consistentes de performance."
  },
  {
    img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1400&q=80",
    tag: "Eventos", date: "20 Jan 2026",
    title: "Workshop aberto: longevidade e saúde funcional após os 40",
    excerpt: "Inscrições gratuitas para a comunidade de Limeira.",
    body: "O Instituto Evolução promove workshop gratuito sobre longevidade e saúde funcional, voltado a adultos acima dos 40 anos. O encontro reúne especialistas em medicina, nutrição e movimento para discutir estratégias práticas de prevenção, manutenção da força muscular e qualidade de vida. As vagas são limitadas e as inscrições podem ser feitas pelo WhatsApp do Instituto. O evento integra a agenda de ações educativas que o Instituto realiza com a comunidade de Limeira."
  },
  {
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=80",
    tag: "Nutrição", date: "05 Jan 2026",
    title: "Nutrição funcional: o que muda no atendimento clínico",
    excerpt: "Indo além da contagem de calorias, a abordagem funcional investiga a raiz do desequilíbrio.",
    body: "A nutrição funcional parte de um princípio simples: cada corpo responde de forma única aos alimentos. No Instituto Evolução, o atendimento nutricional combina anamnese aprofundada, exames complementares e construção de plano alimentar adaptado à rotina real do paciente. O acompanhamento contínuo garante ajustes finos ao longo do tempo, sustentando hábitos por anos — e não apenas por semanas."
  },
  {
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80",
    tag: "Movimento", date: "18 Dez 2025",
    title: "Pilates clínico: indicações, benefícios e quem pode praticar",
    excerpt: "Da reabilitação ao condicionamento, o método se adapta a diferentes perfis.",
    body: "O Pilates clínico é um aliado poderoso na recuperação de lesões, no tratamento de dores crônicas e na manutenção da saúde funcional. No Instituto Evolução, as turmas são reduzidas (máximo 4 alunos) e conduzidas por instrutores certificados, com integração direta à equipe de fisioterapia quando necessário. O método é indicado a todas as idades — incluindo gestantes, idosos e atletas em recuperação."
  },
];

export default function News() {
  const [first, ...rest] = news;
  return (
    <Layout>
      <PageHero eyebrow="News" title={<>Notícias do <em className="text-sage-light italic font-light">Instituto</em></>} subtitle="Novidades, eventos, conteúdo e bastidores da nossa rotina de cuidado." />
      <section className="py-20 bg-cream">
        <div className="container-x">
          <article className="grid lg:grid-cols-2 gap-12 mb-16 group cursor-pointer">
            <img src={first.img} alt={first.title} className="w-full aspect-[4/3] object-cover" />
            <div className="flex flex-col justify-center">
              <span className="text-[10px] tracking-[0.25em] uppercase text-sage">{first.tag} · {first.date}</span>
              <h2 className="mt-4 font-display text-4xl text-navy leading-tight group-hover:text-sage transition-colors">{first.title}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{first.body}</p>
              <Link to="#" className="mt-6 text-[11px] tracking-[0.25em] uppercase text-sage border-b border-sage/30 pb-1 self-start">Ler matéria completa →</Link>
            </div>
          </article>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {rest.map(a => (
              <article key={a.title} className="group cursor-pointer">
                <img src={a.img} alt={a.title} className="w-full aspect-[4/3] object-cover" />
                <span className="block mt-4 text-[10px] tracking-[0.25em] uppercase text-sage">{a.tag} · {a.date}</span>
                <h3 className="mt-2 font-display text-xl text-navy leading-snug group-hover:text-sage transition-colors">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground font-light leading-relaxed line-clamp-4">{a.body}</p>
                <span className="mt-3 inline-block text-[10px] tracking-[0.25em] uppercase text-sage">Ler mais →</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
