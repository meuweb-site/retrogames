<!--

:video_game: Retro Games
Up: 12/04/2026 Header e Footer com bg Image

 -->

<div align="center">
  <img src="https://igorlazzaretti.github.io/retrogames/assets/readme-cover.gif">
</div>

# 🎮 Retro Games

Projeto frontend simples que lista e permite filtrar jogos retrô em uma grade responsiva. Agora a estrutura compartilhada do site usa componentes React carregados no navegador, o que reduz a repetição de `header`, `main` e `footer` entre as páginas.

Este repositório contém a versão local do site "Retro Games". Ele não depende de backend: basta abrir `index.html` em um navegador.

- HTML e CSS para a estrutura do site.
- React via módulos no navegador para o layout compartilhado.
- JavaScript para o funcionamento do site e a criação de novos games.
- Divirta-se neste site <a href="https://retrogames.meuweb.site">retrogames.meuweb.site</a>.
- Fotos do Projeto neste <a href="https://flic.kr/s/aHBqjCyqp9">link</a>.

## 🚀 Tecnologias Utilizadas

**Front-End:** HTML, CSS, JavaScript e React;

## Estrutura Atual

- `index.html` monta a home via `assets/js/home-page.js`
- `assets/js/shared-ui.js` concentra os componentes reutilizáveis
- `assets/js/games-data.js` concentra a lista de jogos da home
- páginas de jogo usam `assets/js/game-page.js` + um `<template id="page-main-template">`
- `templates/game-page-template.html` serve como ponto de partida para novos jogos
- `tools/migrate-game-pages-to-react.mjs` automatiza a migração das páginas antigas para o shell React

## Como adicionar um novo jogo

1. Copie `templates/game-page-template.html` para a pasta desejada.
2. Ajuste `title`, `data-page-title`, `data-home-href` e o `src` do `iframe`.
3. Edite apenas o conteúdo dentro de `page-main-template`.
4. Adicione o jogo em `assets/js/games-data.js` para aparecer na home.

### Principais recursos:

- 🎨 **Design:** Adaptação de GIF da série;
- 🧩 **Organização:** Estrutura limpa e escalável;
- 🔗 **Dados:** Não possui consumo de dados;
- 📱 **Layout Responsivo:** Compatível com dispositivos móveis;

## ❤️ Ajude um Desenvolvedor

Se você gostou do site e de entrar rapidamente seu jogo retro favorito, considere ajudar o desenvolvedor com um valor simbólico.

If you liked the site and quickly jumping into your favorite retro game, consider helping the developer with a symbolic amount.

  <a href="https://github.com/sponsors/igorlazzaretti">
    <img src="https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#white" alt="Sponsor on GitHub" />
  </a>

## 👨‍💻 Desenvolvedor

**Igor Dossin Lazzaretti**
🔗 [LinkedIn](https://www.linkedin.com/in/igorlazzaretti/)
🌐 [Portfólio](https://igorlazzaretti.com/)
💻 [Projetos GitHub](https://github.com/igorlazzaretti?tab=repositories)
