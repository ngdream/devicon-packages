import fs from "fs";
import fsAsync from "fs/promises";
import { JSDOM } from "jsdom";
import svgtojsx from "svg-to-jsx";
import { optimize as svgoOptimize } from "svgo";
import path from "path";
import svgo from "svgo";

(async (): Promise<void> => {
  const index: [string, string][] = [];

  const iconsDir = path.join(__dirname, "packages/core/icons"); // Adjusted for local icons directory
  const outputDir = path.join(__dirname, "tmp/vue"); // Output directory for components

  // Clear previous temporary directories if they exist
  if (fs.existsSync(`${__dirname}/tmp/vue`))
    fs.rmSync(`${__dirname}/tmp/vue`, { recursive: true });
  await fsAsync.mkdir(outputDir);
  await fsAsync.copyFile(
    `${__dirname}/files/vue-package.json`,
    `${__dirname}/tmp/vue/package.json`
  );

  await fsAsync.copyFile(
    `${__dirname}/files/README.VUE.MD`,
    `${__dirname}/tmp/vue/README.MD`
  );

  // Load the devicon config (this assumes you have a local `devicon.json` file)
  const deviconConfig: {
    name: string;
    color: string;
    versions: { svg: string[] };
    aliases: { base: string; alias: string[] }[];
  }[] = JSON.parse(
    (await fsAsync.readFile(`${__dirname}/devicon.json`)).toString()
  );

  // Process each icon
  await Promise.all(
    deviconConfig.map(async (entry) => {
      const iconPath = path.join(iconsDir, entry.name);
      if (fs.existsSync(iconPath)) {
        await fsAsync.mkdir(`${outputDir}/${entry.name}`);

        await Promise.all(
          entry.versions.svg.map(async (version) => {
            const name = `${entry.name}-${version}`;
            const iconFile = path.join(iconPath, `${name}.svg`);
            if (fs.existsSync(iconFile)) {
              const icon = await fsAsync.readFile(iconFile);

              // Optimize SVG using SVGO
              const optimizedIcon = svgoOptimize(icon.toString(), {
                plugins: [
                  { name: "inlineStyles", params: { onlyMatchedOnce: false } },
                  "removeStyleElement",
                ],
              }) as svgo.OptimizedSvg;

              const { document } = new JSDOM(optimizedIcon.data).window;
              const dir = `${outputDir}/${entry.name}/${version}`;
              const vueName =
                name
                  .split("-")
                  .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
                  .join("") + "Icon";

              index.push([vueName, `./${entry.name}/${version}`]);

              await fsAsync.mkdir(dir);

              const svg = document.getElementsByTagName("svg")[0];
              svg.removeAttribute("width");
              svg.removeAttribute("height");
              svg.removeAttribute("xmlns:xlink");

              // Handle plain icon styles
              const isPlain =
                version.includes("plain") ||
                version.includes("line") ||
                !!entry.aliases.find(
                  (x) =>
                    x.base === version &&
                    (x.alias.includes("plain") || x.alias.includes("line"))
                );

              if (isPlain) {
                svg.removeAttribute("fill");
                const elements = svg.getElementsByTagName("*");
                for (let i = 0; i < elements.length; i++) {
                  const element = elements[i] as SVGElement;
                  element.removeAttribute("fill");
                  element.style.removeProperty("fill");
                  element.style.removeProperty("fill-rule");
                  element.style.removeProperty("fill-opacity");
                }
              }

              await fsAsync.writeFile(
                `${dir}/index.js`,
                `import { defineComponent, h } from 'vue';
export default defineComponent({
  name: '${vueName}',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },${
      isPlain
        ? `
    color: {
      type: String,
      default: '${entry.color}'
    },`
        : ""
    }
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,${
        isPlain
          ? `
      ...(this.color ? { fill: this.color } : {})`
          : ""
      }
    };
    return ${(
      await svgtojsx(svg.outerHTML)
    ).replace("<svg", "<svg {...props}")};
  }
});`
              );

              // Write TypeScript definitions
              const definitions = `import { FunctionalComponent } from 'vue';
interface Props {
  size?: string | number;${
    isPlain
      ? `
  color?: string;`
      : ""
  }
}
declare const ${vueName}: FunctionalComponent<Props>;
export default ${vueName};`;

              await fsAsync.writeFile(`${dir}/index.d.ts`, definitions);
            }
          })
        );
      }
    })
  );

  // Create the root index.js
  await fsAsync.writeFile(
    `${outputDir}/index.js`,
    index.map((e) => `import ${e[0]} from "${e[1]}";`).join("\n") +
      "\n" +
      `export { ${index.map((e) => e[0]).join(", ")} };`
  );

  // Create the root index.ts
  await fsAsync.writeFile(
    `${outputDir}/index.d.ts`,
    index.map((e) => `export { default as ${e[0]} } from '${e[1]}';`).join("\n")
  );
})();
