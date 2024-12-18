import { execSync } from "child_process";
import path from "path";
import fs from "fs";

const publishPackage = (packageDir: string) => {
  try {
    console.log(`Starting the publish process for ${packageDir}...`);

    const packagePath = path.resolve(packageDir);
    const npmrcPath = path.join(packagePath, ".npmrc");

    // Create a temporary .npmrc file with the NPM_TOKEN for authentication
    console.log("Setting up npm token...");
    const npmToken = process.env.NPM_TOKEN;
    if (!npmToken) {
      throw new Error("NPM_TOKEN environment variable is not set.");
    }
    fs.writeFileSync(
      npmrcPath,
      `//registry.npmjs.org/:_authToken=${npmToken}\n`,
      { encoding: "utf8" }
    );

    // Run 'npm install' to ensure dependencies are up to date
    console.log("Running npm install...");
    execSync("npm install", { cwd: packagePath, stdio: "inherit" });

    // Run 'npm version' to bump the version number
    console.log("Bumping version...");
    execSync("npm version patch", { cwd: packagePath, stdio: "inherit" });

    // Run 'npm publish' to publish the package
    console.log("Publishing package...");
    execSync("npm publish", { cwd: packagePath, stdio: "inherit" });

    console.log(`${packageDir} published successfully!`);

    // Clean up the .npmrc file
    console.log("Cleaning up temporary .npmrc...");
    fs.unlinkSync(npmrcPath);
  } catch (error) {
    console.error(`Error publishing the package at ${packageDir}:`, error);
  }
};

const packages = ["./packages/react", "./packages/vue"];

packages.forEach(publishPackage);
