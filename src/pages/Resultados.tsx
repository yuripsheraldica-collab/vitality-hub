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
  youtubeId?: string; // preencher quando os vídeos forem enviados
};

const proofs: SocialProof[] = [
  {
    title: "Instituto Evolução · Paciente Felipe",
    patient: "Felipe",
    area: "Reabilitação ortopédica",
    summary: "A jornada do Felipe mostra como o trabalho integrado entre clínica, fisioterapia e movimento pode devolver autonomia, confiança e qualidade de vida — sem atalhos, com método.",
    highlight: "100%",
    highlightLabel: "retorno funcional",
  },
  {
    title: "Instituto Evolução · Reabilitação do Renan",
    patient: "Renan",
    area: "Pós-operatório",
    summary: "Reabilitação após cirurgia conduzida com protocolos progressivos, monitoramento clínico e prescrição precisa de exercícios — do primeiro dia ao alto desempenho.",
    highlight: "+ força",
    highlightLabel: "controle motor restaurado",
  },
  {
    title: "Instituto Evolução · Tendão de Aquiles",
    patient: "Caso clínico",
    area: "Lesão tendínea",
    summary: "Tratamento conservador de lesão no tendão de Aquiles com avaliação biomecânica, terapia manual e reeducação de carga — recuperação segura e sem cirurgia.",
    highlight: "Sem cirurgia",
    highlightLabel: "tratamento conservador",
  },
  {
    title: "Gabriel · Corinthians",
    patient: "Gabriel",
    area: "Performance esportiva",
    summary: "Atleta acompanhado por equipe multidisciplinar do Instituto Evolução. Ciência, treino e cuidado clínico aplicados à alta performance.",
    highlight: "Atleta profissional",
    highlightLabel: "performance & saúde",
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
        <div className="container-x space-y-14">
          {proofs.map((p, i) => (
            <article key={p.title} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative aspect-video bg-navy overflow-hidden border border-border">
                {p.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${p.youtubeId}`}
                    title={p.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-white/70 gap-3">
                    <PlayCircle className="w-14 h-14" strokeWidth={1} />
                    <span className="text-[10px] tracking-[0.25em] uppercase">Vídeo em breve</span>
                  </div>
                )}
              </div>
              <div>
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
          ))}
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
