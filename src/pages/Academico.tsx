import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { FileText, Search, Download, ArrowLeft } from "lucide-react";
import { useState } from "react";

type Article = {
  area: string;
  year: number;
  title: string;
  authors: string;
  doi: string;
  excerpt: string;
  pdfUrl: string;
};

const articles: Article[] = [
  {
    area: "Fisioterapia", year: 2024,
    title: "Reabilitação funcional pós-LCA: revisão de protocolos integrados",
    authors: "Silva, M.; Lima, R.", doi: "10.0000/iev.2024.001",
    excerpt: "Este estudo revisa protocolos contemporâneos de reabilitação após reconstrução do ligamento cruzado anterior (LCA), com foco em retorno funcional ao esporte. Analisamos 42 trabalhos publicados entre 2018 e 2024 e identificamos um padrão claro: programas que integram fisioterapia, treinamento de força, controle motor e avaliação biomecânica reduzem em até 38% o risco de re-lesão quando comparados a abordagens isoladas. A discussão também aborda critérios objetivos de retorno ao esporte e a importância do acompanhamento psicológico nas fases finais...",
    pdfUrl: "#",
  },
  {
    area: "Medicina Preventiva", year: 2024,
    title: "Marcadores precoces de síndrome metabólica em adultos jovens",
    authors: "Costa, A.", doi: "10.0000/iev.2024.002",
    excerpt: "Investigamos a presença de marcadores precoces de síndrome metabólica em uma coorte de 312 adultos jovens (18–35 anos) atendidos em ambiente clínico ambulatorial. Os achados apontam que circunferência abdominal, HDL reduzido e elevação leve de triglicerídeos surgem antes dos clássicos sinais de hipertensão e hiperglicemia. Discutimos como o rastreio rotineiro permite intervenção nutricional e comportamental antes da instalação do quadro completo...",
    pdfUrl: "#",
  },
  {
    area: "Pilates Clínico", year: 2023,
    title: "Pilates como adjuvante no tratamento da lombalgia crônica",
    authors: "Andrade, P.; Sousa, L.", doi: "10.0000/iev.2023.014",
    excerpt: "Análise comparativa entre pacientes com lombalgia crônica não-específica submetidos a fisioterapia convencional versus fisioterapia associada a Pilates clínico ao longo de 12 semanas. O grupo combinado apresentou redução média de 4 pontos na escala EVA de dor e ganho funcional 27% superior medido pelo Roland-Morris. Descrevemos o protocolo aplicado e os critérios de progressão de carga...",
    pdfUrl: "#",
  },
  {
    area: "Nutrição", year: 2023,
    title: "Estratégias nutricionais para hipertrofia em adultos +40",
    authors: "Ramos, J.", doi: "10.0000/iev.2023.022",
    excerpt: "Revisão narrativa sobre estratégias nutricionais voltadas à hipertrofia muscular em adultos acima dos 40 anos, com destaque para a distribuição proteica ao longo do dia, o papel da leucina e o impacto da resistência anabólica relacionada à idade. Apresentamos protocolos práticos para uso clínico e considerações sobre integração com o treinamento de força...",
    pdfUrl: "#",
  },
  {
    area: "Saúde Integrativa", year: 2023,
    title: "Mente, corpo e prevenção: um modelo multidisciplinar",
    authors: "Equipe IEV", doi: "10.0000/iev.2023.030",
    excerpt: "Apresentamos o modelo integrativo desenvolvido pelo Instituto Evolução, no qual médicos, fisioterapeutas, nutricionistas e profissionais do movimento atuam de forma coordenada em torno de um único plano terapêutico. Discutimos os ganhos de aderência, a redução do tempo até resultado e a satisfação relatada pelos pacientes em uma análise retrospectiva de 18 meses...",
    pdfUrl: "#",
  },
];

export default function Academico() {
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Article | null>(null);
  const filtered = articles.filter(a => (a.title + a.area + a.authors).toLowerCase().includes(q.toLowerCase()));

  return (
    <Layout>
      <PageHero eyebrow="Portal Acadêmico" title={<>Saúde é <em className="text-sage-light italic font-light">conhecimento</em></>} subtitle="Artigos científicos, revisões e estudos produzidos e curados pela equipe do Instituto Evolução." />
      <section className="py-20 bg-cream">
        <div className="container-x">
          {!selected && (
            <>
              <div className="flex items-center gap-3 max-w-xl bg-white border border-border px-5 py-4">
                <Search className="w-4 h-4 text-sage" />
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar artigos, autores, áreas..." className="flex-1 bg-transparent outline-none text-sm" />
              </div>
              <div className="mt-10 divide-y divide-border bg-white border border-border">
                {filtered.map(a => (
                  <button key={a.doi} onClick={() => setSelected(a)} className="w-full text-left p-7 flex flex-col md:flex-row md:items-center gap-5 hover:bg-cream transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-sage shrink-0" />
                      <span className="text-[10px] tracking-[0.25em] uppercase text-sage min-w-[140px]">{a.area}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg text-navy leading-snug">{a.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{a.authors} · {a.year} · DOI {a.doi}</p>
                    </div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-sage">Ler trecho →</span>
                  </button>
                ))}
                {!filtered.length && <div className="p-12 text-center text-sm text-muted-foreground">Nenhum artigo encontrado.</div>}
              </div>
            </>
          )}

          {selected && (
            <article className="bg-white border border-border p-8 md:p-12 max-w-4xl mx-auto">
              <button onClick={() => setSelected(null)} className="text-[10px] tracking-[0.25em] uppercase text-sage flex items-center gap-2 mb-8">
                <ArrowLeft className="w-3.5 h-3.5" /> Voltar à lista
              </button>
              <span className="text-[10px] tracking-[0.25em] uppercase text-sage">{selected.area} · {selected.year}</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl text-navy leading-tight">{selected.title}</h1>
              <p className="mt-3 text-sm text-muted-foreground">{selected.authors} · DOI {selected.doi}</p>

              <div className="mt-10 border-l-2 border-sage/40 pl-6 bg-cream/50 p-6">
                <h2 className="text-[10px] tracking-[0.25em] uppercase text-sage mb-3">Trecho do artigo</h2>
                <p className="text-base text-navy/85 leading-relaxed font-light">{selected.excerpt}</p>
              </div>

              <div className="mt-10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border-t border-border pt-6">
                <p className="text-sm text-muted-foreground">Acesse o artigo completo em PDF.</p>
                <a href={selected.pdfUrl} download className="btn-primary inline-flex items-center gap-2">
                  <Download className="w-4 h-4" /> Baixar PDF na íntegra
                </a>
              </div>
            </article>
          )}
        </div>
      </section>
    </Layout>
  );
}
