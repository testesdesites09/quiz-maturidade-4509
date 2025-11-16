// Dados completos do quiz com 40 perguntas divididas em 5 áreas

export interface Question {
  id: number;
  area: 'emocional' | 'social' | 'profissional' | 'decisao' | 'autoconsciencia';
  question: string;
  explanation: string;
  options: {
    text: string;
    value: number;
  }[];
}

export const QUIZ_AREAS = {
  emocional: 'Maturidade Emocional',
  social: 'Maturidade Social',
  profissional: 'Maturidade Profissional',
  decisao: 'Tomada de Decisão',
  autoconsciencia: 'Autoconsciência'
};

export const questions: Question[] = [
  // MATURIDADE EMOCIONAL (8 perguntas)
  {
    id: 1,
    area: 'emocional',
    question: 'Como você reage quando recebe uma crítica construtiva?',
    explanation: 'A capacidade de receber feedback sem se defender é um indicador forte de maturidade emocional. Pessoas maduras veem críticas como oportunidades de crescimento.',
    options: [
      { text: 'Fico na defensiva e me sinto atacado', value: 1 },
      { text: 'Aceito, mas fico incomodado por dias', value: 2 },
      { text: 'Ouço com atenção e reflito sobre', value: 3 },
      { text: 'Agradeço e busco melhorar imediatamente', value: 4 }
    ]
  },
  {
    id: 2,
    area: 'emocional',
    question: 'Quando algo não sai como planejado, qual é sua reação?',
    explanation: 'A resiliência emocional é medida pela forma como lidamos com frustrações. Maturidade significa adaptar-se sem perder o equilíbrio.',
    options: [
      { text: 'Desisto facilmente e fico frustrado', value: 1 },
      { text: 'Reclamo bastante antes de seguir em frente', value: 2 },
      { text: 'Aceito e busco alternativas', value: 3 },
      { text: 'Vejo como aprendizado e me adapto rapidamente', value: 4 }
    ]
  },
  {
    id: 3,
    area: 'emocional',
    question: 'Como você lida com suas emoções negativas (raiva, tristeza, frustração)?',
    explanation: 'Inteligência emocional envolve reconhecer, nomear e processar emoções de forma saudável, sem reprimi-las ou explodir.',
    options: [
      { text: 'Guardo para mim e finjo que está tudo bem', value: 1 },
      { text: 'Explodo e depois me arrependo', value: 2 },
      { text: 'Tento entender o que estou sentindo', value: 3 },
      { text: 'Reconheço, aceito e expresso de forma saudável', value: 4 }
    ]
  },
  {
    id: 4,
    area: 'emocional',
    question: 'Você consegue pedir desculpas quando erra?',
    explanation: 'Admitir erros e pedir desculpas genuinamente demonstra humildade e responsabilidade emocional, pilares da maturidade.',
    options: [
      { text: 'Raramente, acho difícil admitir erros', value: 1 },
      { text: 'Às vezes, mas com dificuldade', value: 2 },
      { text: 'Sim, quando percebo que errei', value: 3 },
      { text: 'Sempre, de forma sincera e sem justificativas', value: 4 }
    ]
  },
  {
    id: 5,
    area: 'emocional',
    question: 'Como você reage quando alguém próximo conquista algo que você também deseja?',
    explanation: 'A capacidade de celebrar o sucesso alheio sem inveja revela maturidade emocional e segurança pessoal.',
    options: [
      { text: 'Sinto inveja e fico incomodado', value: 1 },
      { text: 'Parabenizo, mas sinto um desconforto interno', value: 2 },
      { text: 'Fico feliz, mas comparo com minha situação', value: 3 },
      { text: 'Celebro genuinamente e me inspiro', value: 4 }
    ]
  },
  {
    id: 6,
    area: 'emocional',
    question: 'Você consegue manter a calma em situações de alta pressão?',
    explanation: 'Autorregulação emocional sob estresse é um indicador de maturidade. Pessoas maduras mantêm clareza mental mesmo em crises.',
    options: [
      { text: 'Perco o controle facilmente', value: 1 },
      { text: 'Fico nervoso, mas tento disfarçar', value: 2 },
      { text: 'Mantenho a calma na maioria das vezes', value: 3 },
      { text: 'Permaneço centrado e penso com clareza', value: 4 }
    ]
  },
  {
    id: 7,
    area: 'emocional',
    question: 'Como você lida com rejeição (pessoal ou profissional)?',
    explanation: 'A forma como processamos rejeição revela nossa resiliência emocional e capacidade de separar eventos de nossa identidade.',
    options: [
      { text: 'Levo para o pessoal e me sinto inferior', value: 1 },
      { text: 'Fico abalado por semanas', value: 2 },
      { text: 'Aceito, mas demoro a me recuperar', value: 3 },
      { text: 'Entendo que faz parte e sigo em frente', value: 4 }
    ]
  },
  {
    id: 8,
    area: 'emocional',
    question: 'Você consegue expressar vulnerabilidade quando necessário?',
    explanation: 'Maturidade emocional inclui a coragem de ser vulnerável e pedir ajuda, reconhecendo que isso é força, não fraqueza.',
    options: [
      { text: 'Nunca, vejo como fraqueza', value: 1 },
      { text: 'Raramente, só em último caso', value: 2 },
      { text: 'Às vezes, com pessoas muito próximas', value: 3 },
      { text: 'Sim, quando necessário e apropriado', value: 4 }
    ]
  },

  // MATURIDADE SOCIAL (8 perguntas)
  {
    id: 9,
    area: 'social',
    question: 'Como você se comporta em conversas em grupo?',
    explanation: 'Habilidades sociais maduras incluem saber ouvir, dar espaço aos outros e contribuir de forma equilibrada.',
    options: [
      { text: 'Domino a conversa ou fico totalmente quieto', value: 1 },
      { text: 'Falo mais do que ouço', value: 2 },
      { text: 'Tento equilibrar fala e escuta', value: 3 },
      { text: 'Ouço ativamente e contribuo no momento certo', value: 4 }
    ]
  },
  {
    id: 10,
    area: 'social',
    question: 'Você consegue manter relacionamentos de longo prazo?',
    explanation: 'Maturidade social se reflete na capacidade de cultivar e manter vínculos profundos ao longo do tempo.',
    options: [
      { text: 'Tenho dificuldade, relacionamentos não duram', value: 1 },
      { text: 'Alguns duram, mas com altos e baixos', value: 2 },
      { text: 'Mantenho vários relacionamentos estáveis', value: 3 },
      { text: 'Cultivo amizades profundas e duradouras', value: 4 }
    ]
  },
  {
    id: 11,
    area: 'social',
    question: 'Como você reage quando alguém tem uma opinião diferente da sua?',
    explanation: 'Respeitar divergências sem se sentir ameaçado demonstra maturidade social e abertura mental.',
    options: [
      { text: 'Tento convencer que estou certo', value: 1 },
      { text: 'Fico incomodado e evito o assunto', value: 2 },
      { text: 'Ouço, mas mantenho minha posição', value: 3 },
      { text: 'Valorizo a diversidade de perspectivas', value: 4 }
    ]
  },
  {
    id: 12,
    area: 'social',
    question: 'Você consegue estabelecer limites saudáveis com outras pessoas?',
    explanation: 'Saber dizer não e proteger seu tempo e energia é essencial para relacionamentos maduros e saudáveis.',
    options: [
      { text: 'Não consigo, sempre cedo às demandas', value: 1 },
      { text: 'Tenho dificuldade e me sinto culpado', value: 2 },
      { text: 'Consigo na maioria das vezes', value: 3 },
      { text: 'Estabeleço limites claros com respeito', value: 4 }
    ]
  },
  {
    id: 13,
    area: 'social',
    question: 'Como você lida com conflitos interpessoais?',
    explanation: 'Maturidade social envolve resolver conflitos de forma construtiva, buscando entendimento mútuo.',
    options: [
      { text: 'Evito a todo custo ou explodo', value: 1 },
      { text: 'Fico ressentido, mas não falo', value: 2 },
      { text: 'Tento resolver, mas com dificuldade', value: 3 },
      { text: 'Abordo diretamente com empatia e clareza', value: 4 }
    ]
  },
  {
    id: 14,
    area: 'social',
    question: 'Você demonstra empatia genuína pelos outros?',
    explanation: 'Empatia verdadeira significa colocar-se no lugar do outro sem julgamento, uma marca de maturidade social.',
    options: [
      { text: 'Tenho dificuldade em entender sentimentos alheios', value: 1 },
      { text: 'Tento, mas acabo julgando', value: 2 },
      { text: 'Geralmente consigo me colocar no lugar do outro', value: 3 },
      { text: 'Pratico empatia ativa e sem julgamentos', value: 4 }
    ]
  },
  {
    id: 15,
    area: 'social',
    question: 'Como você se comporta em ambientes sociais novos?',
    explanation: 'Adaptabilidade social e confiança em novos contextos indicam maturidade e segurança pessoal.',
    options: [
      { text: 'Fico extremamente desconfortável e evito', value: 1 },
      { text: 'Sinto ansiedade, mas participo minimamente', value: 2 },
      { text: 'Me adapto com algum esforço', value: 3 },
      { text: 'Me sinto confortável e me conecto naturalmente', value: 4 }
    ]
  },
  {
    id: 16,
    area: 'social',
    question: 'Você consegue celebrar conquistas alheias sem fazer sobre você?',
    explanation: 'Dar espaço genuíno para o brilho dos outros sem competir ou redirecionar atenção é sinal de maturidade social.',
    options: [
      { text: 'Sempre trago a conversa para minhas conquistas', value: 1 },
      { text: 'Parabenizo, mas menciono algo meu também', value: 2 },
      { text: 'Celebro, mas às vezes comparo', value: 3 },
      { text: 'Celebro plenamente sem fazer sobre mim', value: 4 }
    ]
  },

  // MATURIDADE PROFISSIONAL (8 perguntas)
  {
    id: 17,
    area: 'profissional',
    question: 'Como você lida com prazos e compromissos profissionais?',
    explanation: 'Responsabilidade e gestão de tempo são pilares da maturidade profissional.',
    options: [
      { text: 'Frequentemente atraso ou não cumpro', value: 1 },
      { text: 'Cumpro, mas sempre no limite', value: 2 },
      { text: 'Geralmente cumpro com antecedência', value: 3 },
      { text: 'Sempre entrego antes e com qualidade', value: 4 }
    ]
  },
  {
    id: 18,
    area: 'profissional',
    question: 'Você assume responsabilidade por seus erros no trabalho?',
    explanation: 'Accountability profissional significa assumir erros sem culpar outros ou circunstâncias.',
    options: [
      { text: 'Culpo outros ou circunstâncias', value: 1 },
      { text: 'Admito com relutância', value: 2 },
      { text: 'Assumo e busco corrigir', value: 3 },
      { text: 'Assumo proativamente e apresento soluções', value: 4 }
    ]
  },
  {
    id: 19,
    area: 'profissional',
    question: 'Como você reage a mudanças no ambiente de trabalho?',
    explanation: 'Adaptabilidade profissional é crucial em um mundo em constante transformação.',
    options: [
      { text: 'Resisto e reclamo das mudanças', value: 1 },
      { text: 'Aceito com dificuldade', value: 2 },
      { text: 'Me adapto gradualmente', value: 3 },
      { text: 'Abraço mudanças como oportunidades', value: 4 }
    ]
  },
  {
    id: 20,
    area: 'profissional',
    question: 'Você busca desenvolvimento contínuo na sua área?',
    explanation: 'Profissionais maduros entendem que aprendizado é contínuo e investem em seu crescimento.',
    options: [
      { text: 'Raramente busco me atualizar', value: 1 },
      { text: 'Só quando obrigado', value: 2 },
      { text: 'Busco periodicamente', value: 3 },
      { text: 'Invisto constantemente em aprendizado', value: 4 }
    ]
  },
  {
    id: 21,
    area: 'profissional',
    question: 'Como você lida com feedback negativo no trabalho?',
    explanation: 'Receber críticas profissionais construtivamente é essencial para crescimento na carreira.',
    options: [
      { text: 'Levo para o pessoal e fico ressentido', value: 1 },
      { text: 'Aceito, mas fico desmotivado', value: 2 },
      { text: 'Ouço e tento melhorar', value: 3 },
      { text: 'Agradeço e implemento melhorias rapidamente', value: 4 }
    ]
  },
  {
    id: 22,
    area: 'profissional',
    question: 'Você colabora bem em equipe?',
    explanation: 'Trabalho em equipe efetivo requer maturidade para compartilhar créditos e responsabilidades.',
    options: [
      { text: 'Prefiro trabalhar sozinho sempre', value: 1 },
      { text: 'Colaboro, mas com dificuldades', value: 2 },
      { text: 'Trabalho bem em equipe na maioria das vezes', value: 3 },
      { text: 'Colaboro ativamente e valorizo contribuições', value: 4 }
    ]
  },
  {
    id: 23,
    area: 'profissional',
    question: 'Como você gerencia seu equilíbrio entre vida pessoal e profissional?',
    explanation: 'Maturidade profissional inclui saber estabelecer limites saudáveis e priorizar bem-estar.',
    options: [
      { text: 'Trabalho domina completamente minha vida', value: 1 },
      { text: 'Tenho dificuldade em desconectar', value: 2 },
      { text: 'Busco equilíbrio, mas nem sempre consigo', value: 3 },
      { text: 'Mantenho limites claros e saudáveis', value: 4 }
    ]
  },
  {
    id: 24,
    area: 'profissional',
    question: 'Você toma iniciativa ou espera ser direcionado?',
    explanation: 'Proatividade e autonomia são características de profissionais maduros e confiáveis.',
    options: [
      { text: 'Sempre espero instruções detalhadas', value: 1 },
      { text: 'Tomo iniciativa ocasionalmente', value: 2 },
      { text: 'Geralmente sou proativo', value: 3 },
      { text: 'Identifico oportunidades e ajo autonomamente', value: 4 }
    ]
  },

  // TOMADA DE DECISÃO (8 perguntas)
  {
    id: 25,
    area: 'decisao',
    question: 'Como você toma decisões importantes?',
    explanation: 'Maturidade decisória envolve equilibrar análise racional com intuição, sem procrastinar.',
    options: [
      { text: 'Evito decidir ou decido impulsivamente', value: 1 },
      { text: 'Demoro muito e fico ansioso', value: 2 },
      { text: 'Analiso e decido em tempo razoável', value: 3 },
      { text: 'Avalio com clareza e decido com confiança', value: 4 }
    ]
  },
  {
    id: 26,
    area: 'decisao',
    question: 'Você consegue tomar decisões sob pressão?',
    explanation: 'Clareza mental sob pressão é um indicador forte de maturidade decisória.',
    options: [
      { text: 'Congelo ou tomo decisões ruins', value: 1 },
      { text: 'Fico muito ansioso e inseguro', value: 2 },
      { text: 'Consigo decidir, mas com estresse', value: 3 },
      { text: 'Mantenho clareza e decido efetivamente', value: 4 }
    ]
  },
  {
    id: 27,
    area: 'decisao',
    question: 'Como você lida com as consequências de suas decisões?',
    explanation: 'Assumir responsabilidade pelos resultados, bons ou ruins, é marca de maturidade.',
    options: [
      { text: 'Culpo outros ou circunstâncias', value: 1 },
      { text: 'Me arrependo constantemente', value: 2 },
      { text: 'Aceito e aprendo com erros', value: 3 },
      { text: 'Assumo totalmente e ajusto quando necessário', value: 4 }
    ]
  },
  {
    id: 28,
    area: 'decisao',
    question: 'Você busca opiniões antes de decidir?',
    explanation: 'Maturidade inclui saber quando buscar conselho sem depender excessivamente de validação externa.',
    options: [
      { text: 'Nunca consulto ninguém', value: 1 },
      { text: 'Dependo muito da opinião dos outros', value: 2 },
      { text: 'Consulto, mas decido sozinho', value: 3 },
      { text: 'Busco perspectivas e decido com autonomia', value: 4 }
    ]
  },
  {
    id: 29,
    area: 'decisao',
    question: 'Como você lida com decisões que não deram certo?',
    explanation: 'Resiliência decisória envolve aprender com erros sem se paralisar ou se culpar excessivamente.',
    options: [
      { text: 'Fico paralisado e com medo de decidir novamente', value: 1 },
      { text: 'Me culpo excessivamente', value: 2 },
      { text: 'Reflito e tento melhorar', value: 3 },
      { text: 'Extraio aprendizados e sigo em frente', value: 4 }
    ]
  },
  {
    id: 30,
    area: 'decisao',
    question: 'Você consegue priorizar entre múltiplas opções?',
    explanation: 'Clareza de valores e prioridades é essencial para tomar decisões alinhadas com objetivos.',
    options: [
      { text: 'Fico perdido entre as opções', value: 1 },
      { text: 'Tenho muita dificuldade em escolher', value: 2 },
      { text: 'Consigo priorizar com algum esforço', value: 3 },
      { text: 'Identifico prioridades claramente', value: 4 }
    ]
  },
  {
    id: 31,
    area: 'decisao',
    question: 'Você revisa decisões passadas constantemente?',
    explanation: 'Maturidade decisória inclui confiar em suas escolhas sem ruminar excessivamente sobre o passado.',
    options: [
      { text: 'Sempre fico remoendo decisões passadas', value: 1 },
      { text: 'Frequentemente questiono minhas escolhas', value: 2 },
      { text: 'Às vezes reflito, mas sigo em frente', value: 3 },
      { text: 'Confio em minhas decisões e aprendo quando necessário', value: 4 }
    ]
  },
  {
    id: 32,
    area: 'decisao',
    question: 'Como você equilibra razão e emoção ao decidir?',
    explanation: 'Decisões maduras integram análise lógica com inteligência emocional e intuição.',
    options: [
      { text: 'Decido apenas pela emoção ou apenas pela razão', value: 1 },
      { text: 'Tenho dificuldade em equilibrar', value: 2 },
      { text: 'Busco equilibrar, mas nem sempre consigo', value: 3 },
      { text: 'Integro razão, emoção e intuição harmoniosamente', value: 4 }
    ]
  },

  // AUTOCONSCIÊNCIA (8 perguntas)
  {
    id: 33,
    area: 'autoconsciencia',
    question: 'Você conhece seus pontos fortes e fracos?',
    explanation: 'Autoconhecimento profundo é a base da maturidade. Conhecer limitações e talentos permite crescimento direcionado.',
    options: [
      { text: 'Não tenho clareza sobre mim', value: 1 },
      { text: 'Conheço superficialmente', value: 2 },
      { text: 'Tenho boa noção', value: 3 },
      { text: 'Conheço profundamente e trabalho neles', value: 4 }
    ]
  },
  {
    id: 34,
    area: 'autoconsciencia',
    question: 'Você reflete regularmente sobre suas ações e comportamentos?',
    explanation: 'Autorreflexão regular é essencial para crescimento contínuo e desenvolvimento de maturidade.',
    options: [
      { text: 'Raramente paro para refletir', value: 1 },
      { text: 'Só quando algo dá errado', value: 2 },
      { text: 'Reflito periodicamente', value: 3 },
      { text: 'Pratico autorreflexão constante e estruturada', value: 4 }
    ]
  },
  {
    id: 35,
    area: 'autoconsciencia',
    question: 'Você reconhece seus padrões de comportamento?',
    explanation: 'Identificar padrões repetitivos permite mudanças conscientes e crescimento pessoal.',
    options: [
      { text: 'Não percebo meus padrões', value: 1 },
      { text: 'Percebo, mas não consigo mudar', value: 2 },
      { text: 'Reconheço e trabalho para mudar', value: 3 },
      { text: 'Identifico padrões e os transformo conscientemente', value: 4 }
    ]
  },
  {
    id: 36,
    area: 'autoconsciencia',
    question: 'Você entende o que te motiva e te faz feliz?',
    explanation: 'Clareza sobre valores e motivações intrínsecas é fundamental para uma vida alinhada e madura.',
    options: [
      { text: 'Não sei o que realmente me motiva', value: 1 },
      { text: 'Tenho uma ideia vaga', value: 2 },
      { text: 'Conheço minhas principais motivações', value: 3 },
      { text: 'Tenho clareza profunda sobre meus valores e propósito', value: 4 }
    ]
  },
  {
    id: 37,
    area: 'autoconsciencia',
    question: 'Você aceita feedback sobre seu comportamento?',
    explanation: 'Abertura para feedback externo complementa autoconhecimento e acelera crescimento pessoal.',
    options: [
      { text: 'Rejeito ou ignoro feedback', value: 1 },
      { text: 'Aceito, mas fico na defensiva', value: 2 },
      { text: 'Ouço e considero seriamente', value: 3 },
      { text: 'Busco ativamente e integro feedback', value: 4 }
    ]
  },
  {
    id: 38,
    area: 'autoconsciencia',
    question: 'Você tem clareza sobre seus valores e princípios?',
    explanation: 'Valores claros guiam decisões e comportamentos, sendo essenciais para maturidade e integridade.',
    options: [
      { text: 'Não sei quais são meus valores', value: 1 },
      { text: 'Tenho uma noção básica', value: 2 },
      { text: 'Conheço meus principais valores', value: 3 },
      { text: 'Vivo conscientemente alinhado aos meus valores', value: 4 }
    ]
  },
  {
    id: 39,
    area: 'autoconsciencia',
    question: 'Você reconhece como suas emoções afetam seu comportamento?',
    explanation: 'Consciência emocional permite gerenciar reações e escolher respostas mais maduras.',
    options: [
      { text: 'Não percebo a conexão', value: 1 },
      { text: 'Percebo depois que já reagi', value: 2 },
      { text: 'Geralmente reconheço no momento', value: 3 },
      { text: 'Tenho plena consciência e escolho minhas respostas', value: 4 }
    ]
  },
  {
    id: 40,
    area: 'autoconsciencia',
    question: 'Você busca ativamente seu desenvolvimento pessoal?',
    explanation: 'Compromisso com crescimento contínuo é a marca de pessoas maduras que assumem responsabilidade por sua evolução.',
    options: [
      { text: 'Não invisto em meu desenvolvimento', value: 1 },
      { text: 'Penso nisso, mas não ajo', value: 2 },
      { text: 'Busco desenvolvimento ocasionalmente', value: 3 },
      { text: 'Invisto consistentemente em meu crescimento', value: 4 }
    ]
  }
];

// Função para calcular idade de maturidade baseada na pontuação
export function calculateMaturityAge(score: number, realAge: number): number {
  const maxScore = 160; // 40 perguntas * 4 pontos
  const percentage = (score / maxScore) * 100;
  
  // Fórmula: idade base + ajuste baseado na porcentagem
  if (percentage >= 90) return realAge + 10;
  if (percentage >= 80) return realAge + 5;
  if (percentage >= 70) return realAge;
  if (percentage >= 60) return realAge - 3;
  if (percentage >= 50) return realAge - 5;
  return realAge - 8;
}

// Interpretação dos níveis de maturidade
export function getMaturityLevel(score: number): {
  level: string;
  description: string;
  color: string;
} {
  const maxScore = 160;
  const percentage = (score / maxScore) * 100;
  
  if (percentage >= 90) {
    return {
      level: 'Maturidade Excepcional',
      description: 'Você demonstra um nível extraordinário de maturidade em todas as áreas. Suas habilidades emocionais, sociais e decisórias são exemplares.',
      color: 'text-[#5A7C5A]' // verde musgo
    };
  }
  if (percentage >= 80) {
    return {
      level: 'Maturidade Elevada',
      description: 'Você possui um alto grau de maturidade. Continua desenvolvendo suas habilidades com consistência e consciência.',
      color: 'text-[#2C5F6F]' // azul petróleo
    };
  }
  if (percentage >= 70) {
    return {
      level: 'Maturidade Sólida',
      description: 'Você demonstra maturidade consistente na maioria das áreas. Há espaço para crescimento em pontos específicos.',
      color: 'text-[#5A7C5A]'
    };
  }
  if (percentage >= 60) {
    return {
      level: 'Maturidade em Desenvolvimento',
      description: 'Você está no caminho certo, mas ainda há áreas importantes que precisam de atenção e desenvolvimento.',
      color: 'text-[#8B7355]' // bege escuro
    };
  }
  if (percentage >= 50) {
    return {
      level: 'Maturidade Inicial',
      description: 'Você está começando sua jornada de desenvolvimento. Há muito potencial de crescimento à frente.',
      color: 'text-[#4A4A4A]'
    };
  }
  return {
    level: 'Maturidade em Construção',
    description: 'Este é o momento ideal para investir em seu desenvolvimento pessoal. Pequenas mudanças trarão grandes resultados.',
    color: 'text-[#4A4A4A]'
  };
}
