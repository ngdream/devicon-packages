Here’s the documentation adapted for `@devicon/svelte`:

---

# @devicon/svelte

Svelte components for the SVG icons of the [devicon](https://github.com/devicons/devicon) project.

## Installation

```bash
yarn add @devicon/svelte
# OR
npm install @devicon/svelte
# OR
pnpm add @devicon/svelte
```

## Usage

### Importing and Using Icons

Icons can be imported and used as Svelte components.

```svelte
<script>
  import ReactOriginalIcon from "@devicon/svelte/react/original/ReactOriginalIcon.svelte";
  // or (not recommended, as it can significantly increase bundle size)
  import { GithubOriginalIcon, GithubOriginalWordmarkIcon } from "@devicon/svelte";
</script>

<GithubOriginalWordmarkIcon />
<GithubOriginalIcon size="2em" />
<ReactOriginalIcon class="my-class" />
```

### With Color

Icons that support single-color customization can be recolored like this:

```svelte
<script>
  import DeviconPlainIcon from "@devicon/svelte/devicon/plain/DeviconPlainIcon.svelte";
</script>

<DeviconPlainIcon color="white" />
```