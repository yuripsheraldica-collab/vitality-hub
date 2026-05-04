import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { Stethoscope, Activity, FlaskConical, Dumbbell, Sparkles, Heart, Brain, Apple } from "lucide-react";

const items = [
  [Stethoscope, "Consultas Médicas", ["Clínica geral e medicina preventiva","Medicina integrativa e funcional","Acompanhamento de doenças crônicas","Avaliação pré-operatória"]],
  [FlaskConical, "Laboratório", ["Hemograma e bioquímica completa","Hormônios e perfil metabólico","Exames preventivos periódicos","Resultados com orientação clínica"]],
  [Activity, "Fisioterapia", ["Ortopédica e esportiva","Reabilitação pós-operatória","Postural e preventiva","Técnicas manuais avançadas"]],
  [Dumbbell, "Academia Premium", ["Personal training individualizado","Funcional e força","Prescrição integrada com a área médica","Composição corporal monitorada"]],
  [Sparkles, "Pilates Clínico", ["Clínico e terapêutico","Pós-lesão","Solo e aparelhos","Turmas reduzidas (máx. 4)"]],
  [Apple, "Nutrição", ["Funcional e esportiva","Reeducação alimentar","Acompanhamento contínuo","Plano para a vida real"]],
  [Brain, "Psicologia", ["Saúde mental integrada","Psicoterapia individual","Suporte em processos de mudança","Trabalho conjunto com equipe"]],
  [Heart, "Saúde Integrativa", ["Olhar completo: corpo + mente","Prevenção como pilar","Estilo de vida e longevidade","Acompanhamento por jornada"]],
];

export default function Especialidades() {
  return (
    <Layout>
      <PageHero eyebrow="Especialidades" title={<>Cuidado <em className="text-sage-light italic font-light">integral</em></>} subtitle="Todas as especialidades integradas em um único lugar — uma equipe que trata você como um todo, não em partes." />
      <section className="py-24 bg-cream">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {items.map(([Icon, title, list], i) => {
            const I = Icon as any;
            return (
              <div key={title as string} className="bg-cream p-8 hover:bg-white transition-colors group">
                <span className="font-display text-xs tracking-[0.2em] text-sage/60">{String(i+1).padStart(2,"0")}</span>
                <div className="mt-5 w-11 h-11 rounded-full border border-sage/25 flex items-center justify-center group-hover:bg-sage/10 transition-colors">
                  <I className="w-5 h-5 text-sage" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-xl text-navy">{title as string}</h3>
                <ul className="mt-4 space-y-1.5">
                  {(list as string[]).map(li => (
                    <li key={li} className="text-xs text-muted-foreground pl-3 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-px before:bg-sage">{li}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
