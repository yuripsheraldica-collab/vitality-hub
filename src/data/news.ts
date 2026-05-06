export type NewsArticle = {
  img: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  full: string;
};

export function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const newsArticles: NewsArticle[] = [
  {
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    tag: "Instituto", date: "12 Mar 2026",
    title: "Instituto Evolução amplia estrutura de fisioterapia ortopédica",
    excerpt: "Novo espaço de avaliação funcional reforça atendimento individualizado.",
    full: `O Instituto Evolução inaugura uma nova ala dedicada exclusivamente à fisioterapia ortopédica e à avaliação funcional, ampliando em quase 40% a área destinada à reabilitação e ao acompanhamento de movimento.\n\nO ambiente foi projetado com equipamentos de última geração — plataforma de força, dinamômetro isocinético e câmeras de análise biomecânica — permitindo análises detalhadas do gesto esportivo, da marcha e da postura. Cada paciente passa por um protocolo de avaliação inicial que mapeia déficits de mobilidade, força e controle motor.\n\nA partir desse mapa, a equipe constrói um plano de tratamento individualizado, integrando médico, fisioterapeuta e profissional do movimento em torno de objetivos comuns. \"Nosso compromisso é tratar a pessoa, não o sintoma. A integração entre as áreas é o que torna o resultado consistente\", afirma a coordenação clínica do Instituto.\n\nA inauguração marca uma nova fase do projeto de expansão iniciado em 2024, que prevê também novos espaços para Pilates clínico e hidroterapia ainda em 2026.`,
  },
  {
    img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1400&q=80",
    tag: "Bem-estar", date: "28 Fev 2026",
    title: "Hidroterapia: como a piscina aquecida acelera reabilitação",
    excerpt: "Os benefícios comprovados do meio aquático em protocolos de recuperação.",
    full: `A hidroterapia é hoje uma das ferramentas mais estudadas dentro da reabilitação moderna. A flutuação reduz o impacto sobre articulações, enquanto a resistência da água permite o fortalecimento progressivo de forma segura, mesmo em pacientes com restrições importantes de carga.\n\nNo Instituto Evolução, a piscina aquecida é utilizada em protocolos pós-cirúrgicos (em especial joelho, quadril e coluna), no tratamento de dores crônicas, na reabilitação neurológica e em programas de condicionamento para idosos. A temperatura controlada também atua na redução do tônus muscular e na melhora da circulação.\n\nEstudos recentes mostram redução de até 40% no tempo de recuperação em comparação a abordagens exclusivamente em solo, especialmente em pós-operatórios ortopédicos. Mais do que velocidade, a hidroterapia oferece algo igualmente importante: aderência. O paciente sente menos dor, evolui com mais confiança e retorna às atividades com base mais sólida.`,
  },
  {
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=80",
    tag: "Saúde", date: "10 Fev 2026",
    title: "Por que treinar com acompanhamento médico muda tudo",
    excerpt: "A integração entre clínica e treino reduz risco de lesão e melhora resultados.",
    full: `Treinar sem orientação médica é como dirigir sem revisão: funciona, até parar de funcionar. A integração entre avaliação clínica e prescrição de exercícios permite identificar limitações, ajustar intensidade e prevenir lesões antes que aconteçam.\n\nNo Instituto Evolução, todo aluno da academia passa por triagem com a equipe médica antes de iniciar o treino. Exames complementares, histórico clínico e avaliação funcional formam a base do plano. A partir daí, o educador físico desenha a periodização junto com o fisioterapeuta — o que garante que o treino some saúde, não cobre dela.\n\nO modelo tem mostrado redução expressiva em afastamentos por dor, ganhos consistentes de performance e — talvez o mais importante — um senso de progresso real. Quem entende para onde está indo, treina com propósito.`,
  },
  {
    img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1400&q=80",
    tag: "Eventos", date: "20 Jan 2026",
    title: "Workshop aberto: longevidade e saúde funcional após os 40",
    excerpt: "Inscrições gratuitas para a comunidade de Limeira.",
    full: `O Instituto Evolução promove workshop gratuito sobre longevidade e saúde funcional, voltado a adultos acima dos 40 anos. O encontro reúne especialistas em medicina, nutrição e movimento para discutir estratégias práticas de prevenção, manutenção da força muscular e qualidade de vida.\n\nA programação inclui três blocos: o primeiro sobre composição corporal e sarcopenia; o segundo sobre nutrição funcional e estratégias para a vida real; e o terceiro sobre treinamento de força como ferramenta de longevidade. Ao final, os participantes recebem um plano inicial de movimento adaptado ao seu perfil.\n\nAs vagas são limitadas e as inscrições podem ser feitas pelo WhatsApp do Instituto. O evento integra a agenda de ações educativas que o Instituto realiza com a comunidade de Limeira, com nova edição prevista para o segundo semestre.`,
  },
  {
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=80",
    tag: "Nutrição", date: "05 Jan 2026",
    title: "Nutrição funcional: o que muda no atendimento clínico",
    excerpt: "Indo além da contagem de calorias, a abordagem funcional investiga a raiz do desequilíbrio.",
    full: `A nutrição funcional parte de um princípio simples: cada corpo responde de forma única aos alimentos. No Instituto Evolução, o atendimento nutricional combina anamnese aprofundada, exames complementares e construção de plano alimentar adaptado à rotina real do paciente.\n\nEm vez de listar proibições, a equipe trabalha com substituições inteligentes, planejamento de refeições e educação alimentar. O acompanhamento é contínuo, com ajustes finos ao longo do tempo, sustentando hábitos por anos — e não apenas por semanas.\n\nA integração com médico, fisioterapeuta e educador físico potencializa resultados: composição corporal, performance, sono e disposição passam a evoluir em conjunto. Comer bem deixa de ser um esforço pontual e passa a ser parte natural da rotina.`,
  },
  {
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80",
    tag: "Movimento", date: "18 Dez 2025",
    title: "Pilates clínico: indicações, benefícios e quem pode praticar",
    excerpt: "Da reabilitação ao condicionamento, o método se adapta a diferentes perfis.",
    full: `O Pilates clínico é um aliado poderoso na recuperação de lesões, no tratamento de dores crônicas e na manutenção da saúde funcional. No Instituto Evolução, as turmas são reduzidas (máximo 4 alunos) e conduzidas por instrutores certificados, com integração direta à equipe de fisioterapia quando necessário.\n\nO método é indicado a praticamente todas as idades — incluindo gestantes, idosos e atletas em recuperação. Trabalha força profunda, mobilidade articular, controle motor e respiração, com baixíssimo impacto. Para quem tem dor lombar, escoliose ou sequela pós-cirúrgica, o Pilates clínico costuma ser a transição ideal entre reabilitação e treinamento regular.\n\nA progressão é personalizada: a cada ciclo, a equipe revisa objetivos, ajusta carga e introduz novos estímulos. Resultado: ganho real de função, postura e qualidade de vida.`,
  },
];