import Layout from "@/components/site/Layout";
import { useState } from "react";
import {
  Calendar, TrendingUp, Dumbbell, MessageSquare, CreditCard, FileText, Bell,
  Clock, CheckCircle2, PlayCircle, Download, AlertCircle, ArrowRight
} from "lucide-react";

type TabId = "agenda" | "evolucao" | "exercicios" | "comunicacao" | "financeiro" | "documentos" | "notificacoes";

const tabs: { id: TabId; label: string; icon: any }[] = [
  { id: "agenda", label: "Agenda e consultas", icon: Calendar },
  { id: "evolucao", label: "Evolução clínica", icon: TrendingUp },
  { id: "exercicios", label: "Plano de exercícios", icon: Dumbbell },
  { id: "comunicacao", label: "Comunicação", icon: MessageSquare },
  { id: "financeiro", label: "Financeiro", icon: CreditCard },
  { id: "documentos", label: "Documentos", icon: FileText },
  { id: "notificacoes", label: "Notificações", icon: Bell },
];

export default function CentroDeCuidados() {
  const [tab, setTab] = useState<TabId>("agenda");
  return (
    <Layout>
      {/* Header */}
      <section className="bg-navy text-white py-20">
        <div className="container-x">
          <span className="eyebrow !text-sage-light">Área do paciente</span>
          <h1 className="mt-5 font-display text-5xl md:text-6xl">Centro de <em className="italic font-light text-sage-light">Cuidados</em></h1>
          <p className="mt-5 max-w-2xl text-white/55 leading-relaxed">
            Sua jornada completa em um único lugar — agenda, evolução clínica, plano de exercícios, comunicação direta e tudo que envolve o seu cuidado.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="btn-primary">Acessar minha conta</button>
            <button className="btn-outline-light">Primeiro acesso <ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container-x grid lg:grid-cols-[260px_1fr] gap-10">
          {/* Sidebar */}
          <aside className="bg-white border border-border h-fit sticky top-28">
            {tabs.map(t => {
              const I = t.icon;
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`w-full flex items-center gap-3 px-5 py-4 text-left text-sm border-b border-border last:border-0 transition-colors ${
                    active ? "bg-sage/10 text-navy border-l-2 border-l-sage" : "text-muted-foreground hover:bg-cream"
                  }`}
                >
                  <I className="w-4 h-4 text-sage" strokeWidth={1.5} />
                  <span className="font-medium">{t.label}</span>
                </button>
              );
            })}
          </aside>

          {/* Content */}
          <div className="bg-white border border-border p-8 md:p-12 min-h-[600px]">
            {tab === "agenda" && <Agenda />}
            {tab === "evolucao" && <Evolucao />}
            {tab === "exercicios" && <Exercicios />}
            {tab === "comunicacao" && <Comunicacao />}
            {tab === "financeiro" && <Financeiro />}
            {tab === "documentos" && <Documentos />}
            {tab === "notificacoes" && <Notificacoes />}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function SectionTitle({ icon: Icon, title, subtitle }: any) {
  return (
    <div className="mb-8 pb-6 border-b border-border">
      <div className="flex items-center gap-3"><Icon className="w-5 h-5 text-sage" /><h2 className="font-display text-3xl text-navy">{title}</h2></div>
      <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}

function Agenda() {
  return (
    <div>
      <SectionTitle icon={Calendar} title="Agenda e consultas" subtitle="Próximas sessões, histórico e remarcação online." />
      <h3 className="text-xs tracking-[0.2em] uppercase text-sage mb-4">Próximas sessões</h3>
      <div className="space-y-3">
        {[
          ["Fisioterapia · Dra. Lima", "Quinta · 14 mai · 10h00"],
          ["Consulta médica · Dr. Costa", "Terça · 19 mai · 16h30"],
          ["Pilates clínico · Inst. Andrade", "Sexta · 22 mai · 09h00"],
        ].map(([t,w]) => (
          <div key={t} className="flex items-center justify-between p-5 border border-border bg-cream/50">
            <div>
              <h4 className="font-medium text-navy">{t}</h4>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5"><Clock className="w-3 h-3" />{w}</p>
            </div>
            <div className="flex gap-2">
              <button className="text-[10px] tracking-[0.2em] uppercase text-sage border border-sage/30 px-3 py-2 hover:bg-sage hover:text-white transition-colors">Remarcar</button>
              <button className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground border border-border px-3 py-2">Detalhes</button>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-xs tracking-[0.2em] uppercase text-sage mt-12 mb-4">Histórico</h3>
      <div className="space-y-2">
        {["02 mai — Fisioterapia (concluída)", "28 abr — Consulta médica (concluída)", "20 abr — Pilates (concluída)"].map(s => (
          <div key={s} className="flex items-center gap-3 p-3 text-sm text-muted-foreground border-b border-border"><CheckCircle2 className="w-4 h-4 text-sage" />{s}</div>
        ))}
      </div>
    </div>
  );
}

function Evolucao() {
  return (
    <div>
      <SectionTitle icon={TrendingUp} title="Evolução clínica" subtitle="Relatórios, progresso e comparativos antes/depois." />
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {[["Dor (EVA)", "8 → 2", "–75%"],["Mobilidade", "45° → 110°", "+144%"],["Força isométrica", "12kg → 28kg", "+133%"]].map(([m,v,d]) => (
          <div key={m} className="border border-border p-6 bg-cream/40">
            <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{m}</div>
            <div className="font-display text-3xl text-navy mt-2">{v}</div>
            <div className="text-sm text-sage font-medium mt-1">{d}</div>
          </div>
        ))}
      </div>
      <h3 className="text-xs tracking-[0.2em] uppercase text-sage mb-4">Relatórios do fisioterapeuta</h3>
      {["Relatório quinzenal — abril/2026", "Avaliação de admissão", "Relatório mensal — março/2026"].map(r => (
        <div key={r} className="flex items-center justify-between py-4 border-b border-border">
          <span className="text-sm">{r}</span>
          <button className="text-xs text-sage flex items-center gap-1.5"><Download className="w-3.5 h-3.5" />Baixar</button>
        </div>
      ))}
    </div>
  );
}

function Exercicios() {
  return (
    <div>
      <SectionTitle icon={Dumbbell} title="Plano de exercícios" subtitle="Prescrições atualizadas com vídeos demonstrativos e frequência recomendada." />
      <div className="grid md:grid-cols-2 gap-5">
        {["Mobilidade lombar", "Fortalecimento de glúteos", "Estabilidade de core", "Liberação miofascial"].map((e,i) => (
          <div key={e} className="border border-border overflow-hidden">
            <div className="aspect-video bg-navy relative flex items-center justify-center">
              <PlayCircle className="w-12 h-12 text-white/70" />
              <span className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase bg-sage/90 text-white px-2 py-1">{i % 2 === 0 ? "Diário" : "3x/semana"}</span>
            </div>
            <div className="p-5">
              <h4 className="font-medium text-navy">{e}</h4>
              <p className="text-xs text-muted-foreground mt-1">3 séries × 12 repetições · 30s descanso</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Comunicacao() {
  return (
    <div>
      <SectionTitle icon={MessageSquare} title="Comunicação direta" subtitle="Chat com a clínica, dúvidas pós-consulta e abertura de chamados." />
      <div className="border border-border h-[400px] flex flex-col">
        <div className="flex-1 p-6 space-y-4 overflow-auto bg-cream/40">
          <div className="bg-white p-4 max-w-md text-sm border border-border">Olá! Como você está se sentindo desde a última sessão?</div>
          <div className="bg-sage/15 p-4 max-w-md text-sm ml-auto">Estou melhor, mas senti um leve incômodo no exercício 02.</div>
          <div className="bg-white p-4 max-w-md text-sm border border-border">Entendi. Vou ajustar a carga para a próxima sessão. Obrigada por avisar.</div>
        </div>
        <div className="border-t border-border p-4 flex gap-3">
          <input placeholder="Escreva uma mensagem..." className="flex-1 bg-transparent outline-none text-sm" />
          <button className="text-xs tracking-[0.2em] uppercase text-sage">Enviar</button>
        </div>
      </div>
      <button className="mt-6 text-xs tracking-[0.2em] uppercase text-muted-foreground border border-border px-4 py-3">Abrir novo chamado</button>
    </div>
  );
}

function Financeiro() {
  return (
    <div>
      <SectionTitle icon={CreditCard} title="Financeiro" subtitle="Faturas, pagamentos e planos contratados." />
      <div className="border border-border p-6 bg-sage/5 mb-8 flex items-center justify-between">
        <div>
          <div className="text-xs text-muted-foreground">Plano atual</div>
          <div className="font-display text-2xl text-navy mt-1">Cuidado Integral · Mensal</div>
        </div>
        <button className="text-xs tracking-[0.2em] uppercase text-sage border border-sage/30 px-4 py-2.5">Gerenciar</button>
      </div>
      <h3 className="text-xs tracking-[0.2em] uppercase text-sage mb-4">Faturas recentes</h3>
      <table className="w-full text-sm">
        <thead><tr className="text-left text-xs text-muted-foreground border-b border-border"><th className="pb-3">Mês</th><th>Valor</th><th>Status</th><th className="text-right">Ação</th></tr></thead>
        <tbody>
          {[["Abril 2026","R$ 1.290,00","Paga"],["Março 2026","R$ 1.290,00","Paga"],["Maio 2026","R$ 1.290,00","Em aberto"]].map(([m,v,s]) => (
            <tr key={m} className="border-b border-border"><td className="py-4">{m}</td><td>{v}</td><td><span className={s === "Paga" ? "text-sage" : "text-gold"}>{s}</span></td><td className="text-right"><button className="text-xs text-sage">Ver</button></td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Documentos() {
  return (
    <div>
      <SectionTitle icon={FileText} title="Documentos" subtitle="Receitas, laudos e atestados sempre à mão." />
      <div className="grid md:grid-cols-2 gap-3">
        {[["Receita médica · Dr. Costa","02 mai 2026"],["Laudo de exames laboratoriais","28 abr 2026"],["Atestado · 3 dias","12 abr 2026"],["Prescrição fisioterapêutica","05 abr 2026"]].map(([t,d]) => (
          <div key={t} className="flex items-center justify-between p-5 border border-border hover:bg-cream/40 transition-colors">
            <div className="flex items-center gap-3"><FileText className="w-5 h-5 text-sage" /><div><div className="text-sm font-medium text-navy">{t}</div><div className="text-xs text-muted-foreground mt-0.5">{d}</div></div></div>
            <button className="text-xs text-sage flex items-center gap-1.5"><Download className="w-3.5 h-3.5" />PDF</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Notificacoes() {
  return (
    <div>
      <SectionTitle icon={Bell} title="Lembretes e notificações" subtitle="Tudo que você não pode perder." />
      <div className="space-y-3">
        {[
          [Calendar, "Próxima consulta: quinta 14 mai · 10h00", "Confirmar presença"],
          [Dumbbell, "Você tem 2 exercícios pendentes hoje", "Ver plano"],
          [AlertCircle, "Resultados de exames disponíveis", "Acessar"],
          [Bell, "Aviso da clínica: novo horário de atendimento aos sábados", "Ler mais"],
        ].map(([Icon, t, a], i) => {
          const I = Icon as any;
          return (
            <div key={i} className="flex items-center justify-between p-5 border border-border bg-cream/40">
              <div className="flex items-center gap-4"><I className="w-5 h-5 text-sage" /><span className="text-sm text-navy">{t as string}</span></div>
              <button className="text-[10px] tracking-[0.2em] uppercase text-sage">{a as string} →</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
