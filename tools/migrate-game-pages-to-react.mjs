import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const gameDirectories = ["games", "sony", "nintendo", "SEGA"];

function escapeAttribute(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getHtmlFiles(directoryPath) {
  const entries = fs.readdirSync(directoryPath, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const absolutePath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      return getHtmlFiles(absolutePath);
    }

    return entry.name.endsWith(".html") ? [absolutePath] : [];
  });
}

function ensureBootstrapIcons(headHtml) {
  if (headHtml.includes("bootstrap-icons")) {
    return headHtml;
  }

  const stylesheetTag =
    '    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">\n';

  return headHtml.replace(/(<\/title>\s*)/, `$1${stylesheetTag}`);
}

const htmlFiles = gameDirectories.flatMap((directory) => getHtmlFiles(path.join(projectRoot, directory)));

for (const filePath of htmlFiles) {
  const relativeFilePath = path.relative(projectRoot, filePath);
  const source = fs.readFileSync(filePath, "utf8");

  if (source.includes('id="page-main-template"') && source.includes('assets/js/game-page.js')) {
    continue;
  }

  const titleTagMatch = source.match(/<title>\s*([\s\S]*?)\s*<\/title>/i);
  const mainMatch = source.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  const bodyMatch = source.match(/<body[^>]*>[\s\S]*<\/body>/i);
  const headMatch = source.match(/<head>([\s\S]*?)<\/head>/i);

  if (!titleTagMatch || !mainMatch || !bodyMatch || !headMatch) {
    throw new Error(`Nao foi possivel migrar ${relativeFilePath}`);
  }

  const pageTitle = titleTagMatch[1].replace(/\s*-\s*retro\s*games?\s*$/i, "").trim();

  const depth = relativeFilePath.split(path.sep).length - 1;
  const basePath = "../".repeat(depth).replace(/\/$/, "");
  const homeHref = `${basePath}/index.html`;
  const scriptSrc = `${basePath}/assets/js/game-page.js`;

  const newHead = ensureBootstrapIcons(`<head>${headMatch[1]}</head>`);
  const newBody = `<body data-theme="dark">
    <div id="app"
        data-page-title="${escapeAttribute(pageTitle)}"
        data-home-href="${escapeAttribute(homeHref)}"></div>
    <template id="page-main-template">
${mainMatch[1]}
    </template>
    <script type="module" src="${scriptSrc}"></script>
</body>`;

  const nextSource = source
    .replace(/<head>[\s\S]*?<\/head>/i, newHead)
    .replace(bodyMatch[0], newBody);

  fs.writeFileSync(filePath, nextSource);
}

console.log(`Migradas ${htmlFiles.length} paginas de jogo para o layout React.`);
