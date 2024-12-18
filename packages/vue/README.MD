# @devicon/vue

Vue components for the SVG icons of the [devicon](https://github.com/devicons/devicon) project.

## Installation

```bash
yarn add @devicon/vue
# OR
npm install @devicon/vue
# OR
pnpm add @devicon/vue
```

## Usage

```vue
<script setup>
import ReactOriginalIcon from "@devicon/vue/react/original";
// or (not recommended, as it can significantly increase bundle size)
import { GithubOriginalIcon, GithubOriginalWordmarkIcon } from "@devicon/vue";
</script>

<template>
  <GithubOriginalWordmarkIcon />
  <GithubOriginalIcon size="2em" />
  <ReactOriginalIcon class="my-class" />
</template>
```

### With Color

Icons that support single-color customization can be recolored as follows:

```vue
<script setup>
import DeviconPlainIcon from "@devicon/vue/devicon/plain";
</script>

<template>
  <DeviconPlainIcon color="white" />
</template>
```
