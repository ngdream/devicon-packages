# @devicon/react

React components for the SVG icons of the [devicon](https://github.com/devicons/devicon) project.

## Installation

```bash
yarn add @devicon/react
# OR
npm install @devicon/react
# OR
pnpm add @devicon/react
```

## Usage

```tsx
import ReactOriginalIcon from "@devicon/react/react/original";
// or (not recommended, as it can significantly increase bundle size)
import { GithubOriginalIcon, GithubOriginalWordmarkIcon } from "@devicon/react";

<GithubOriginalWordmarkIcon />
<GithubOriginalIcon size="2em" />
<ReactOriginalIcon className="my-class" />
```

### With Color

Icons that support single-color customization can be recolored like this:

```tsx
import DeviconPlainIcon from "@devicon/react/devicon/plain";

<DeviconPlainIcon color="white" />
```
