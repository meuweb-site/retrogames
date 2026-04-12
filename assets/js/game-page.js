import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";
import { GamePageLayout, html } from "./shared-ui.js";

const rootElement = document.getElementById("app");
const templateElement = document.getElementById("page-main-template");

createRoot(rootElement).render(
  html`<${GamePageLayout}
    title=${rootElement.dataset.pageTitle}
    homeHref=${rootElement.dataset.homeHref}
    contentHtml=${templateElement ? templateElement.innerHTML.trim() : ""}
  />`,
);
