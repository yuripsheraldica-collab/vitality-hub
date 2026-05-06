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
  function downloadReport(name: string) {
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>${name}</title>
      <style>body{font-family:Georgia,serif;color:#1a2a3a;max-width:720px;margin:40px auto;padding:0 24px;line-height:1.6}
      h1{font-size:28px;border-bottom:2px solid #7a8c6f;padding-bottom:8px}
      h2{color:#7a8c6f;margin-top:32px;font-size:18px;text-transform:uppercase;letter-spacing:.1em}
      table{width:100%;border-collapse:collapse;margin:12px 0}
      th,td{border-bottom:1px solid #e5e1d8;padding:8px;text-align:left;font-size:14px}
      .meta{color:#7a8c6f;font-size:12px;letter-spacing:.15em;text-transform:uppercase}
      .footer{margin-top:48px;font-size:11px;color:#888;border-top:1px solid #ddd;padding-top:12px}</style>
    </head><body>
      <div class="meta">Instituto Evolução · Relatório clínico</div>
      <h1>${name}</h1>
      <p><strong>Paciente:</strong> João Silva &nbsp; · &nbsp; <strong>Profissional:</strong> Dra. Lima (CREFITO 12345-F)</p>
      <h2>Avaliação subjetiva</h2>
      <p>Paciente refere melhora progressiva da dor lombar, com escala EVA reduzida de 8 para 2. Relata maior facilidade nas atividades de vida diária, ausência de irradiação e sono mais reparador.</p>
      <h2>Medidas funcionais</h2>
      <table><tr><th>Medida</th><th>Inicial</th><th>Atual</th><th>Δ</th></tr>
        <tr><td>Dor (EVA 0–10)</td><td>8</td><td>2</td><td>−75%</td></tr>
        <tr><td>Mobilidade lombar (°)</td><td>45°</td><td>110°</td><td>+144%</td></tr>
        <tr><td>Força isométrica de glúteo (kg)</td><td>12</td><td>28</td><td>+133%</td></tr>
        <tr><td>Teste de equilíbrio unipodal (s)</td><td>8</td><td>32</td><td>+300%</td></tr>
      </table>
      <h2>Plano para o próximo ciclo</h2>
      <ul><li>Progressão de carga em agachamento e stiff (1 RIR).</li>
      <li>Manutenção da mobilidade diária (5 min · 3 exercícios).</li>
      <li>Reavaliação em 30 dias com novo teste isométrico.</li></ul>
      <h2>Conduta</h2>
      <p>Manter frequência de 2x/semana de fisioterapia + 3x/semana de treino na academia, com integração da equipe médica.</p>
      <div class="footer">Documento gerado automaticamente pelo Centro de Cuidados — Instituto Evolução · Limeira/SP</div>
    </body></html>`;
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name.replace(/[^\w\-]+/g, "_") + ".html";
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
  }
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
      <h3 className="text-xs tracking-[0.2em] uppercase text-sage mb-4">Relatórios padrão</h3>
      {[
        "Avaliação de admissão",
        "Relatório quinzenal — abril/2026",
        "Relatório mensal — março/2026",
        "Reavaliação trimestral",
        "Relatório de alta",
      ].map(r => (
        <div key={r} className="flex items-center justify-between py-4 border-b border-border">
          <span className="text-sm">{r}</span>
          <button onClick={() => downloadReport(r)} className="text-xs text-sage flex items-center gap-1.5 hover:text-navy transition-colors"><Download className="w-3.5 h-3.5" />Baixar</button>
        </div>
      ))}
      <p className="mt-4 text-xs text-muted-foreground">Os relatórios são gerados a partir de modelos padrão preenchidos pela equipe clínica. Para versões em PDF assinadas, fale com a recepção.</p>
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
    { from: "bot", text: "Oi! Eu sou a Raquel, do Instituto Evolução 💚 Posso te ajudar com dúvidas sobre exercícios, dor, frequência, alimentação e cuidados pós-consulta. O que você gostaria de saber?" },
  ]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  async function send(prefilled?: string) {
    const t = (prefilled ?? draft).trim();
    if (!t) return;
    setMessages(m => [...m, { from: "user", text: t }]);
    setDraft("");
    setTyping(true);
    const reply = await raquelReply(t);
    setTyping(false);
    setMessages(m => [...m, { from: "bot", text: reply }]);
  }
  return (
    <div>
      <SectionTitle icon={MessageSquare} title="Comunicação direta" subtitle="Chat com a clínica, dúvidas pós-consulta e abertura de chamados." />
      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        <div className="border border-border h-[460px] flex flex-col bg-white">
          <div className="border-b border-border px-5 py-3 flex items-center gap-3 bg-cream/40">
            <img src={raquelImg} alt="Raquel" className="w-10 h-10 rounded-full object-cover border border-sage/30" />
            <div>
              <div className="text-sm font-medium text-navy leading-tight">Raquel</div>
              <div className="text-[10px] text-muted-foreground">Atendimento Instituto Evolução</div>
            </div>
            <span className="ml-auto flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-sage"><span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" /> Online</span>
          </div>
          <div className="flex-1 p-6 space-y-3 overflow-auto bg-cream/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-2 ${m.from === "user" ? "justify-end" : ""}`}>
                {m.from === "bot" && <img src={raquelImg} alt="" className="w-7 h-7 rounded-full object-cover shrink-0 mt-1" />}
                <div className={`p-3 max-w-md text-sm whitespace-pre-wrap ${m.from === "bot" ? "bg-white border border-border" : "bg-sage/15"}`}>{m.text}</div>
              </div>
            ))}
            {typing && (
              <div className="flex gap-2"><img src={raquelImg} alt="" className="w-7 h-7 rounded-full object-cover" />
                <div className="p-3 bg-white border border-border text-sm text-muted-foreground italic">Raquel está digitando…</div>
              </div>
            )}
          </div>
          <div className="border-t border-border p-3 flex gap-2">
            <input
              value={draft}
              onChange={e => setDraft(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Pergunte sobre exercícios, dor, frequência…"
              className="flex-1 bg-transparent outline-none text-sm px-2"
            />
            <button onClick={() => send()} className="text-xs tracking-[0.2em] uppercase text-sage flex items-center gap-1.5"><Send className="w-3.5 h-3.5" />Enviar</button>
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
              {["Posso treinar com dor?","Quantas vezes por semana fazer o plano?","Como progredir a carga com segurança?","O que comer antes do treino?"].map(q => (
                <li key={q}><button onClick={() => send(q)} className="text-left hover:text-sage transition-colors">• {q}</button></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

async function raquelReply(q: string): Promise<string> {
  const t = q.toLowerCase();
  const kb: { match: RegExp; reply: string }[] = [
    { match: /(dor|doend|dói|incomod)/, reply: "Que bom que você falou comigo antes! 💚\n\nDor leve a moderada (até 3 na escala 0–10) durante o exercício é tolerável segundo as diretrizes do American College of Sports Medicine. Mas se a dor for aguda, irradiada ou persistir por mais de 24h, é sinal pra interromper.\n\nQuer que eu abra um chamado pra equipe te ligar?" },
    { match: /(freq|vez|por semana|quantas)/, reply: "Pelas recomendações da OMS, adultos saudáveis devem fazer:\n• 150 min/semana de atividade aeróbica moderada\n• 2x/semana de treino de força\n\nNo seu plano eu vejo mobilidade diária e fortalecimento 3x/semana — tá bem dentro do ideal! 👏" },
    { match: /(carga|progredir|evolu|peso)/, reply: "A progressão segura segue 3 critérios da literatura:\n1) Execução tecnicamente perfeita por 2 sessões seguidas\n2) Ausência de dor nas 48h após o treino\n3) Percepção de esforço entre 6–8 (escala 0–10)\n\nQuando bater os 3, aumente no máx. 5–10% da carga. Sem pressa! 😉" },
    { match: /(agend|consulta|hora)/, reply: "Você pode agendar ou remarcar direto na aba Agenda e Consultas aqui do portal. Para urgências, abra um chamado no WhatsApp ao lado!" },
    { match: /(comer|aliment|nutri|antes do treino)/, reply: "Pelas diretrizes da SBME (Sociedade Brasileira de Medicina do Esporte):\n• 1–2h antes: carboidrato de fácil digestão (banana, pão, batata-doce)\n• Pós-treino (até 1h): proteína + carboidrato (ex.: ovos + tapioca)\n• Hidratação: 500ml até 2h antes\n\nSe quiser plano individualizado, posso agendar com a nutri! 🥗" },
    { match: /(água|hidrat)/, reply: "A recomendação geral é 35ml/kg/dia. Para 70kg dá ~2,5L. Em dias de treino, some +500ml por hora de atividade. 💧" },
    { match: /(sono|dormir)/, reply: "Sono é parte do tratamento! A National Sleep Foundation recomenda 7–9h por noite para adultos. Sono ruim = mais dor, menos recuperação. Quer dicas de higiene do sono?" },
    { match: /(pilates|alonga|mobil)/, reply: "Mobilidade e Pilates clínico funcionam melhor antes do treino de força (5–10 min) e como sessão dedicada 2x/semana. ✨" },
    { match: /(estress|ansied|cansa)/, reply: "Movimento regular é hoje considerado tratamento de primeira linha para ansiedade leve a moderada (revisão JAMA 2023). Movimento + sono + alimentação fazem mais que muito remédio." },
  ];
  await new Promise(r => setTimeout(r, 700 + Math.random() * 600));
  for (const k of kb) if (k.match.test(t)) return k.reply;
  return "Boa pergunta! 🤔 Vou pesquisar nas nossas referências e te respondo melhor. Pra um plano personalizado, vale falar direto com a equipe — quer que eu abra um chamado no WhatsApp?";
}

function Planos() {
  const planos = [
    { nome: "Essencial", preco: "R$ 590", periodo: "/mês", destaque: false,
      desc: "Para quem quer começar a se cuidar com qualidade.",
      itens: ["1 consulta médica/mês", "4 sessões de fisio ou pilates", "Acesso ao Centro de Cuidados", "Suporte por WhatsApp"] },
    { nome: "Cuidado Integral", preco: "R$ 1.290", periodo: "/mês", destaque: true,
      desc: "O modelo mais escolhido — cuidado completo e contínuo.",
      itens: ["Consultas médicas multidisciplinares", "8 sessões fisio/pilates", "Academia + personal incluído", "Avaliação nutricional trimestral", "Relatórios mensais"] },
    { nome: "Performance Premium", preco: "R$ 2.190", periodo: "/mês", destaque: false,
      desc: "Atenção máxima, para alta performance e longevidade.",
      itens: ["Tudo do Cuidado Integral", "Acompanhamento individual semanal", "Avaliação biomecânica trimestral", "Hidroterapia inclusa", "Atendimento prioritário"] },
    { nome: "TotalPass / Gympass", preco: "Conforme convênio", periodo: "", destaque: false,
      desc: "12 sessões mensais via seu benefício corporativo.",
      itens: ["12 sessões fisio ou pilates", "Acompanhamento clínico básico", "Acesso ao app de exercícios"] },
  ];
  const total = 12;
  const usadas = 7;
  const restantes = total - usadas;
  return (
    <div>
      <SectionTitle icon={Sparkles} title="Planos" subtitle="Escolha o cuidado que cabe na sua rotina — todos com integração total da equipe." />
      <div className="border border-sage/30 bg-sage/5 p-6 mb-10">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-sage">Seu plano · TotalPass</div>
            <h4 className="mt-1 font-display text-2xl text-navy">Sessões do mês</h4>
            <p className="text-sm text-muted-foreground mt-1">Você tem direito a {total} sessões mensais. Usadas: <strong className="text-navy">{usadas}</strong> · Restantes: <strong className="text-sage">{restantes}</strong></p>
          </div>
          <div className="text-right">
            <div className="font-display text-4xl text-sage">{restantes}<span className="text-xl text-muted-foreground">/{total}</span></div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">disponíveis</div>
          </div>
        </div>
        <div className="mt-5 flex gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} className={`flex-1 h-2 ${i < usadas ? "bg-sage" : "bg-sage/15"}`} />
          ))}
        </div>
        <div className="mt-3 text-xs text-muted-foreground">Ciclo atual: 01 mai a 31 mai. Sessões zeradas a cada novo mês.</div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {planos.map(p => (
          <div key={p.nome} className={`border p-6 flex flex-col ${p.destaque ? "border-sage bg-sage/5 relative" : "border-border bg-white"}`}>
            {p.destaque && <span className="absolute -top-3 left-6 text-[9px] tracking-[0.25em] uppercase bg-sage text-white px-3 py-1">Mais escolhido</span>}
            <h3 className="font-display text-xl text-navy">{p.nome}</h3>
            <p className="text-xs text-muted-foreground mt-1 min-h-[36px]">{p.desc}</p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-3xl text-navy">{p.preco}</span>
              <span className="text-xs text-muted-foreground">{p.periodo}</span>
            </div>
            <ul className="mt-5 space-y-2 flex-1">
              {p.itens.map(i => (
                <li key={i} className="text-xs text-muted-foreground flex gap-2"><Check className="w-3.5 h-3.5 text-sage shrink-0 mt-0.5" /><span>{i}</span></li>
              ))}
            </ul>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className={`mt-6 text-[10px] tracking-[0.25em] uppercase text-center py-3 transition-colors ${p.destaque ? "bg-navy text-white hover:bg-sage" : "border border-sage text-sage hover:bg-sage hover:text-white"}`}>Quero esse</a>
          </div>
        ))}
      </div>
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
