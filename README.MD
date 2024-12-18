# React and Vue Icon Package Generator

This project automates the creation of both React and Vue 3-compatible icon libraries from SVG assets. The generated packages include components that support customization and ease of integration into React and Vue applications.

## Features
- Converts SVG icons to React and Vue components using JSX.
- Optimizes SVGs with SVGO for performance.
- Supports props for `size` and `color` (for plain icons).
- Generates JavaScript and TypeScript files for both React and Vue components.
- Creates single entry points (`index.js` and `index.d.ts`) for streamlined imports.
- Compiled packages are stored in the `packages` directory for React and Vue.

## Directory Structure

```
project-root/
├── packages/core/icons/      # Directory containing the source SVG icons
├── packages/react/           # Compiled React package
├── packages/vue/             # Compiled Vue package
├── tmp/react/                # Temporary output directory for React components
├── tmp/vue/                  # Temporary output directory for Vue components
├── devicon.json              # Configuration file for icons
├── react-package.json        # Package.json template for the React library
├── vue-package.json          # Package.json template for the Vue library
├── build-react.ts            # Script to generate React components
├── build-vue.ts              # Script to generate Vue components
├── publish.ts                # Script to publish the packages
```

## Prerequisites
- Node.js (v14 or higher)
- TypeScript

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Preparing the Icons
1. Place your SVG icons in the `packages/core/icons/` directory.
2. Ensure `devicon.json` is configured correctly for your icons. Each entry should look like this:
   ```json
   [
     {
       "name": "icon-name",
       "color": "#000000",
       "versions": { "svg": ["plain", "line"] },
       "aliases": [
         { "base": "plain", "alias": ["line"] }
       ]
     }
   ]
   ```

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

The compiled packages will be available in the `packages/react/` and `packages/vue/` directories.

### Using the Generated Packages

#### React
1. Navigate to the `packages/react/` directory:
   ```bash
   cd packages/react
   ```

2. Publish the package to npm:
   ```bash
   npm publish
   ```

3. Install the package in your React project:
   ```bash
   npm install <your-package-name>
   ```

4. Import and use the icons in your React components:
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

2. Publish the package to npm:
   ```bash
   npm publish
   ```

3. Install the package in your Vue project:
   ```bash
   npm install <your-package-name>
   ```

4. Import and use the icons in your Vue components:
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

- **Adding New Icons:**
  - Add the SVG files to the `packages/core/icons/` directory.
  - Update `devicon.json` to include details for the new icons.

- **Customization:**
  - Modify the SVGO plugins or the JSX templates in `build-react.ts` and `build-vue.ts` to customize the output.

- **Testing:**
  - Use the generated packages in sample React and Vue projects to validate the components.

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.

## License
This project is licensed under the [MIT License](LICENSE).

