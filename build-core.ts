import fs from "fs/promises";
import path from "path";
import degit from "degit";

const root = __dirname;
const sourceDir = path.join(root, "tmp", "devicon");
const coreDir = path.join(root, "packages", "core");

(async (): Promise<void> => {
  await fs.mkdir(path.dirname(sourceDir), { recursive: true });
  await fs.rm(sourceDir, { recursive: true, force: true });

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await degit("devicons/devicon#master", { cache: false, force: true }).clone(sourceDir);
      break;
    } catch (error) {
      await fs.rm(sourceDir, { recursive: true, force: true });
      if (attempt === 3) throw error;
      console.warn(`Devicon download failed (attempt ${attempt}/3); retrying...`);
      await new Promise((resolve) => setTimeout(resolve, attempt * 2000));
    }
  }

  const iconsDir = path.join(sourceDir, "icons");
  const configPath = path.join(sourceDir, "devicon.json");
  const [icons, config] = await Promise.all([
    fs.stat(iconsDir),
    fs.readFile(configPath, "utf8"),
  ]);
  if (!icons.isDirectory() || !Array.isArray(JSON.parse(config))) {
    throw new Error("The Devicon snapshot is missing icons/ or a valid devicon.json");
  }

  await fs.mkdir(coreDir, { recursive: true });
  await fs.rm(path.join(coreDir, "icons"), { recursive: true, force: true });
  await fs.cp(iconsDir, path.join(coreDir, "icons"), { recursive: true });
  await fs.copyFile(configPath, path.join(coreDir, "devicon.json"));
  console.log(`Core built from devicons/devicon#master in ${coreDir}`);
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
