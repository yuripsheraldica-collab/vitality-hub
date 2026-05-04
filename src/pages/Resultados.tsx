import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import academia1 from "@/assets/academia-1.jpg";
import academia2 from "@/assets/academia-2.jpg";
import recepcao from "@/assets/recepcao.jpg";

const cases = [
  { img: academia1, tag: "Reabilitação", badge: "Fisioterapia Esportiva", title: "De lesão grave à corrida de 10km", desc: "Paciente com ruptura do LCA. Após protocolo integrado, retornou à prática em 7 meses.", value: "7 meses", label: "vs 12 meses estimados" },
  { img: academia2, tag: "Saúde Preventiva", badge: "Clínica + Pilates", title: "Controle de dor crônica integrativo", desc: "Lombalgia crônica há 4 anos. Combinação clínica + pilates eliminou analgésicos em 3 meses.", value: "–90%", label: "uso de medicamentos" },
  { img: recepcao, tag: "Performance", badge: "Academia + Nutrição", title: "Transformação corporal sustentável", desc: "Plano conjunto resultou em transformação real e duradoura com base em saúde.", value: "12kg", label: "de gordura em 6 meses" },
];

export default function Resultados() {
  return (
    <Layout>
      <PageHero eyebrow="Casos & Resultados" title={<>Histórias de <em className="text-sage-light italic font-light">transformação real</em></>} subtitle="Resultados reais de pacientes reais. Publicados sempre com autorização — porque transparência é parte do nosso método." />
      <section className="py-24 bg-cream">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {cases.map(c => (
            <article key={c.title} className="bg-white border border-border overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_hsl(var(--navy)/0.15)] transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={c.img} alt="" className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 bg-navy/80 border border-sage/30 text-sage text-[9px] tracking-[0.2em] uppercase px-3 py-1">{c.badge}</span>
              </div>
              <div className="p-7">
                <span className="text-[9px] tracking-[0.25em] uppercase text-sage">{c.tag}</span>
                <h3 className="mt-2 font-display text-xl text-navy leading-snug">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground font-light leading-relaxed">{c.desc}</p>
                <div className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                  <span className="font-display text-3xl text-sage">{c.value}</span>
                  <span className="text-xs text-muted-foreground leading-tight">{c.label}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
