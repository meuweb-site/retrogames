import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";
import { games } from "./games-data.js";
import { HomePageLayout, React, html, resolvePath, useFilteredGames } from "./shared-ui.js";

function HomePage({ basePath }) {
  const { element } = HomePageLayout({
    basePath,
    children: (selectedFilter) => html`<${HomeMain} basePath=${basePath} activeFilter=${selectedFilter} />`,
  });

  return element;
}

function HomeMain({ basePath, activeFilter }) {
  const [query, setQuery] = React.useState("");
  const filteredGames = useFilteredGames(games, activeFilter, query);

  return html`
    <div className="search-div">
      <input
        type="text"
        id="searchInput"
        value=${query}
        onInput=${(event) => setQuery(event.target.value)}
        placeholder="🔍 Buscar jogos..."
      />
    </div>

    <div className="games-grid" id="gamesGrid">
      ${filteredGames.map(
        (game) => html`
          <div className="game-card" onClick=${() => window.open(resolvePath(basePath, game.url), "_blank", "noopener")}>
            <div className="game-image">
              <img src=${resolvePath(basePath, game.image)} alt=${game.title} className="game-img" />
            </div>
            <div className="game-title">${game.title}</div>
            <div className="game-console">${game.console}</div>
          </div>
        `,
      )}
    </div>
  `;
}

const rootElement = document.getElementById("app");
const basePath = rootElement?.dataset.basePath || ".";

createRoot(rootElement).render(html`<${HomePage} basePath=${basePath} />`);
