import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { PlayCircle, Quote } from "lucide-react";

type SocialProof = {
  title: string;
  patient: string;
  area: string;
  summary: string;
  highlight: string;
  highlightLabel: string;
  youtubeId?: string;
};

const proofs: SocialProof[] = [
  {
    title: "Gabriel · Corinthians",
    patient: "Gabriel",
    area: "Performance esportiva",
    summary: "Atleta profissional acompanhado pela equipe multidisciplinar do Instituto Evolução. Ciência, treino individualizado e cuidado clínico aplicados à alta performance — preparando corpo e mente para a exigência do esporte de elite.",
    highlight: "Atleta profissional",
    highlightLabel: "performance & saúde",
    youtubeId: "b5--xgR1-8M",
  },
  {
    title: "Luis Fernando · Retomada do movimento",
    patient: "Luis Fernando",
    area: "Reabilitação funcional",
    summary: "Acompanhamento integrado de reabilitação e fortalecimento, com retomada progressiva da capacidade funcional. Um trabalho de paciência, escuta e ciência aplicada — devolvendo confiança e qualidade de movimento.",
    highlight: "Retomada completa",
    highlightLabel: "função e confiança",
    youtubeId: "dHtqWg0AB8I",
  },
  {
    title: "Instituto Evolução · Paciente Felipe",
    patient: "Felipe",
    area: "Reabilitação ortopédica",
    summary: "A jornada do Felipe mostra como o trabalho integrado entre clínica, fisioterapia e movimento pode devolver autonomia, confiança e qualidade de vida. Um processo conduzido com método, escuta e progressão segura — do diagnóstico funcional ao retorno completo às atividades.",
    highlight: "100%",
    highlightLabel: "retorno funcional",
    youtubeId: "rPY43NNhqac",
  },
  {
    title: "Instituto Evolução · Reabilitação do Renan",
    patient: "Renan",
    area: "Pós-operatório",
    summary: "Reabilitação pós-cirúrgica conduzida com protocolos progressivos, monitoramento clínico contínuo e prescrição precisa de exercícios. Do primeiro dia de recuperação ao retorno ao alto desempenho, cada etapa foi construída em conjunto com a equipe multidisciplinar.",
    highlight: "+ força",
    highlightLabel: "controle motor restaurado",
    youtubeId: "y1E9YxceiaY",
  },
  {
    title: "Roberta · Tendão de Aquiles",
    patient: "Roberta",
    area: "Lesão tendínea",
    summary: "Tratamento conservador de lesão no tendão de Aquiles, com avaliação biomecânica detalhada, terapia manual e reeducação progressiva de carga. Uma recuperação segura, sem cirurgia, devolvendo confiança no movimento e no esporte.",
    highlight: "Sem cirurgia",
    highlightLabel: "tratamento conservador",
    youtubeId: "q9vTvfY0WSA",
  },
  {
    title: "Maura · Qualidade de vida",
    patient: "Maura",
    area: "Cuidado integrado",
    summary: "Acompanhamento multidisciplinar com foco em saúde, autonomia e bem-estar — um plano construído em conjunto entre clínica, movimento e nutrição, com resultados que se traduzem em mais disposição e qualidade de vida no dia a dia.",
    highlight: "+ qualidade de vida",
    highlightLabel: "cuidado integrado",
    youtubeId: "J5Ivxy1U0UE",
  },
];

export default function Resultados() {
  return (
    <Layout>
      <PageHero
        eyebrow="Casos & Provas Sociais"
        title={<>Histórias de <em className="text-sage-light italic font-light">transformação real</em></>}
        subtitle="Pacientes reais contando, em vídeo, o que viveram dentro do Instituto Evolução. Publicados sempre com autorização."
      />

      <section className="py-20 bg-cream">
        <div className="container-x space-y-20">
          {proofs.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <article key={p.title} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className={`flex justify-center ${reverse ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative aspect-[9/16] w-full max-w-[320px] bg-navy overflow-hidden border border-border rounded-xl shadow-lg">
                    {p.youtubeId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${p.youtubeId}?loop=1&playlist=${p.youtubeId}&mute=0`}
                        title={p.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-white/70 gap-3">
                        <PlayCircle className="w-14 h-14" strokeWidth={1} />
                        <span className="text-[10px] tracking-[0.25em] uppercase">Vídeo em breve</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className={reverse ? "lg:order-1" : "lg:order-2"}>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-sage">Prova social {String(i + 1).padStart(2, "0")} · {p.area}</span>
                  <h2 className="mt-3 font-display text-3xl md:text-4xl text-navy leading-tight">{p.title}</h2>
                  <Quote className="w-6 h-6 text-sage/40 mt-6" />
                  <p className="mt-3 text-muted-foreground leading-relaxed">{p.summary}</p>
                  <div className="mt-7 inline-flex items-baseline gap-3 border-t border-border pt-5">
                    <span className="font-display text-3xl text-sage">{p.highlight}</span>
                    <span className="text-xs text-muted-foreground">{p.highlightLabel}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-white border-t border-border">
        <div className="container-x text-center max-w-2xl mx-auto">
          <span className="eyebrow !justify-center !mx-auto">Sua história pode ser a próxima</span>
          <h2 className="mt-5 section-heading">Resultado real começa com<br /><em>cuidado real.</em></h2>
          <p className="mt-5 text-muted-foreground">Agende uma avaliação com nossa equipe e descubra o caminho mais seguro para o seu próximo capítulo.</p>
        </div>
      </section>
    </Layout>
  );
}
