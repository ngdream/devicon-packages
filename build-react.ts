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
  const outputDir = path.join(__dirname, "tmp/react"); // Output directory for components

  // Clear previous temporary directories if they exist
  if (fs.existsSync(`${__dirname}/tmp/react`))
    fs.rmSync(`${__dirname}/tmp/react`, { recursive: true });
  await fsAsync.mkdir(outputDir);
  await fsAsync.copyFile(
    `${__dirname}/files/react-package.json`,
    `${__dirname}/tmp/react/package.json`
  );

  await fsAsync.copyFile(
    `${__dirname}/files/README.REACT.MD`,
    `${__dirname}/tmp/react/README.MD`
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
              const reactName =
                name
                  .split("-")
                  .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
                  .join("") + "Icon";

              index.push([reactName, `./${entry.name}/${version}`]);

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
                `const React = require("react");
module.exports = function ${reactName}({size = "1em", ${
                  isPlain ? `color = "${entry.color}",` : ""
                } ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,${
        isPlain
          ? `
      ...(color ? { fill: color } : {} )`
          : ""
      }
    }
  }
  return (${(
    await svgtojsx(svg.outerHTML)
  ).replace("<svg", "<svg {...props}")});
}`
              );

              // Write TypeScript definitions
              const definitions = `import React from 'react';
interface Props extends React.SVGProps<SVGElement> {
  size?: string | number;${
    isPlain
      ? `
  color?: string;`
      : ""
  }
}
declare const ${reactName}: React.FC<Props>;
export default ${reactName};`;

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
    index.map((e) => `const ${e[0]} = require("${e[1]}")`).join(";\n") +
      ";\n" +
      `module.exports = { ${index.map((e) => e[0]).join(",")} }`
  );
  // Create the root index.ts
  await fsAsync.writeFile(
    `${outputDir}/index.d.ts`,
    index.map((e) => `export { default as ${e[0]} } from '${e[1]}';`).join("\n")
  );
})();
