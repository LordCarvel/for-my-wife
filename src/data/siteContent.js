const partnerName = 'Emily'
const authorName = 'Vinicius'
const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
const relationshipStart = '2025-07-17T00:00:00'
const officialFirstDate = '2025-07-20T20:00:00'
const pierDate = '2025-10-19T22:00:00'
const cinemaDate = '2025-12-24T20:00:00'
const robberyDate = '2026-03-03T00:00:00'
const datingAskDate = '2026-04-07T00:00:00'
const birthdayDate = '2026-04-09T00:00:00'

export const siteContent = {
  couple: {
    partnerName,
    authorName,
    relationshipStart,
    officialFirstDate,
    pierDate,
    cinemaDate,
    robberyDate,
    datingAskDate,
    birthdayDate,
  },
  intro: {
    eyebrow: 'Pra Emily',
    title: `Oi, ${partnerName}... fiz isso pra você \u{1F496}`,
    description:
      'Eu queria fazer uma surpresa do meu jeito. Sem parecer frase pronta demais, sem ficar exagerado. Só uma coisa bonita, com a nossa cara, pra te fazer rir no começo e sentir o resto no final.',
    typewriterText:
      'Tem umas brincadeiras, umas datas que eu não esqueço e umas coisas que eu precisava te dizer direito.',
    startButtonLabel: 'Começar',
    startedLabel: 'A surpresa já começou',
    smallNote:
      'Se quiser, coloca a música. Se não quiser, tudo bem. Só vai até o fim.',
    sideBadge: 'Como isso vai funcionar',
    highlights: [
      {
        title: 'Começo leve',
        text: 'Primeiro eu quero te arrancar um sorriso, porque começar emocionado demais seria apelação.',
      },
      {
        title: 'Quiz',
        text: 'Tem umas perguntas sobre a gente porque claramente isso aqui precisava de uma prova oficial.',
      },
      {
        title: 'Memórias',
        text: 'Depois vêm alguns dias que ficaram marcados e que eu carrego comigo até hoje.',
      },
      {
        title: 'Parte séria',
        text: 'E no final eu paro de brincar e falo do jeito mais sincero possível.',
      },
    ],
    sideDateLabel: 'Essa semana é nossa',
    sideDateText:
      'No dia 7 de abril eu te pedi em namoro. No dia 9 de abril é o seu aniversário. Então essa surpresa tinha que existir, porque eu não ia deixar essas datas passarem em branco.',
    sideNote:
      'E sim, eu deixei tudo fácil de editar porque eu me conheço e sei que ainda vou querer mexer em alguma coisa.',
  },
  music: {
    label: 'Se quiser ouvir a trilha',
    caption:
      'Eu já deixei tudo apontado. Se o arquivo estiver na pasta certa, é só dar play.',
    fallbackMessage:
      'Se não tocar, coloca o arquivo em public/audio/melhor-que-ontem.mp3.',
    src: withBase('/audio/melhor-que-ontem.mp3'),
  },
  quiz: {
    eyebrow: 'Antes da parte séria',
    title: 'Um quiz bem a nossa cara',
    description:
      'Antes de eu ficar romântico de verdade, você precisa passar por cinco perguntas extremamente importantes e zero imparciais.',
    hint: 'Escolhe uma opção.',
    nextButtonLabel: 'Próxima pergunta',
    finishButtonLabel: 'Ver resultado',
    questionCounterLabel: 'Pergunta',
    resultHint: 'Agora sim. A parte engraçada já passou, então vem a parte que importa de verdade.',
    questions: [
      {
        tone: 'Sem mentir',
        question: 'Quem ama mais?',
        options: [
          {
            label: 'Você',
            points: 2,
          },
          {
            label: 'Eu',
            points: 5,
          },
          {
            label: 'Os dois, mas eu um pouco mais',
            points: 4,
          },
          {
            label: 'O porteiro do prédio',
            points: 1,
          },
        ],
      },
      {
        tone: 'Volta no tempo',
        question: 'Quem disse "eu te amo" primeiro?',
        options: [
          {
            label: 'Você',
            points: 2,
          },
          {
            label: 'Eu',
            points: 5,
          },
          {
            label: 'A gente falou quase ao mesmo tempo',
            points: 3,
          },
          {
            label: 'Foi o algoritmo do Instagram',
            points: 1,
          },
        ],
      },
      {
        tone: 'Essa você sabe',
        question: 'Se você falar "eu te amo", qual seria a minha resposta?',
        options: [
          {
            label: 'Eu também te amo',
            points: 3,
          },
          {
            label: 'Também te odeio',
            points: 5,
          },
          {
            label: 'Vai se ferrar, eu gosto de você',
            points: 4,
          },
          {
            label: 'Eu abriria um PowerPoint',
            points: 1,
          },
        ],
      },
      {
        tone: 'Pergunta com fofoca',
        question:
          'Quem era a maior hater da nossa relação e hoje em dia é a maior fã?',
        options: [
          {
            label: 'Sua mãe',
            points: 5,
          },
          {
            label: 'Sua melhor amiga',
            points: 3,
          },
          {
            label: 'Sua tia',
            points: 2,
          },
          {
            label: 'A atendente da farmácia',
            points: 1,
          },
        ],
      },
      {
        tone: 'Planejamento familiar',
        question: 'Qual vai ser o nome do nosso filho?',
        options: [
          {
            label: 'Vinicius Junior Rodrigues Sena dos Santos',
            points: 5,
          },
          {
            label: 'Vinicius Rodrigues Sena',
            points: 3,
          },
          {
            label: 'Vinicius Junior Sena',
            points: 2,
          },
          {
            label: 'Jurandir Interestelar dos Santos',
            points: 1,
          },
        ],
      },
    ],
    results: [
      {
        maxScore: 14,
        title: 'Você foi bem',
        text:
          'Ou você respondeu no susto, ou resolveu me provocar. De qualquer forma, eu gostei.',
      },
      {
        maxScore: 20,
        title: 'Você conhece a gente direitinho',
        text:
          'O que é justo, porque metade dessas respostas a gente já viveu na prática e a outra metade você adivinharia mesmo.',
      },
      {
        maxScore: 99,
        title: 'Você gabaritou o espírito da relação',
        text:
          'Ou você me conhece demais, ou eu estou previsível. Pensando bem, acho que são os dois.',
      },
    ],
  },
  memories: {
    eyebrow: 'Nossas datas',
    title: 'Alguns dias que ficaram em mim',
    description:
      'Tem coisa que a gente vive e esquece. E tem coisa que fica. Com você, vários dias ficaram.',
    extraMomentsTitle: 'E tem dias que eu não precisava nem de foto pra lembrar',
    counterTitle: 'Dias desde que você mudou a minha vida',
    counterDescription:
      'Contando desde 17 de julho de 2025 até agora, porque foi aí que tudo começou a mexer comigo de verdade.',
    items: [
      {
        title: 'O dia em que tudo começou a mudar',
        date: '17 de julho de 2025',
        description:
          'Eu gosto dessa data porque, pra mim, foi quando a minha vida começou a sair do eixo do jeito certo. Ainda não era tudo oficial, mas já era importante demais.',
        image: withBase('/photos/memory-1.jpg'),
        alt: 'Foto representando o começo da história entre Vinicius e Emily.',
      },
      {
        title: 'As mensagens que viraram parte do meu dia',
        date: '20 de julho de 2025',
        description:
          'Essa memória é sobre as mensagens. Sobre quando falar com você foi deixando de ser um detalhe e virou uma das partes mais importantes do meu dia.',
        image: withBase('/photos/memory-2.jpg'),
        fallbackImage: withBase('/photos/memory-2.svg'),
        alt: 'Foto representando as mensagens entre Vinicius e Emily.',
      },
      {
        title: 'Um momento bobo nosso que eu gosto muito',
        date: '19 de outubro de 2025',
        description:
          'Essa aqui é mais simples, mais leve e talvez por isso seja tão boa. É sobre nós dois sendo bobos juntos, do jeito que eu gosto e que só faz sentido porque é com você.',
        image: withBase('/photos/memory-3.jpg'),
        fallbackImage: withBase('/photos/memory-3.svg'),
        alt: 'Foto representando Vinicius e Emily em um momento bobo juntos.',
      },
      {
        title: 'Tudo o que eu ainda quero viver com você',
        date: '24 de dezembro de 2025',
        description:
          'Essa memória é mais sobre o futuro do que sobre um dia específico. Sobre o tanto de coisa que eu ainda imagino vivendo com você e o quanto isso me faz bem.',
        image: withBase('/photos/memory-4.jpg'),
        fallbackImage: withBase('/photos/memory-4.svg'),
        alt: 'Foto representando o futuro de Vinicius e Emily juntos.',
      },
    ],
    extraMoments: [
      {
        date: '3 de março de 2026',
        text:
          'Foi um dia pesado e impossível de esquecer. Não é uma lembrança leve, mas é uma data que mudou muita coisa em nós e em mim.',
      },
      {
        date: '7 de abril de 2026',
        text:
          'Foi o dia em que eu te pedi em namoro. Não tenho foto desse momento aqui, mas sinceramente nem preciso. Eu lembro dele direito.',
      },
    ],
  },
  emotional: {
    eyebrow: 'Agora sem brincadeira',
    title: 'Tem umas coisas que eu precisava te dizer',
    description:
      'Depois do quiz e das memórias, eu só queria falar do jeito mais reto possível.',
    closingLine: `No fim, é isso: eu te amo, ${partnerName}, e não é pouco.`,
    intervalMs: 1800,
    phrases: [
      'Você entrou na minha vida e realmente mudou muita coisa em mim.',
      'Com você eu consigo rir, ficar em paz e sentir que estou exatamente onde eu quero estar.',
      'Até nos dias pesados, você continuou sendo uma das pessoas que eu mais quis por perto.',
      'Eu gosto do nosso jeito, das nossas piadas e até das nossas pequenas loucuras.',
      'Quando eu penso no que já vivi com você, eu só consigo querer viver mais.',
    ],
  },
  finalLetter: {
    badge: '7 de abril + 9 de abril',
    title: 'Feliz aniversário, Emily \u{2764}\u{FE0F}',
    subtitle:
      'E feliz por tudo o que essa semana significa pra nós dois. Eu te pedi em namoro no dia 7 e, dois dias depois, é o seu aniversário. Abril resolveu caprichar comigo.',
    letterTitle: 'Agora falando sério',
    metaCards: [
      {
        label: 'Quem bagunçou meu juízo',
        value: partnerName,
        description:
          'Você entrou, fez a maior bagunça boa e deixou tudo melhor. Eu reclamo em silêncio, mas gosto.',
      },
      {
        label: 'O que eu mais gosto em nós',
        value: 'Nosso jeito',
        description:
          'A gente consegue ser fofo, rir de besteira, implicar um com o outro e ainda se levar a sério quando precisa.',
      },
    ],
    paragraphs: [
      `Emily, eu pensei em como escrever isso sem parecer frase pronta demais, porque você sabe que quando fica artificial eu mesmo implico. Então eu resolvi fazer do jeito certo: sendo eu.`,
      `Desde aquele começo, lá em julho, passando pelas noites que foram ficando nossas, pelo pier, pelo cinema de 24 de dezembro e por tudo o que veio depois, você foi ocupando um espaço muito grande em mim. Não foi de uma vez só. Foi aos poucos. E talvez por isso tenha ficado tão forte.`,
      `Também teve dia difícil no meio do caminho. O 3 de março de 2026 mudou muita coisa dentro da gente e eu sei que certas datas não marcam de um jeito bonito. Mesmo assim, aquilo me mostrou ainda mais o quanto eu queria estar do teu lado, cuidar de você e seguir com você.`,
      `Aí veio o dia 7 de abril, quando eu te pedi em namoro, e eu fiquei com aquela sensação muito boa de estar fazendo exatamente o que eu queria fazer. E agora vem o dia 9, o seu aniversário, que é mais um motivo enorme pra eu agradecer por você existir e por eu poder viver isso contigo.`,
      `Eu amo você de verdade, Emily. Amo seu jeito, amo nossa conexão, amo até as nossas implicâncias bobas. E se eu pudesse te desejar uma coisa hoje, seria que você nunca esquecesse o quanto é importante pra mim. Eu, Vinicius, sou muito feliz por ter você na minha vida.`,
    ],
    buttonText: 'Tem mais uma coisinha...',
    buttonCaption:
      'Porque claro que eu ainda não tinha terminado de falar.',
  },
  surprise: {
    kicker: 'Última coisa',
    title: 'Só pra deixar bem claro',
    paragraphs: [
      'Você é uma das melhores coisas que já me aconteceram.',
      'Obrigado por tudo o que já viveu comigo, até pelo que foi difícil, porque no fim isso também mostrou a força do que a gente tem.',
      `Feliz aniversário, ${partnerName}. Eu te amo e quero continuar vivendo muita coisa com você.`,
    ],
    signatureLabel: 'Com amor,',
    signature: authorName,
  },
}
