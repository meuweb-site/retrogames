import React, { useEffect, useMemo, useState } from "https://esm.sh/react@18.3.1";
import htm from "https://esm.sh/htm@3.1.1";

const html = htm.bind(React.createElement);

export { React, html };

const FILTERS = [
  { id: "all", label: "Todos" },
  {
    id: "nintendo",
    image: "assets/images/logos-console/nintendo.webp",
    imageClassName: "menu-logo nintendo",
    title: "NES, SNES e N64",
  },
  {
    id: "sega",
    image: "assets/images/logos-console/megadrive.webp",
    imageClassName: "menu-logo",
    title: "Master System, Genesis e Sega CD",
  },
  {
    id: "sony",
    image: "assets/images/logos-console/coloridoplay.webp",
    imageClassName: "menu-logo",
    imageStyle: { height: "80%", width: "auto" },
    title: "Playstation 1",
  },
  {
    id: "arcade",
    image: "assets/images/logos-console/arcade.webp",
    imageClassName: "menu-logo arcade",
    title: "Fliperama",
  },
];

const SOCIAL_LINKS = [
  { href: "https://www.instagram.com/meuweb.site/", icon: "bi bi-instagram", label: "Instagram" },
  { href: "https://www.tiktok.com/meuweb.site", icon: "bi bi-tiktok", label: "TikTok" },
  { href: "https://www.linkedin.com/in/meuwebsite/", icon: "bi bi-linkedin", label: "LinkedIn" },
];

function BrandLogo({ label = "RETROGAMES", className = "logo" }) {
  return html`
    <div className=${`${className} brand-logo`}>
      <span className="logo-emoji" aria-hidden="true">🎮</span>
      <span className="logo-text brand-logo-text">${label}</span>
    </div>
  `;
}

export function resolvePath(basePath, relativePath) {
  const normalizedBase = basePath === "." ? "" : basePath.replace(/\/$/, "");
  const normalizedRelative = relativePath.replace(/^\.\//, "");

  if (!normalizedBase) {
    return `./${normalizedRelative}`;
  }

  return `${normalizedBase}/${normalizedRelative}`;
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("retro-theme");
    return savedTheme || document.body.dataset.theme || "dark";
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    window.localStorage.setItem("retro-theme", theme);
  }, [theme]);

  return {
    theme,
    toggleTheme: () => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark")),
  };
}

function useScrollState() {
  const [state, setState] = useState({ progress: 0, showBackToTop: false });

  useEffect(() => {
    const updateScrollState = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setState({
        progress: Number.isFinite(progress) ? progress : 0,
        showBackToTop: scrollTop > 300,
      });
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return state;
}

function ThemeButton({ theme, onToggle, title = "Claro / Escuro" }) {
  return html`
    <button className="theme-toggle" onClick=${onToggle} title=${title} type="button">
      <span className="theme-icon" id="themeIcon">${theme === "dark" ? "☀️" : "🌙"}</span>
    </button>
  `;
}

function HomeHeader({ basePath, activeFilter, onFilterChange, theme, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerBackdropSrc = resolvePath(basePath, "assets/images/retro-imgage.webp");
  const headerBackgroundStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(8, 13, 37, 0.56) 0%, rgba(21, 27, 61, 0.8) 0%), url("${headerBackdropSrc}")`,
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [activeFilter]);

  return html`
    <header style=${headerBackgroundStyle}>
      <div className="header-content">
        <a href=${resolvePath(basePath, "index.html")} className="clear-link">
          <${BrandLogo} />
        </a>

        <button
          className="hamburger"
          onClick=${() => setMenuOpen((currentState) => !currentState)}
          type="button"
          aria-label="Abrir menu"
          aria-expanded=${menuOpen}
        >
          <span></span>
          <span></span>
        </button>

        <nav>
          <ul className=${`nav-menu${menuOpen ? " active" : ""}`} id="navMenu">
            ${FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              const content = filter.image
                ? html`<img
                    src=${resolvePath(basePath, filter.image)}
                    className=${filter.imageClassName}
                    style=${filter.imageStyle}
                    title=${filter.title}
                    alt=${filter.title}
                  />`
                : filter.label;

              return html`
                <li
                  className=${isActive ? "active" : ""}
                  onClick=${() => onFilterChange(filter.id)}
                  title=${filter.title}
                >
                  ${content}
                </li>
              `;
            })}
            <li>
              <${ThemeButton} theme=${theme} onToggle=${onThemeToggle} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}

function GameHeader({ title, homeHref, theme, onThemeToggle }) {
  const headerBackdropSrc = homeHref.replace(/index\.html$/, "assets/images/retro-imgage.webp");
  const headerBackgroundStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(21, 27, 61, 0.985) 0%, rgba(21, 27, 61, 0.98) 100%), url("${headerBackdropSrc}")`,
  };

  return html`
    <header style=${headerBackgroundStyle}>
      <div className="header-content" id="headerContent">
        <a href=${homeHref}>
          <button className="back-button" type="button">⬅️</button>
        </a>
        <div className="logo">
          <span className="logo-emoji" aria-hidden="true">🎮</span>
          <span className="logo-text">${title}</span>
        </div>
        <${ThemeButton} theme=${theme} onToggle=${onThemeToggle} />
      </div>
    </header>
  `;
}

function Footer({ homeHref, footerMode }) {
  const showHomeExtras = footerMode === "home";
  const footerBackdropSrc = homeHref.replace(/index\.html$/, "assets/images/retro-imgage.webp");
  const footerBackgroundStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(10, 14, 39, 0.94) 0%, rgba(10, 14, 39, 0.955) 42%, rgba(21, 27, 61, 0.98) 100%), url("${footerBackdropSrc}")`,
  };

  return html`
    ${showHomeExtras
      ? html`
          <section className="special-thanks-marquee" aria-label="Agradecimento especial">
            <div className="special-thanks-track">
              ${Array.from({ length: 3 }).map(
                () => html`
                  <span>
                    Agradecimento especial à <strong>Ana Beatriz</strong> pelos testes e inspiração para
                    continuar adicionando jogos antigos nesta plataforma. ❤
                  </span>
                `,
              )}
            </div>
          </section>
        `
      : null}

    <footer id="footer" style=${footerBackgroundStyle}>
      <div className="footer-shell">
        <div className="footer-grid">
          <div className="footer-side footer-side-left">
            <a href=${homeHref} className="footer-logo brand-logo">
              <span className="logo-emoji" aria-hidden="true">🎮</span>
              <span className="logo-text brand-logo-text">RETROGAMES</span>
            </a>
          </div>

          <div className="footer-center">
            <div className="social-links">
              ${SOCIAL_LINKS.map(
                (social) => html`
                  <a href=${social.href} target="_blank" rel="noreferrer" aria-label=${social.label}>
                    <i className=${social.icon}></i>
                  </a>
                `,
              )}
            </div>
          </div>

          <div className="footer-side footer-side-right">
            <a href="http://meuweb.site" className="footer-brand-signature">
              <img
                src=${homeHref.replace(/index\.html$/, "assets/images/patinho.webp")}
                alt="Patinho"
                className="footer-duck"
              />
              <span className="footer-brand-hover-text">DESENVOLVIDO POR</span>
              <strong>meuWeb.site</strong>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p><strong>RETRO GAMES</strong> © Este site não captura nenhum dado seu. O emulador é originado do site retrogames.cc</p>
      </div>
    </footer>
  `;
}

export function HomePageLayout({ basePath, children }) {
  const { theme, toggleTheme } = useTheme();
  const { progress, showBackToTop } = useScrollState();
  const [activeFilter, setActiveFilter] = useState("all");

  return {
    activeFilter,
    setActiveFilter,
    element: html`
      <${React.Fragment}>
        <div>
          <div id="readingBar" style=${{ width: `${progress}%` }}></div>
        </div>
        <${HomeHeader}
          basePath=${basePath}
          activeFilter=${activeFilter}
          onFilterChange=${setActiveFilter}
          theme=${theme}
          onThemeToggle=${toggleTheme}
        />
        <main>${children(activeFilter)}</main>
        <${Footer} homeHref=${resolvePath(basePath, "index.html")} footerMode="home" />
        ${showBackToTop
          ? html`
              <button
                id="backToTopBtn"
                className="back-to-top-btn"
                onClick=${() => window.scrollTo({ top: 0, behavior: "smooth" })}
                type="button"
              >
                ⬆️
              </button>
            `
          : null}
      <//>
    `,
  };
}

export function GamePageLayout({ title, homeHref, contentHtml }) {
  const { theme, toggleTheme } = useTheme();
  const { progress, showBackToTop } = useScrollState();

  return html`
    <${React.Fragment}>
      <div>
        <div id="readingBar" style=${{ width: `${progress}%` }}></div>
      </div>
      <${GameHeader} title=${title} homeHref=${homeHref} theme=${theme} onThemeToggle=${toggleTheme} />
      <main id="gameMain">
        <div dangerouslySetInnerHTML=${{ __html: contentHtml }}></div>
      </main>
      <${Footer} homeHref=${homeHref} footerMode="game" />
      ${showBackToTop
        ? html`
            <button
              id="backToTopBtn"
              className="back-to-top-btn"
              onClick=${() => window.scrollTo({ top: 0, behavior: "smooth" })}
              type="button"
            >
              ⬆️
            </button>
          `
        : null}
    <//>
  `;
}

export function useFilteredGames(games, activeFilter, query) {
  return useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return games.filter((game) => {
      const matchesFilter = activeFilter === "all" || game.company === activeFilter;
      const matchesQuery = normalizedQuery.length === 0 || game.title.toLowerCase().includes(normalizedQuery);
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, games, query]);
}
