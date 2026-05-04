import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { FileText, Search, Download } from "lucide-react";
import { useState } from "react";

const articles = [
  { area: "Fisioterapia", year: 2024, title: "Reabilitação funcional pós-LCA: revisão de protocolos integrados", authors: "Silva, M.; Lima, R.", doi: "10.0000/iev.2024.001" },
  { area: "Medicina Preventiva", year: 2024, title: "Marcadores precoces de síndrome metabólica em adultos jovens", authors: "Costa, A.", doi: "10.0000/iev.2024.002" },
  { area: "Pilates Clínico", year: 2023, title: "Pilates como adjuvante no tratamento da lombalgia crônica", authors: "Andrade, P.; Sousa, L.", doi: "10.0000/iev.2023.014" },
  { area: "Nutrição", year: 2023, title: "Estratégias nutricionais para hipertrofia em adultos +40", authors: "Ramos, J.", doi: "10.0000/iev.2023.022" },
  { area: "Saúde Integrativa", year: 2023, title: "Mente, corpo e prevenção: um modelo multidisciplinar", authors: "Equipe IEV", doi: "10.0000/iev.2023.030" },
];

export default function Academico() {
  const [q, setQ] = useState("");
  const filtered = articles.filter(a => (a.title + a.area + a.authors).toLowerCase().includes(q.toLowerCase()));
  return (
    <Layout>
      <PageHero eyebrow="Portal Acadêmico" title={<>Saúde é <em className="text-sage-light italic font-light">conhecimento</em></>} subtitle="Artigos científicos, revisões e estudos produzidos e curados pela equipe do Instituto Evolução." />
      <section className="py-20 bg-cream">
        <div className="container-x">
          <div className="flex items-center gap-3 max-w-xl bg-white border border-border px-5 py-4">
            <Search className="w-4 h-4 text-sage" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar artigos, autores, áreas..." className="flex-1 bg-transparent outline-none text-sm" />
          </div>
          <div className="mt-10 divide-y divide-border bg-white border border-border">
            {filtered.map(a => (
              <article key={a.doi} className="p-7 flex flex-col md:flex-row md:items-center gap-5 hover:bg-cream transition-colors">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-sage shrink-0" />
                  <span className="text-[10px] tracking-[0.25em] uppercase text-sage min-w-[140px]">{a.area}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg text-navy leading-snug">{a.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{a.authors} · {a.year} · DOI {a.doi}</p>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-sage hover:text-navy">
                  <Download className="w-3.5 h-3.5" /> PDF
                </a>
              </article>
            ))}
            {!filtered.length && <div className="p-12 text-center text-sm text-muted-foreground">Nenhum artigo encontrado.</div>}
          </div>
        </div>
      </section>
    </Layout>
  );
}
