import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";

type Member = { name: string; role: string; credentials?: string; bio: string };
type Group = { area: string; members: Member[] };

const initialsOf = (name: string) =>
  name
    .replace(/^(Dr\.?a?|Dra\.?)\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(n => n[0]?.toUpperCase() ?? "")
    .join("");

const groups: Group[] = [
  {
    area: "Ginecologia",
    members: [
      { name: "Dra. Mariana Benvenuto", role: "Ginecologista", bio: "Atendimento voltado à saúde da mulher, prevenção, acompanhamento ginecológico e qualidade de vida feminina." },
      { name: "Dra. Natalia Dalfré", role: "Ginecologista", bio: "Atuação focada em acompanhamento ginecológico individualizado, promovendo saúde e bem-estar feminino em todas as fases da vida." },
    ],
  },
  {
    area: "Dermatologia & Estética",
    members: [
      { name: "Dra. Amanda Bombini", role: "Dermatologista e Tricologista", bio: "Especialista em saúde da pele, cabelos e tratamentos estéticos, com abordagem personalizada e foco em resultados naturais." },
      { name: "Dayane", role: "Esteticista", bio: "Atua nos protocolos estéticos e suporte aos tratamentos dermatológicos, promovendo cuidado, autoestima e bem-estar." },
    ],
  },
  {
    area: "Cardiologia & Performance",
    members: [
      { name: "Dr. Rafael Rosa", role: "Cardiologista", bio: "Atendimento voltado à saúde cardiovascular, prevenção, performance e qualidade de vida." },
    ],
  },
  {
    area: "Nutrologia & Saúde Metabólica",
    members: [
      { name: "Dra. Vitória Amorim", role: "Nutrologia", credentials: "CRM 250036-SP", bio: "Médica com atuação em emagrecimento, performance, saúde metabólica e longevidade, através de uma abordagem individualizada e integral." },
      { name: "Dra. Yasmim Aires", role: "Nutrologia", credentials: "CRM 243257-SP", bio: "Atua em nutrologia, medicina esportiva e estilo de vida, auxiliando pacientes no emagrecimento, equilíbrio hormonal e melhora da qualidade de vida." },
    ],
  },
  {
    area: "Geriatria",
    members: [
      { name: "Dr. Moisés", role: "Geriatra", bio: "Atendimento focado em envelhecimento saudável, autonomia, prevenção e qualidade de vida." },
    ],
  },
  {
    area: "Saúde Materno-Infantil",
    members: [
      { name: "Gabriela Santana", role: "Consultora de Amamentação", credentials: "Graduanda em Fonoaudiologia", bio: "Atendimento humanizado para gestantes e puérperas, auxiliando no manejo da amamentação e fortalecimento do vínculo entre mãe e bebê." },
    ],
  },
  {
    area: "Movimento & Performance",
    members: [
      { name: "Thaís Rodrigues", role: "Fisioterapia Esportiva · Biomecânica da Corrida · Yoga", bio: "Atua na prevenção de lesões, melhora da mobilidade e performance esportiva, integrando fisioterapia, biomecânica e consciência corporal." },
    ],
  },
  {
    area: "Podologia",
    members: [
      { name: "Larissa Defante", role: "Podóloga", bio: "Cuidados especializados com a saúde dos pés, prevenção e tratamento podológico." },
    ],
  },
];

export default function Equipe() {
  return (
    <Layout>
      <PageHero
        eyebrow="Quem cuida de você"
        title={<>Nossa equipe <em className="text-sage-light italic font-light">multidisciplinar</em></>}
        subtitle="Profissionais especializados em saúde, performance, estética, longevidade e qualidade de vida, atuando de forma integrada para oferecer um cuidado completo e individualizado."
      />
      <section className="py-24 bg-navy text-white">
        <div className="container-x space-y-20">
          {groups.map((g, gi) => (
            <div key={g.area}>
              <header className="flex items-end justify-between gap-6 border-b border-sage/15 pb-5 mb-10">
                <div>
                  <span className="block text-[10px] tracking-[0.3em] uppercase text-sage">
                    {String(gi + 1).padStart(2, "0")} · Área
                  </span>
                  <h2 className="mt-3 font-display text-3xl md:text-4xl text-white leading-tight">{g.area}</h2>
                </div>
                <span className="hidden md:block text-xs text-white/40 font-light">
                  {g.members.length} {g.members.length === 1 ? "profissional" : "profissionais"}
                </span>
              </header>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-sage/10">
                {g.members.map(m => (
                  <article key={m.name} className="bg-navy p-10 hover:bg-sage/5 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-sage/15 border border-sage/25 flex items-center justify-center font-display text-2xl text-sage-light italic">
                      {initialsOf(m.name)}
                    </div>
                    <span className="block mt-7 text-[10px] tracking-[0.3em] uppercase text-sage">{m.role}</span>
                    <h3 className="mt-2 font-display text-2xl text-white leading-tight">{m.name}</h3>
                    {m.credentials && <p className="mt-1 text-xs text-white/40">{m.credentials}</p>}
                    <p className="mt-5 text-sm text-white/55 leading-relaxed font-light">{m.bio}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
