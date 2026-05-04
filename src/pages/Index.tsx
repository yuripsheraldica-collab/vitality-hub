import Layout from "@/components/site/Layout";
import { Link } from "react-router-dom";
import {
  Stethoscope, Activity, FlaskConical, Dumbbell, Sparkles, Heart,
  Ear, Award, Link2, Hourglass, Building2, Target, ArrowRight, Phone, Calendar,
  ClipboardList, Users
} from "lucide-react";
import academia1 from "@/assets/academia-1.jpg";
import academia2 from "@/assets/academia-2.jpg";
import fachada from "@/assets/fachada.jpg";
import recepcao from "@/assets/recepcao.jpg";

export default function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[92vh] -mt-20 pt-20 bg-navy text-white flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={fachada} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        </div>
        <div className="container-x relative z-10 py-20">
          <div className="eyebrow"><span>Particular · Alto Padrão · Humanizado</span></div>
          <h1 className="mt-7 font-display text-5xl md:text-7xl lg:text-[82px] leading-[1.05] max-w-4xl">
            Você merece um<br />
            cuidado que <em className="text-sage-light italic font-light">transforma,</em><br />
            não apenas trata.
          </h1>
          <p className="mt-7 max-w-xl text-white/60 leading-relaxed text-base">
            O Instituto Evolução é o centro multidisciplinar de saúde e bem-estar onde você não é um prontuário — é uma pessoa com história, ritmo e objetivos únicos.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {["Sem filas","Sem pressa","Sem convênio limitando","Com hora marcada real"].map(p => (
              <div key={p} className="flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-white/50">
                <div className="w-1 h-1 rounded-full bg-sage" /> {p}
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <Link to="/centro-de-cuidados" className="btn-primary">Agendar minha avaliação</Link>
            <Link to="/instituto" className="btn-outline-light"><span>Como funciona</span> <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="bg-navy text-white border-t border-sage/10 py-20">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-px bg-sage/10">
          {[
            ["5+", "Especialidades integradas"],
            ["100%", "Atendimento particular"],
            ["—", "Minutos de espera"],
            ["1 lugar", "Para tudo que você precisa"],
          ].map(([v, l]) => (
            <div key={l} className="bg-navy text-center py-12 px-6">
              <div className="font-display text-5xl md:text-6xl font-light text-white">{v}</div>
              <div className="mt-3 text-[10px] tracking-[0.25em] uppercase text-white/40">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* RUPTURA / "padrão que você sempre mereceu" — VÍDEO INSTITUCIONAL */}
      <section className="py-28 md:py-36 bg-cream relative overflow-hidden">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <video
              src="/video-institucional.mp4"
              autoPlay muted loop playsInline
              className="w-full aspect-[4/5] object-cover shadow-[0_30px_80px_-20px_hsl(var(--navy)/0.4)]"
            />
            <div className="absolute -bottom-5 -right-5 w-32 h-32 border border-sage/30 -z-0" />
          </div>
          <div>
            <span className="eyebrow">Por que somos diferentes</span>
            <h2 className="mt-5 section-heading">
              O padrão que você<br /><em>sempre mereceu.</em>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Esquecemos tudo que a medicina convencional criou de ruim — e reinventamos cada detalhe para que cuidar da sua saúde seja, finalmente, algo que você queira fazer.
            </p>
            <div className="mt-10 space-y-7">
              {[
                ["100% particular", "Sem convênio significa sem restrições. Você escolhe o que é melhor para você."],
                ["Ambiente premium", "Cada detalhe pensado para acolher — não intimidar."],
                ["Equipe que conversa", "Médicos, fisios e educadores físicos traçam um plano conjunto."],
                ["Humanização ponta a ponta", "Acompanhamento real do primeiro contato à evolução completa."],
              ].map(([t, d], i) => (
                <div key={t} className="flex gap-5 pb-6 border-b border-border last:border-0">
                  <span className="font-display text-3xl text-sage-pale leading-none">0{i+1}</span>
                  <div>
                    <h3 className="text-base font-medium text-navy">{t}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed font-light">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALORES (ícones profissionais) */}
      <section className="py-28 bg-cream">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow !justify-center !mx-auto">Nossos princípios</span>
            <h2 className="mt-5 section-heading">Cuidado guiado por <em>valores reais</em></h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              [Target, "Propósito acima de protocolo", "Não seguimos fórmulas. Cada pessoa que chega aqui recebe atenção individualizada, porque corpos — e histórias — são únicos."],
              [Ear, "Escuta antes de diagnóstico", "O primeiro ato de cuidar é ouvir. Não interrompemos. Não cronometramos. Criamos um espaço seguro para você se abrir."],
              [Award, "Excelência sem arrogância", "Somos exigentes com qualidade, mas acolhedores em postura. Alto padrão não precisa ser distante — pode (e deve) ser humano."],
              [Link2, "Integração como método", "Nossa equipe se reúne, se comunica e traça planos conjuntos. Você é cuidado como um todo."],
              [Hourglass, "Resultado com continuidade", "Não existimos para consultas isoladas. Existimos para acompanhar sua jornada completa — da queixa à transformação."],
              [Building2, "Ambiente como parte do cuidado", "O espaço que você frequenta influencia como você se sente. Por isso investimos em cada detalhe."],
            ].map(([Icon, t, d]) => {
              const I = Icon as any;
              return (
                <div key={t as string} className="bg-cream p-10 hover:bg-white transition-colors group">
                  <div className="w-12 h-12 rounded-full border border-sage/30 flex items-center justify-center group-hover:bg-sage/10 group-hover:border-sage transition-colors">
                    <I className="w-5 h-5 text-sage" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-navy">{t as string}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-light">{d as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AMBIENTE */}
      <section className="py-28 bg-white">
        <div className="container-x">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
            <h2 className="section-heading max-w-xl">Um espaço pensado para <em>você se sentir bem</em></h2>
            <p className="max-w-sm text-muted-foreground text-sm leading-relaxed">
              Cada detalhe foi escolhido com intenção — da iluminação ao mobiliário. Porque o ambiente é parte do tratamento.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-1 h-[600px]">
            <Tile src={fachada} label="Fachada" className="row-span-2" />
            <Tile src={recepcao} label="Recepção" />
            <Tile src={academia1} label="Academia · Piscina" />
            <Tile src={academia2} label="Área externa" className="col-span-2 md:col-span-1" />
            <Tile src={recepcao} label="Hall de entrada" className="hidden md:block" />
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="py-28 bg-navy text-white">
        <div className="container-x">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-14">
            <h2 className="section-heading heading-light">Cuidado <em>integral</em></h2>
            <p className="max-w-sm text-white/45 text-sm leading-relaxed">Todas as especialidades integradas em um único lugar, com uma equipe que trata você como um todo.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-sage/10">
            {[
              [Stethoscope, "Consultas Médicas", "Atendimento clínico de excelência, com tempo real para ouvir, diagnosticar com precisão e acompanhar sua saúde."],
              [FlaskConical, "Laboratório", "Exames laboratoriais completos, com tecnologia atual e interpretação inteligente."],
              [Activity, "Fisioterapia", "Reabilitação e prevenção com abordagem individualizada — do pós-operatório ao esportivo."],
              [Dumbbell, "Academia Premium", "Espaço fitness de alto padrão com acompanhamento profissional contínuo."],
              [Sparkles, "Pilates Clínico", "Método Pilates em ambiente exclusivo, com instrutores certificados."],
              [Heart, "Saúde Integrativa", "Olhar completo sobre você — mente, corpo e estilo de vida."],
            ].map(([Icon, t, d]) => {
              const I = Icon as any;
              return (
                <div key={t as string} className="bg-navy p-10 border-t border-sage/0 hover:bg-sage/5 transition-colors group">
                  <div className="w-11 h-11 rounded-full border border-sage/25 flex items-center justify-center group-hover:bg-sage/10 group-hover:border-sage transition-colors">
                    <I className="w-5 h-5 text-sage" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-white">{t as string}</h3>
                  <p className="mt-3 text-sm text-white/45 leading-relaxed font-light">{d as string}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link to="/especialidades" className="text-[11px] tracking-[0.25em] uppercase text-sage border-b border-sage/30 pb-1 hover:text-sage-light">Ver todas as especialidades →</Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-28 bg-cream">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="eyebrow">Dê o primeiro passo</span>
            <h2 className="mt-5 section-heading">Comece a sua<br /><em>evolução hoje.</em></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Agende sua avaliação inicial e descubra o que um atendimento de verdade pode fazer por você. Com hora marcada, sem fila, sem pressa.
            </p>
            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              {[[Calendar, "Segunda a sábado · horários flexíveis"],[Phone, "WhatsApp: (19) 9xxxx-xxxx"],[ClipboardList, "Resposta em até 2 horas úteis"],[Users, "Atendimento exclusivamente particular"]].map(([I,t]) => {
                const Ic = I as any;
                return <div key={t as string} className="flex items-center gap-3"><Ic className="w-4 h-4 text-sage" strokeWidth={1.5} />{t as string}</div>;
              })}
            </div>
          </div>
          <div className="bg-white p-10 border border-border">
            <h3 className="font-display text-2xl text-navy mb-6">Solicitar agendamento</h3>
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Solicitação enviada. Entraremos em contato em até 2h úteis."); }}>
              {[["Nome completo","text"],["WhatsApp","tel"],["E-mail","email"]].map(([l,t]) => (
                <div key={l}>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">{l}</label>
                  <input required type={t} className="w-full bg-transparent border-b border-border py-3 text-navy outline-none focus:border-sage transition-colors" />
                </div>
              ))}
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Especialidade</label>
                <select className="w-full bg-transparent border-b border-border py-3 text-navy outline-none focus:border-sage">
                  <option>Avaliação Geral Integrada</option>
                  <option>Consulta Médica</option>
                  <option>Fisioterapia</option>
                  <option>Pilates</option>
                  <option>Academia</option>
                  <option>Laboratório</option>
                </select>
              </div>
              <button className="w-full btn-primary">Solicitar contato →</button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Tile({ src, label, className = "" }: { src: string; label: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <img src={src} alt={label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
        <span className="text-white text-xs tracking-[0.2em] uppercase">{label}</span>
      </div>
    </div>
  );
}
