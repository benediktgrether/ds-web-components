# 🧩 DS Web Components

A modern Design System built with [Lit](https://lit.dev/), [Tailwind CSS](https://tailwindcss.com/), and [Storybook](https://storybook.js.org/). This project uses Vite for fast builds and supports component-based development using Web Components.

---

## 📦 Project Structure

```
├── src
│   ├── components
│   │   ├── button
│   │   ├── headline
│   │   └── image
│   ├── layout
│   │   └── container
│   ├── css
│   │   ├── config
│   │   └── main.css
│   ├── index.ts
│   └── vite-env.d.ts
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start development server

```bash
pnpm run dev
```

### 3. Open Storybook

```bash
pnpm run storybook
```

### 4. Build for production

```bash
pnpm run build
```

### 5. Build Storybook

```bash
pnpm run build-storybook
```

---

## 🛠️ Technologies Used

-   **[Lit](https://lit.dev/)** – Simple and fast Web Components.
-   **[Tailwind CSS v4](https://tailwindcss.com/)** – Utility-first CSS framework.
-   **[Storybook](https://storybook.js.org/)** – UI component explorer.
-   **[Vite](https://vitejs.dev/)** – Lightning fast build tool.
-   **[vite-plugin-lit-css](https://www.npmjs.com/package/vite-plugin-lit-css)** – Enables CSS imports in Lit components.

---

## 🧱 Example Components

### `ds-headline`

```ts
<ds-headline level="h2" size="large">
    Hello World
</ds-headline>
```

Supports dynamic heading levels and sizes using Tailwind classes.

### `ds-button`

```ts
<ds-button variant="primary">Click Me</ds-button>
<ds-button variant="secondary">Cancel</ds-button>
```

Variants styled using Tailwind classes and customizable via props.

---

## ✏️ Custom Styling

CSS is organized under `src/css/`:

-   `main.css`: Core utilities and Tailwind layer.
-   `config/colors.css`: Custom color definitions.

---

## 🧪 Storybook & Chromatic

Storybook stories are colocated with components (`*.stories.ts`). You can run visual regression tests and publish stories with Chromatic.

---

## 📁 Aliases

You can import your CSS using aliases like:

```ts
import style from '@css/main.css';
```

> Make sure your `vite.config.ts` defines the correct path aliases.

---

## 📚 Conventions

-   Each component exports from an `index.ts` file.
-   Web components are defined using `@customElement`.
-   Shared styles are managed using `unsafeCSS`.

---

## 🔧 Scripts

| Script                     | Description                   |
| -------------------------- | ----------------------------- |
| `pnpm run dev`             | Start Vite dev server         |
| `pnpm run build`           | Build project with TypeScript |
| `pnpm run preview`         | Preview built app with Vite   |
| `pnpm run storybook`       | Start Storybook in dev mode   |
| `pnpm run build-storybook` | Build static Storybook site   |

---

## 📄 License

MIT — Feel free to use and adapt.

---

## 👤 Author

Benedikt Grether  
📧 [info@benediktgrether.de](mailto:info@benediktgrether.de)  
🌐 [benediktgrether.de](https://www.benediktgrether.de)
