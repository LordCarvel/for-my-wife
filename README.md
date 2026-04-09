# Surpresa Romantica em React

Site completo em React + Vite pensado para mesversario de namoro + aniversario, com uma jornada emocional em cinco etapas:

- abertura impactante
- quiz divertido de casal
- memorias em cards
- transicao emocional com frases animadas
- declaracao final com modal surpresa

## Como rodar

```bash
npm install
npm run dev
```

Para gerar a versao de producao:

```bash
npm run build
npm run preview
```

## Onde editar o conteudo

Quase tudo fica centralizado em `src/data/siteContent.js`:

- `partnerName`
- `authorName`
- `relationshipStart`
- `birthdayDate`
- textos da abertura
- perguntas e respostas do quiz
- memorias
- frases da parte emocional
- declaracao final
- mensagem extra do modal
- caminho da musica

## Fotos e musica

- Fotos mockadas: `public/photos/`
- Trilha opcional: `public/audio/melhor-que-ontem.mp3`

Voce pode substituir os arquivos mantendo os mesmos nomes, ou apenas trocar os caminhos no arquivo de dados.

## Estrutura principal

```text
src/
  components/
    EmotionalSection.jsx
    FinalLetter.jsx
    FloatingHearts.jsx
    IntroScreen.jsx
    LoadingScreen.jsx
    LoveCounter.jsx
    MemoriesSection.jsx
    MusicPlayer.jsx
    QuizGame.jsx
    SectionHeading.jsx
    SurpriseModal.jsx
    TypewriterText.jsx
  data/
    siteContent.js
  App.jsx
  App.css
  index.css
```

## Observacoes

- O layout foi pensado para celular e desktop.
- As animacoes sao feitas com CSS e APIs nativas do navegador, sem dependencias extras.
- O audio ja vem pronto para o botao de play/pause funcionar, mas foi deixado como opcional para nao pesar a experiencia.
