import Layout from "@/components/site/Layout";
import { useState, useEffect } from "react";
import { CALENDLY_LINK, WHATSAPP_LINK } from "@/lib/contact";
import {
  Calendar, TrendingUp, Dumbbell, MessageSquare, CreditCard, FileText, Bell,
  Clock, CheckCircle2, PlayCircle, Download, AlertCircle, ArrowRight, Bot, Send,
  Upload, Search, Smartphone, Sparkles, Check
} from "lucide-react";
import raquelImg from "@/assets/raquel.jpg";

type TabId = "agenda" | "evolucao" | "exercicios" | "comunicacao" | "planos" | "financeiro" | "documentos" | "notificacoes";

const tabs: { id: TabId; label: string; icon: any }[] = [
  { id: "agenda", label: "Agenda e consultas", icon: Calendar },
  { id: "evolucao", label: "Evolução clínica", icon: TrendingUp },
  { id: "exercicios", label: "Plano de exercícios", icon: Dumbbell },
  { id: "comunicacao", label: "Comunicação", icon: MessageSquare },
  { id: "planos", label: "Planos", icon: Sparkles },
  { id: "financeiro", label: "Financeiro", icon: CreditCard },
  { id: "documentos", label: "Documentos", icon: FileText },
  { id: "notificacoes", label: "Notificações", icon: Bell },
];

export default function CentroDeCuidados() {
  const [tab, setTab] = useState<TabId>("agenda");
  return (
    <Layout>
      {/* Header */}
      <section className="bg-navy text-white pt-40 pb-20">
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
            {tab === "planos" && <Planos />}
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
      <a href={CALENDLY_LINK} target="_blank" rel="noopener" className="block bg-navy text-white p-6 mb-8 hover:bg-sage transition-colors">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-sage-light">Agendamento online</div>
            <h3 className="font-display text-2xl mt-1">Agendar nova consulta</h3>
            <p className="text-sm text-white/65 mt-1">Escolha a especialidade e o melhor horário em poucos cliques.</p>
          </div>
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase border border-white/30 px-5 py-3">Agendar agora <ArrowRight className="w-3.5 h-3.5" /></span>
        </div>
      </a>
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
              <a href={CALENDLY_LINK} target="_blank" rel="noopener" className="text-[10px] tracking-[0.2em] uppercase text-sage border border-sage/30 px-3 py-2 hover:bg-sage hover:text-white transition-colors">Remarcar</a>
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
  const exercicios = [
    { nome: "Mobilidade lombar", freq: "Diário", series: "3 séries × 12 repetições · 30s descanso", youtubeId: "" },
    { nome: "Fortalecimento de glúteos", freq: "3x/semana", series: "4 séries × 10 repetições · 45s descanso", youtubeId: "" },
    { nome: "Estabilidade de core", freq: "Diário", series: "3 séries × 30s isometria", youtubeId: "" },
    { nome: "Liberação miofascial", freq: "Diário", series: "2 séries × 60s por região", youtubeId: "" },
  ];
  return (
    <div>
      <SectionTitle icon={Dumbbell} title="Plano de exercícios" subtitle="Prescrições atualizadas com vídeos demonstrativos e frequência recomendada." />
      <div className="grid md:grid-cols-2 gap-5">
        {exercicios.map(e => (
          <div key={e.nome} className="border border-border overflow-hidden bg-white">
            <div className="aspect-video bg-navy relative">
              {e.youtubeId ? (
                <iframe src={`https://www.youtube.com/embed/${e.youtubeId}`} title={e.nome} className="w-full h-full" allowFullScreen />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-white/60 gap-2">
                  <PlayCircle className="w-12 h-12" strokeWidth={1} />
                  <span className="text-[10px] tracking-[0.25em] uppercase">Vídeo em breve</span>
                </div>
              )}
              <span className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase bg-sage/90 text-white px-2 py-1">{e.freq}</span>
            </div>
            <div className="p-5">
              <h4 className="font-medium text-navy">{e.nome}</h4>
              <p className="text-xs text-muted-foreground mt-1">{e.series}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-foreground">Os vídeos demonstrativos são gravados pela equipe técnica do Instituto e atualizados periodicamente.</p>
    </div>
  );
}

function Comunicacao() {
  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([
    { from: "bot", text: "Olá! Sou o assistente do Instituto Evolução. Posso te ajudar com dúvidas sobre exercícios, frequência, dor pós-treino e cuidados gerais. Em que posso ajudar?" },
  ]);
  const [draft, setDraft] = useState("");
  function send() {
    const t = draft.trim();
    if (!t) return;
    const reply = botReply(t);
    setMessages(m => [...m, { from: "user", text: t }, { from: "bot", text: reply }]);
    setDraft("");
  }
  return (
    <div>
      <SectionTitle icon={MessageSquare} title="Comunicação direta" subtitle="Chat com a clínica, dúvidas pós-consulta e abertura de chamados." />
      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        <div className="border border-border h-[460px] flex flex-col bg-white">
          <div className="border-b border-border px-5 py-3 flex items-center gap-2 bg-cream/40">
            <Bot className="w-4 h-4 text-sage" />
            <span className="text-sm font-medium text-navy">Assistente IEV</span>
            <span className="ml-auto text-[10px] tracking-[0.2em] uppercase text-sage">Online</span>
          </div>
          <div className="flex-1 p-6 space-y-3 overflow-auto bg-cream/30">
            {messages.map((m, i) => (
              <div key={i} className={`p-3 max-w-md text-sm ${m.from === "bot" ? "bg-white border border-border" : "bg-sage/15 ml-auto"}`}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="border-t border-border p-3 flex gap-2">
            <input
              value={draft}
              onChange={e => setDraft(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Pergunte sobre exercícios, dor, frequência…"
              className="flex-1 bg-transparent outline-none text-sm px-2"
            />
            <button onClick={send} className="text-xs tracking-[0.2em] uppercase text-sage flex items-center gap-1.5"><Send className="w-3.5 h-3.5" />Enviar</button>
          </div>
        </div>
        <div className="space-y-4">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="block p-5 border border-border hover:border-sage transition-colors bg-white">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-sage"><MessageSquare className="w-3.5 h-3.5" /> Abrir chamado</div>
            <h4 className="mt-2 font-medium text-navy">Falar com humano da clínica</h4>
            <p className="mt-1 text-xs text-muted-foreground">Atendimento direto via WhatsApp com a equipe do Instituto.</p>
            <span className="mt-3 inline-block text-xs text-sage">+55 (19) 99161-2513 →</span>
          </a>
          <div className="p-5 border border-border bg-cream/40">
            <div className="text-[10px] tracking-[0.25em] uppercase text-sage">Sugestões de perguntas</div>
            <ul className="mt-3 space-y-2 text-sm text-navy/80">
              <li>• Posso treinar com dor?</li>
              <li>• Quantas vezes por semana fazer o plano?</li>
              <li>• Como progredir a carga com segurança?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function botReply(q: string) {
  const t = q.toLowerCase();
  if (t.includes("dor")) return "Dor leve durante o exercício pode ser esperada. Se for dor aguda, persistente ou irradiada, interrompa e abra um chamado com a equipe pelo WhatsApp.";
  if (t.includes("freq") || t.includes("vez")) return "A frequência recomendada está descrita ao lado de cada exercício no seu plano. Em geral, exercícios de mobilidade são diários e os de força 3x/semana.";
  if (t.includes("carga") || t.includes("progredir") || t.includes("evolu")) return "A progressão segura segue 3 critérios: execução perfeita, ausência de dor por 48h e percepção de esforço entre 6 e 8.";
  if (t.includes("agend") || t.includes("consulta")) return "Você pode agendar ou remarcar diretamente na aba Agenda e Consultas. Para urgências, fale no WhatsApp da clínica.";
  return "Anotado! Para uma resposta personalizada, abra um chamado com a equipe pelo WhatsApp — eles respondem em até 2 horas úteis.";
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
  const [cpf, setCpf] = useState("");
  const docs = [
    { tipo: "Receita médica · Dr. Costa", data: "02 mai 2026", cpf: "123.456.789-00" },
    { tipo: "Laudo de exames laboratoriais", data: "28 abr 2026", cpf: "123.456.789-00" },
    { tipo: "Atestado · 3 dias", data: "12 abr 2026", cpf: "987.654.321-00" },
    { tipo: "Prescrição fisioterapêutica", data: "05 abr 2026", cpf: "123.456.789-00" },
  ];
  const filtered = cpf ? docs.filter(d => d.cpf.replace(/\D/g, "").includes(cpf.replace(/\D/g, ""))) : docs;
  return (
    <div>
      <SectionTitle icon={FileText} title="Documentos" subtitle="Receitas, laudos e atestados sempre à mão." />

      {/* Painel do médico — upload por CPF */}
      <div className="border border-sage/30 bg-sage/5 p-6 mb-8">
        <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-sage mb-3"><Upload className="w-3.5 h-3.5" /> Painel do médico</div>
        <h4 className="font-display text-xl text-navy">Enviar documento ao paciente</h4>
        <p className="text-sm text-muted-foreground mt-1">Faça upload de receitas, laudos ou atestados. O documento aparece automaticamente para o paciente cujo CPF for informado.</p>
        <form className="mt-5 grid md:grid-cols-[1fr_1fr_auto] gap-3" onSubmit={e => { e.preventDefault(); alert("Upload de documento — requer Lovable Cloud para armazenamento seguro."); }}>
          <input placeholder="CPF do paciente" className="border border-border bg-white px-4 py-3 text-sm outline-none focus:border-sage" />
          <input type="file" accept="application/pdf,image/*" className="border border-border bg-white px-4 py-2.5 text-sm" />
          <button className="bg-navy text-white text-[11px] tracking-[0.2em] uppercase px-5 py-3 hover:bg-sage transition-colors">Enviar</button>
        </form>
        <p className="text-xs text-muted-foreground mt-3">Para ativar o armazenamento real e o filtro automático por CPF, é necessário ligar o backend (Lovable Cloud).</p>
      </div>

      {/* Filtro do paciente */}
      <div className="flex items-center gap-3 max-w-md bg-white border border-border px-4 py-3 mb-5">
        <Search className="w-4 h-4 text-sage" />
        <input value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Filtrar por CPF…" className="flex-1 bg-transparent outline-none text-sm" />
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {filtered.map(d => (
          <div key={d.tipo + d.data} className="flex items-center justify-between p-5 border border-border hover:bg-cream/40 transition-colors">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-sage" />
              <div>
                <div className="text-sm font-medium text-navy">{d.tipo}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{d.data} · CPF {d.cpf}</div>
              </div>
            </div>
            <button className="text-xs text-sage flex items-center gap-1.5"><Download className="w-3.5 h-3.5" />PDF</button>
          </div>
        ))}
        {!filtered.length && <div className="col-span-2 text-sm text-muted-foreground p-8 text-center border border-dashed border-border">Nenhum documento para o CPF informado.</div>}
      </div>
    </div>
  );
}

function Notificacoes() {
  const [pushEnabled, setPushEnabled] = useState(true);
  return (
    <div>
      <SectionTitle icon={Bell} title="Lembretes e notificações" subtitle="Tudo que você não pode perder." />

      <div className="border border-sage/30 bg-sage/5 p-5 mb-6 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <Smartphone className="w-5 h-5 text-sage" />
          <div>
            <div className="text-sm font-medium text-navy">Notificações push (mobile) — ativas</div>
            <div className="text-xs text-muted-foreground">Você receberá lembretes de consultas, exercícios e avisos diretamente no seu celular.</div>
          </div>
        </div>
        <button
          onClick={() => setPushEnabled(p => !p)}
          className={`text-[10px] tracking-[0.25em] uppercase px-4 py-2.5 transition-colors ${pushEnabled ? "bg-sage text-white" : "border border-sage text-sage"}`}
        >
          {pushEnabled ? "Ativadas" : "Ativar"}
        </button>
      </div>

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
