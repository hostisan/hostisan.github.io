# Hostisan Website & Documentation

The official website and documentation portal for [Hostisan](https://github.com/hostisan/hostisan) — the modern, lightweight, and secure Linux web hosting control panel.

Live site: [https://hostisan.github.io](https://hostisan.github.io)

## Overview

- **Marketing & Features**: Overview of Hostisan capabilities, architecture, and feature comparisons.
- **Documentation**: Comprehensive Diátaxis-based guides:
  - **Tutorials**: Step-by-step guides for beginners (e.g., launching your first website).
  - **How-to Guides**: Action-oriented recipes for common tasks (SSL, email, backups, installation).
  - **Reference**: Detailed technical specifications and CLI command documentation.
  - **Explanation**: In-depth architecture overviews and design rationale.
- **Blog**: Updates, release notes, and technical deep-dives.

## Tech Stack

- **Framework**: [Astro 7](https://astro.build)
- **Documentation**: [Starlight](https://starlight.astro.build)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **UI Components**: [React 19](https://react.dev)
- **Deployment**: [GitHub Pages](https://pages.github.com)

## Local Development

### Prerequisites

- Node.js 24+
- pnpm 8.15+

### Installation & Running

```bash
# Install dependencies
pnpm install

# Start local development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Quality & Linting

```bash
# Run all linters and type checks
pnpm lint

# Run unit tests
pnpm test
```

## Contributing

Please report documentation issues or submit improvements via pull requests to the [hostisan.github.io repository](https://github.com/hostisan/hostisan.github.io).

## License

[MIT](LICENSE)
