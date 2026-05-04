import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";

const team = [
  { initials: "DR", role: "Clínica Médica", name: "Dr. Nome Sobrenome", spec: "CRM · Clínico Geral / Medicina Integrativa", bio: "Mais de uma década dedicada a um atendimento que vai além do sintoma. Especialista em medicina integrativa." },
  { initials: "FT", role: "Fisioterapia", name: "Dra. Nome Sobrenome", spec: "CREFITO · Ortopédica e Esportiva", bio: "Especialista em reabilitação funcional e prevenção de lesões. Cada protocolo construído do zero." },
  { initials: "EF", role: "Pilates · Educação Física", name: "Nome Sobrenome", spec: "CREF · Pilates Certificado", bio: "Une o método Pilates à prescrição clínica, integrado à equipe médica." },
  { initials: "BM", role: "Biomedicina", name: "Nome Sobrenome", spec: "CBMF · Biomedicina Estética e Laboratorial", bio: "Faz com que os exames sejam mais do que números — são a ponte entre o que você sente e o que o corpo comunica." },
  { initials: "NR", role: "Nutrição", name: "Nome Sobrenome", spec: "CRN · Funcional e Esportiva", bio: "Cria estratégias alimentares que cabem na sua vida real — sem dietas de revista." },
  { initials: "PS", role: "Psicologia", name: "Nome Sobrenome", spec: "CRP · Saúde Mental Integrada", bio: "Saúde emocional como pilar — porque corpo e mente são inseparáveis." },
];

export default function Equipe() {
  return (
    <Layout>
      <PageHero eyebrow="Quem cuida de você" title={<>Nossa <em className="text-sage-light italic font-light">equipe</em></>} subtitle="Profissionais selecionados não só pela competência técnica, mas pela capacidade de escutar, acolher e criar relações de confiança duradouras." />
      <section className="py-24 bg-navy text-white">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-sage/10">
          {team.map(p => (
            <div key={p.name} className="bg-navy p-10 hover:bg-sage/5 transition-colors">
              <div className="w-20 h-20 rounded-full bg-sage/15 border border-sage/25 flex items-center justify-center font-display text-2xl text-sage-light italic">{p.initials}</div>
              <span className="block mt-7 text-[10px] tracking-[0.3em] uppercase text-sage">{p.role}</span>
              <h3 className="mt-2 font-display text-2xl text-white leading-tight">{p.name}</h3>
              <p className="mt-1 text-xs text-white/40">{p.spec}</p>
              <p className="mt-5 text-sm text-white/55 leading-relaxed font-light">{p.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
