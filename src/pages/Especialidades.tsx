import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import {
  Stethoscope, Activity, Dumbbell, Sparkles, Heart, Apple,
  ShieldPlus, HeartPulse, Hourglass, Scan, Baby
} from "lucide-react";

const items: [any, string, string, string, string[]][] = [
  [Scan, "Médica", "Dermatologia",
    "Cuidado completo da saúde da pele, dos cabelos e das unhas — do diagnóstico clínico ao acompanhamento estético. Atuamos com investigação detalhada, prevenção do câncer de pele e protocolos personalizados para cada perfil.",
    ["Dermatologia clínica e preventiva", "Acompanhamento de pele acneica e sensível", "Tratamento de manchas e fotoenvelhecimento", "Procedimentos estéticos minimamente invasivos"]],
  [HeartPulse, "Médica", "Vascular",
    "Avaliação e tratamento de doenças venosas e arteriais com olhar funcional e estético. Da prevenção de tromboses ao manejo de varizes, com tecnologia de ponta e seguimento contínuo.",
    ["Tratamento clínico de varizes e telangiectasias", "Doppler vascular em consultório", "Prevenção de trombose venosa", "Acompanhamento pós-procedimento"]],
  [Heart, "Médica", "Cardiologia",
    "Saúde do coração com investigação aprofundada e foco em prevenção. Avaliamos risco cardiovascular, ajustamos estilo de vida e acompanhamos doenças crônicas com proximidade real.",
    ["Avaliação de risco cardiovascular", "Check-up cardiológico completo", "Acompanhamento de hipertensão e arritmias", "Liberação para atividade física"]],
  [ShieldPlus, "Médica", "Ginecologia",
    "Saúde da mulher em todas as fases — da adolescência à menopausa. Atendimento acolhedor, integrado com nutrição, psicologia e fisioterapia pélvica quando necessário.",
    ["Consulta ginecológica preventiva", "Acompanhamento hormonal e climatério", "Saúde íntima e bem-estar", "Planejamento reprodutivo"]],
  [Hourglass, "Médica", "Geriatria",
    "Cuidado especializado para a maturidade, com foco em autonomia, longevidade e qualidade de vida. Avaliação ampla — física, cognitiva, emocional e funcional — com plano integrado.",
    ["Avaliação geriátrica ampla", "Prevenção de quedas e sarcopenia", "Manejo de polifarmácia", "Suporte familiar e cuidadores"]],
  [Baby, "Médica", "Nutrologia",
    "Investigação clínica da relação entre alimentação, metabolismo e doenças. Mais que dieta: tratamento médico de obesidade, deficiências nutricionais e desordens metabólicas.",
    ["Tratamento clínico da obesidade", "Reposição de vitaminas e minerais", "Performance e composição corporal", "Acompanhamento de doenças metabólicas"]],
  [Activity, "Reabilitação", "Fisioterapia",
    "Reabilitação ortopédica, esportiva e funcional com avaliação detalhada e protocolos individualizados. Trabalhamos integrados ao time médico e à academia para acelerar resultados de forma segura.",
    ["Ortopédica, esportiva e funcional", "Reabilitação pós-operatória", "Avaliação postural e biomecânica", "Técnicas manuais e terapias avançadas"]],
  [Dumbbell, "Movimento", "Academia",
    "Espaço fitness de alto padrão com prescrição médica integrada e acompanhamento profissional contínuo. Treinos pensados para corpo, performance e longevidade.",
    ["Personal training individualizado", "Treinamento funcional e força", "Composição corporal monitorada", "Integração com clínica e fisioterapia"]],
  [Sparkles, "Movimento", "Pilates",
    "Pilates clínico e funcional em ambiente exclusivo, com instrutores certificados. Indicado para reabilitação, condicionamento e qualidade de vida em todas as idades.",
    ["Clínico, terapêutico e pós-lesão", "Solo e aparelhos completos", "Turmas reduzidas (máx. 4)", "Trabalho integrado com fisioterapia"]],
  [Apple, "Nutrição", "Nutrição",
    "Reeducação alimentar funcional e esportiva, com plano realista e acompanhamento próximo. Construímos hábitos sustentáveis em vez de dietas restritivas.",
    ["Funcional, clínica e esportiva", "Plano alimentar individualizado", "Acompanhamento contínuo", "Estratégias para a vida real"]],
];

export default function Especialidades() {
  return (
    <Layout>
      <PageHero
        eyebrow="Especialidades"
        title={<>Cuidado <em className="text-sage-light italic font-light">integral</em></>}
        subtitle="Mais de 15 áreas integradas em um único lugar — uma equipe que trata você como um todo, não em partes."
      />
      <section className="py-20 bg-cream">
        <div className="container-x grid md:grid-cols-2 gap-px bg-border">
          {items.map(([Icon, area, title, desc, list], i) => {
            const I = Icon;
            return (
              <article key={title} className="bg-cream p-10 hover:bg-white transition-colors group">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-xs tracking-[0.2em] text-sage/60">{String(i + 1).padStart(2, "0")} · {area}</span>
                  <div className="w-12 h-12 rounded-full border border-sage/25 flex items-center justify-center group-hover:bg-sage/10 transition-colors">
                    <I className="w-5 h-5 text-sage" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="mt-5 font-display text-2xl text-navy">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground font-light leading-relaxed">{desc}</p>
                <ul className="mt-5 space-y-1.5">
                  {list.map(li => (
                    <li key={li} className="text-xs text-muted-foreground pl-3 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-px before:bg-sage">{li}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
