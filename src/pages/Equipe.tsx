import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";

import thaisPhoto from "@/assets/equipe/thais-rodrigues.jpeg.asset.json";
import joaoPhoto from "@/assets/equipe/joao-gustavo.jpeg.asset.json";
import isadoraPhoto from "@/assets/equipe/isadora-ledo.jpeg.asset.json";
import jessikaPhoto from "@/assets/equipe/jessika-rodrigues.jpeg.asset.json";
import marianaPhoto from "@/assets/equipe/mariana-benvenuto.jpeg.asset.json";
import mariaFernandaPhoto from "@/assets/equipe/maria-fernanda.jpeg.asset.json";
import dayanePhoto from "@/assets/equipe/dayane-cardoso.jpeg.asset.json";

type Member = { name: string; role: string; credentials?: string; bio: string; featured?: boolean; photo?: string };
type Group = { area: string; members: Member[] };

const initialsOf = (name: string) =>
  name
    .replace(/^(Dr\.?a?|Dra\.?)\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(n => n[0]?.toUpperCase() ?? "")
    .join("");

const leaders: Member[] = [
  {
    name: "Gregory Buck",
    role: "Founder & CEO",
    bio: "Atua na gestão do Instituto Evolução e na reabilitação física e otimização do desempenho funcional, promovendo recuperação segura e eficiente.",
    featured: true,
  },
  {
    name: "Dra. Amanda Bombini",
    role: "Diretoria Médica · Dermatologista e Tricologista",
    bio: "Especialista em dermatologia clínica, estética e tricologia, promovendo saúde da pele, cabelos e unhas através de tratamentos personalizados.",
    featured: true,
  },
];

const groups: Group[] = [
  {
    area: "Nutrologia",
    members: [
      { name: "Dra. Maria Fernanda", role: "Nutróloga", bio: "Atendimento voltado ao equilíbrio metabólico, prevenção de doenças, longevidade e promoção de hábitos saudáveis.", photo: mariaFernandaPhoto.url },
      { name: "Dra. Vitória Amorim", role: "Nutróloga", credentials: "CRM 250036-SP", bio: "Especialista em saúde metabólica, emagrecimento, longevidade e performance, desenvolvendo estratégias personalizadas para promover saúde e qualidade de vida." },
      { name: "Dra. Yasmim Aires", role: "Nutróloga", credentials: "CRM 243257-SP", bio: "Atua em emagrecimento, reposição hormonal e medicina do estilo de vida, auxiliando pacientes na transformação da saúde e da composição corporal." },
    ],
  },
  {
    area: "Ginecologia",
    members: [
      { name: "Dra. Mariana Benvenuto", role: "Ginecologista", bio: "Atendimento integral à saúde da mulher, com foco em prevenção, acompanhamento ginecológico, saúde hormonal e qualidade de vida feminina.", photo: marianaPhoto.url },
      { name: "Dra. Natalia Dalfré", role: "Ginecologista e Obstetra", bio: "Atuação focada em ginecologia geral, ginecologia integrativa e estética íntima, promovendo cuidado individualizado e bem-estar feminino em todas as fases da vida." },
    ],
  },
  {
    area: "Cardiologia",
    members: [
      { name: "Dr. Rafael Rosa", role: "Cardiologista", bio: "Atua na prevenção, diagnóstico e acompanhamento das doenças cardiovasculares, promovendo saúde, segurança e longevidade." },
      { name: "Dr. João Gustavo", role: "Cardiologista", bio: "Especialista em cardiologia preventiva, com foco em avaliação cardiovascular integrada à saúde metabólica e à qualidade de vida.", photo: joaoPhoto.url },
    ],
  },
  {
    area: "Cirurgia Vascular",
    members: [
      { name: "Dr. Thiago Louza", role: "Cirurgião Vascular e Flebologista", bio: "Atua no diagnóstico e tratamento de doenças vasculares, incluindo varizes e insuficiência venosa, utilizando técnicas modernas e minimamente invasivas." },
    ],
  },
  {
    area: "Psiquiatria",
    members: [
      { name: "Dra. Isadora Ledo", role: "Psiquiatra", bio: "Atendimento voltado à saúde mental, auxiliando pacientes no tratamento de ansiedade, depressão, TDAH, burnout e transtornos do humor.", photo: isadoraPhoto.url },
    ],
  },
  {
    area: "Geriatria",
    members: [
      { name: "Dr. Moisés", role: "Geriatra", bio: "Especialista em envelhecimento saudável, prevenção de fragilidades e promoção da autonomia e qualidade de vida na terceira idade." },
    ],
  },
  {
    area: "Pediatria",
    members: [
      { name: "Dra. Jéssika Rodrigues", role: "Pediatra e Gastropediatra", bio: "Atua no acompanhamento do desenvolvimento infantil e no tratamento das principais condições gastrointestinais da infância.", photo: jessikaPhoto.url },
    ],
  },
  {
    area: "Movimento & Performance",
    members: [
      { name: "Thaís Rodrigues", role: "Fisioterapia Esportiva · Biomecânica · Yoga", bio: "Especialista em fisioterapia esportiva, biomecânica da corrida e reabilitação funcional, com foco em performance e prevenção de lesões.", photo: thaisPhoto.url },
      { name: "Giovanni Souza", role: "Fisioterapeuta", bio: "Atendimento voltado à recuperação funcional, reabilitação musculoesquelética e melhora da qualidade de movimento." },
      { name: "Varley Maronezi", role: "Fisioterapeuta", bio: "Especialista em reabilitação ortopédica e funcional, auxiliando pacientes na recuperação e prevenção de lesões." },
      { name: "Matheus", role: "Personal Trainer", bio: "Atua no desenvolvimento de programas de treinamento personalizados voltados à saúde, condicionamento físico e performance." },
      { name: "Gustavo", role: "Personal Trainer", bio: "Especialista em treinamento físico individualizado, auxiliando pacientes na conquista de objetivos relacionados à saúde e qualidade de vida." },
      { name: "Lucas", role: "Personal Trainer", bio: "Atua na orientação de exercícios físicos e desenvolvimento de hábitos saudáveis, promovendo bem-estar e desempenho físico." },
    ],
  },
  {
    area: "Consultoria Materno-Infantil",
    members: [
      { name: "Gabriela Santana", role: "Consultora de Amamentação", credentials: "Graduanda em Fonoaudiologia", bio: "Consultora em amamentação, oferecendo suporte especializado para gestantes, puérperas e bebês — manejo da amamentação e fortalecimento do vínculo mãe-bebê." },
    ],
  },
  {
    area: "Enfermagem",
    members: [
      { name: "Jeniffer", role: "Enfermeira", bio: "Atua no suporte assistencial, acompanhamento de procedimentos e acolhimento dos pacientes, contribuindo para uma experiência segura e humanizada." },
    ],
  },
  {
    area: "Estética",
    members: [
      { name: "Dayane Cardoso", role: "Esteticista", bio: "Especialista em cuidados estéticos faciais e corporais, promovendo bem-estar, autoestima e tratamentos personalizados.", photo: dayanePhoto.url },
    ],
  },
  {
    area: "Podologia",
    members: [
      { name: "Larissa Defante", role: "Podóloga", bio: "Atua na prevenção e tratamento das principais alterações dos pés, promovendo conforto, saúde e qualidade de vida." },
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

      {/* Liderança */}
      <section className="py-24 bg-cream">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow !justify-center !mx-auto">Liderança</span>
            <h2 className="mt-5 section-heading">Quem está à <em>frente do Instituto</em></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {leaders.map(m => (
              <article key={m.name} className="bg-white border border-border overflow-hidden flex flex-col sm:flex-row">
                <div className="sm:w-[42%] aspect-[3/4] sm:aspect-auto bg-sage/10 flex items-center justify-center shrink-0 overflow-hidden">
                  {m.photo ? (
                    <img src={m.photo} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <span className="font-display text-6xl text-sage-light italic">{initialsOf(m.name)}</span>
                  )}
                </div>
                <div className="p-8 flex-1">
                  <span className="block text-[10px] tracking-[0.3em] uppercase text-sage">{m.role}</span>
                  <h3 className="mt-3 font-display text-2xl text-navy leading-tight">{m.name}</h3>
                  {m.credentials && <p className="mt-1 text-xs text-muted-foreground">{m.credentials}</p>}
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-light">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
              <div
                className={`grid gap-px bg-sage/10 ${
                  g.members.length === 1
                    ? "md:grid-cols-1"
                    : g.members.length === 2
                    ? "md:grid-cols-2"
                    : "md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {g.members.map(m => (
                  <article key={m.name} className="bg-navy hover:bg-sage/5 transition-colors flex">
                    <div className="w-[38%] shrink-0 bg-sage/10 border-r border-sage/15 flex items-center justify-center overflow-hidden">
                      {m.photo ? (
                        <img src={m.photo} alt={m.name} className="w-full h-full object-cover aspect-[3/4]" loading="lazy" />
                      ) : (
                        <span className="font-display text-3xl text-sage-light italic">{initialsOf(m.name)}</span>
                      )}
                    </div>
                    <div className="p-7 flex-1">
                      <span className="block text-[10px] tracking-[0.3em] uppercase text-sage">{m.role}</span>
                      <h3 className="mt-2 font-display text-xl text-white leading-tight">{m.name}</h3>
                      {m.credentials && <p className="mt-1 text-xs text-white/40">{m.credentials}</p>}
                      <p className="mt-3 text-sm text-white/55 leading-relaxed font-light">{m.bio}</p>
                    </div>
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
