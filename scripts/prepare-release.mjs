import fs from "node:fs/promises";
import path from "node:path";

const tag = process.argv[2];
if (!/^v(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z.-]+)?$/.test(tag ?? "")) {
  throw new Error("Expected a release tag such as v1.2.3 or v1.2.3-rc.1");
}

const version = tag.slice(1);
const packages = ["react", "vue", "svelte"];

for (const name of packages) {
  const dir = path.join("packages", name);
  const manifestPath = path.join(dir, "package.json");
  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  if (manifest.name !== `@devicon/${name}`) {
    throw new Error(`Unexpected package name in ${manifestPath}`);
  }

  await fs.stat(path.join(dir, "index.js"));

  manifest.version = version;
  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  console.log(`${manifest.name}@${version}`);
}
