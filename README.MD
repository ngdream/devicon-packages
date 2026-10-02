# React, Vue and Svelte Icon Package Generator

This project builds framework packages from the official [Devicon](https://github.com/devicons/devicon) SVG icons. `build-core` downloads the latest official `master` snapshot into `tmp/devicon`, then forms `packages/core` from its `icons/` directory and `devicon.json`.

## Features
- Converts SVG icons to React, Vue and Svelte components.
- Optimizes SVGs with SVGO for performance.
- Supports props for `size` and `color` (for plain icons).
- Generates JavaScript and TypeScript declarations for React and Vue components.
- Creates single entry points (`index.js` and `index.d.ts`) for streamlined imports.
- Generated packages are stored in `packages/react`, `packages/vue` and `packages/svelte`.

## Directory Structure

```
project-root/
├── packages/core/icons/      # SVG icons copied from Devicon
├── packages/core/devicon.json # Configuration copied from Devicon
├── packages/react/           # Compiled React package
├── packages/vue/             # Compiled Vue package
├── packages/svelte/          # Svelte package
├── tmp/devicon/              # Downloaded Devicon snapshot
├── tmp/react/                # Temporary output directory for React components
├── tmp/vue/                  # Temporary output directory for Vue components
├── tmp/svelte/               # Temporary output directory for Svelte components
├── files/                    # Package manifests and README templates
├── build-core.ts             # Download and form packages/core
├── build-react.ts            # Script to generate React components
├── build-vue.ts              # Script to generate Vue components
├── build-svelte.ts           # Script to generate Svelte components
├── scripts/prepare-release.mjs # Set all package versions from a release tag
├── .github/workflows/        # Build artifacts and npm release workflows
```

## Prerequisites
- Node.js 20 or higher
- TypeScript

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm ci
   ```

## Usage

### Build all packages

```bash
npm run build-all
```

This runs `build-core`, then builds React, Vue and Svelte. `build-core` replaces the generated `packages/core/icons` directory and copies the upstream `devicon.json` to `packages/core/devicon.json`. It preserves `packages/core/package.json`.

To refresh only the Devicon source, run `npm run build-core`. Run it before an individual framework build when you want the latest icons.

### Generating the React Package
Run the following script to generate the React components:
```bash
npm run build-react
```

This script will:
- Optimize the SVGs using SVGO.
- Convert each SVG into a React component using JSX.
- Save the components in the `tmp/react/` directory.
- Compile and save the React package in the `packages/react/` directory.

### Generating the Vue Package
Run the following script to generate the Vue components:
```bash
npm run build-vue
```

This script will:
- Optimize the SVGs using SVGO.
- Convert each SVG into a Vue 3 component using JSX.
- Save the components in the `tmp/vue/` directory.
- Compile and save the Vue package in the `packages/vue/` directory.

### Output
After running the scripts, the `tmp/react/` and `tmp/vue/` directories will contain:
- Individual component directories (e.g., `icon-name/plain/`).
  - `index.js`: Component file (React or Vue).
  - `index.d.ts`: TypeScript definitions.
- Root `index.js`: Exports all components.
- Root `index.d.ts`: TypeScript definitions for all components.

The compiled packages will be available in the `packages/react/` and `packages/vue/` directories. Svelte components are generated in `packages/svelte/`.

### GitHub Actions

The [build workflow](.github/workflows/build.yml) runs on pushes to `master`, pull requests, manual dispatch and every Monday. It uploads `packages/core`, `packages/react`, `packages/vue` and `packages/svelte` as one downloadable Actions artifact. It does not publish to npm or commit generated files.

The [publish workflow](.github/workflows/publish.yml) runs only when a `vMAJOR.MINOR.PATCH` tag is pushed. It rebuilds all packages, sets the React, Vue and Svelte versions from the tag, and publishes those three packages to npm. Core remains an internal build source. Configure a GitHub Actions secret named `NPM_TOKEN` with permission to publish `@devicon/react`, `@devicon/vue` and `@devicon/svelte` before pushing a release tag. A tag can be created with `git tag v1.2.3` followed by `git push origin v1.2.3`.

### Using the Generated Packages

#### React
1. Navigate to the `packages/react/` directory:
   ```bash
   cd packages/react
   ```

2. Install the released package in your React project:
   ```bash
   npm install <your-package-name>
   ```

3. Import and use the icons in your React components:
   ```jsx
   import { IconNamePlain } from '<your-package-name>';

   const App = () => (
     <div>
       <IconNamePlain size="2em" color="#ff0000" />
     </div>
   );

   export default App;
   ```

#### Vue
1. Navigate to the `packages/vue/` directory:
   ```bash
   cd packages/vue
   ```

2. Install the released package in your Vue project:
   ```bash
   npm install <your-package-name>
   ```

3. Import and use the icons in your Vue components:
   ```vue
   <template>
     <IconNamePlain size="2em" color="#ff0000" />
   </template>

   <script>
   import { IconNamePlain } from '<your-package-name>';

   export default {
     components: { IconNamePlain }
   };
   </script>
   ```

## Development Notes

- **Adding New Icons:** Add them to the upstream Devicon repository; the next `build-core` will import the official release from `master`.

- **Customization:**
  - Modify the SVGO plugins or the JSX templates in `build-react.ts` and `build-vue.ts` to customize the output.

- **Testing:**
  - Use the generated packages in sample React and Vue projects to validate the components.

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.

## License
This project is licensed under the [MIT License](LICENSE).

