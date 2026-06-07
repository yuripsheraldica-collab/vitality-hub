import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import recepcao from "@/assets/recepcao.jpg";
import fachada from "@/assets/fachada.jpg";
import { Target, Eye, Gem } from "lucide-react";

const valores = [
  ["Excelência Técnica", "Atuamos com base em conhecimento científico, atualização constante e práticas seguras."],
  ["Cuidado Individualizado", "Cada pessoa é única — nossos atendimentos respeitam necessidades, limites e objetivos específicos."],
  ["Saúde como Prioridade", "Colocamos o bem-estar físico e funcional acima de qualquer resultado estético ou imediato."],
  ["Ética e Responsabilidade", "Agimos com transparência, profissionalismo e compromisso com a integridade dos nossos pacientes."],
  ["Evolução Contínua", "Buscamos melhoria constante nos processos, atendimentos e resultados."],
  ["Integração Corpo e Mente", "Entendemos o movimento como ferramenta de equilíbrio físico, emocional e funcional."],
  ["Resultado com Consistência", "Focamos em progresso sustentável, seguro e mensurável."],
];

export default function Instituto() {
  return (
    <Layout>
      <PageHero eyebrow="O Instituto" title={<>Criado para ser <em className="text-sage-light italic font-light">diferente</em><br />desde o primeiro dia.</>} subtitle="Nascemos de uma insatisfação genuína com o modelo tradicional de saúde — e nos dedicamos a reinventar cada detalhe da experiência de cuidar." />

      <section className="py-24 bg-cream">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <img src={fachada} alt="Fachada do Instituto Evolução" className="w-full aspect-[4/3] object-cover" />
          <div>
            <h2 className="section-heading">Nossa <em>história</em></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              <strong className="text-navy font-medium">O Instituto Evolução nasceu de uma insatisfação genuína</strong> com o modelo tradicional de saúde. Filas que desrespeitam, consultas cronometradas, ambientes que intimidam.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Reunimos profissionais que compartilham a mesma visão: que <strong className="text-navy font-medium">saúde de verdade exige tempo, escuta e integração</strong>. Cada especialidade conversa com as outras. Cada paciente tem um olhar completo sobre si.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-x">
          <h2 className="section-heading text-center">Nossa <em>linha do tempo</em></h2>
          <div className="mt-16 grid md:grid-cols-4 [&>*]:border-l [&>*]:border-t [&>*]:border-border border-r border-b border-border">
            {[["2018","Fundação","Abrimos as portas com a missão de redefinir o padrão de saúde em Limeira."],
              ["2020","Expansão multidisciplinar","Integração de fisioterapia, pilates e academia ao núcleo médico."],
              ["2022","Novo espaço","Inauguração das novas instalações — conforto e privacidade real."],
              ["Hoje","Referência","Centenas de histórias de transformação na região."]].map(([y,t,d]) => (
              <div key={y} className="bg-white p-8">
                <div className="font-display text-3xl text-sage">{y}</div>
                <h4 className="mt-3 font-medium text-navy">{t}</h4>
                <p className="mt-2 text-sm text-muted-foreground font-light leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSÃO · VISÃO · VALORES */}
      <section className="py-24 bg-cream">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow !justify-center !mx-auto">O que nos move</span>
            <h2 className="mt-5 section-heading">Missão, visão e <em>valores</em></h2>
          </div>
          <div className="mt-14 grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-start">
            {/* Vertical video */}
            <div className="mx-auto lg:mx-0 w-full max-w-[320px]">
              <div className="relative aspect-[9/16] bg-navy overflow-hidden border border-border rounded-xl shadow-[0_30px_80px_-20px_hsl(var(--navy)/0.4)]">
                <video
                  src="/video-institucional.mp4"
                  autoPlay muted loop playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-center text-[10px] tracking-[0.25em] uppercase text-sage">O que nos move, em movimento</p>
            </div>
            {/* Missão & Visão */}
            <div className="space-y-6">
              <div className="bg-white p-8 border-l-2 border-sage">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-sage" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl text-navy">Missão</h3>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed font-light">
                  Transformar a saúde e a performance das pessoas através de um modelo clínico integrado, baseado em ciência, movimento e acompanhamento especializado.
                </p>
              </div>
              <div className="bg-white p-8 border-l-2 border-sage">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-sage" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl text-navy">Visão</h3>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed font-light">
                  Consolidar-se como um centro de referência em saúde, reabilitação e performance, unindo abordagem clínica e desenvolvimento físico de forma inovadora e eficaz.
                </p>
              </div>
            </div>
          </div>
          {/* Valores */}
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <Gem className="w-5 h-5 text-sage" strokeWidth={1.5} />
              <h3 className="font-display text-2xl text-navy">Valores</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 [&>*]:border-l [&>*]:border-t [&>*]:border-border border-r border-b border-border">
              {valores.map(([t, d], i) => (
                <div key={t} className="bg-white p-7">
                  <span className="font-display text-xs tracking-[0.2em] text-sage/60">{String(i + 1).padStart(2, "0")}</span>
                  <h4 className="mt-3 font-medium text-navy">{t}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-light">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-heading heading-light">Nosso <em>manifesto</em></h2>
            <blockquote className="mt-8 border-l-2 border-sage pl-6 font-display italic text-2xl text-white/85 leading-relaxed">
              "Você não está aqui para ser atendido. Está aqui para evoluir."
            </blockquote>
            <p className="mt-8 text-white/55 leading-relaxed">
              Somos particular por filosofia. Acreditamos que cuidado verdadeiro não cabe nas restrições de um plano. Aqui, quem define o ritmo é você.
            </p>
          </div>
          <img src={recepcao} alt="Recepção do Instituto" className="w-full aspect-[4/5] object-cover" />
        </div>
      </section>
    </Layout>
  );
}
