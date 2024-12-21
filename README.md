# SimpleSphere

A modern, feature-rich Next.js boilerplate with TypeScript, Tailwind CSS, and comprehensive tooling for code quality.

## Features

- [Next.js 15.0.3](https://nextjs.org/) - The React framework for production
- [React 19 (RC)](https://reactjs.org/) - Latest React features
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization for Next.js
- [ESLint](https://eslint.org/) - Pluggable JavaScript linter
- [Prettier](https://prettier.io/) - Opinionated code formatter
- [Husky](https://typicode.github.io/husky/#/) - Git hooks made easy
- [lint-staged](https://github.com/okonet/lint-staged) - Run linters on git staged files
- [commitlint](https://commitlint.js.org/) - Lint commit messages
- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) - Analyze bundle sizes

## Prerequisites

- Node.js 20.x or later
- Yarn 1.22.0 or later (npm is not supported)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/simplesphere.git
   cd simplesphere
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env.local` and adjust the variables as needed.

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run all linting checks
- `yarn lint:check` - Run ESLint check
- `yarn lint:fix` - Fix ESLint issues
- `yarn lint:typecheck` - Run TypeScript checks
- `yarn prettier:check` - Check code formatting
- `yarn prettier` - Fix code formatting
- `yarn clean` - Clean build artifacts and dependencies
- `yarn analyze` - Analyze bundle sizes

## Project Structure

```
simplesphere/
├── src/
│   ├── app/
│   ├── assets/
│   ├── constants/
│   ├── i18n/
│   ├── messages/
│   ├── types/
│   └── middleware.ts
├── .husky/
├── public/
├── .eslintrc.json
├── .prettierrc
├── commitlint.config.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Code Quality Tools

### ESLint
ESLint is configured with strict TypeScript and React rules. Configuration can be found in `.eslintrc.json`.

### Prettier
Code formatting is handled by Prettier. Configuration is in `.prettierrc`.

### lint-staged
Automatically runs linters on staged files before commit. Configuration is in `package.json`.

### commitlint
Enforces conventional commit messages. Configuration is in `commitlint.config.ts`.

### Husky
Manages Git hooks for running lint-staged and commitlint. Hooks are in the `.husky` directory.

## Internationalization

This boilerplate uses `next-intl` for internationalization. Locale files are stored in the `src/messages/` directory.

## Bundle Analysis

To analyze bundle sizes, run:
```bash
yarn analyze
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.