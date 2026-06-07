# TypeScript & React Style Guide

We follow the [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react) and the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), with standard TypeScript adaptations.

## Core Rules
- **Formatting:** Use Prettier for all code formatting.
- **Linting:** Use ESLint with `eslint-config-airbnb-typescript`.
- **Typing:** Strict TypeScript mode is mandatory. Use `interface` for public APIs and object shapes, `type` for unions and primitives. No `any` types allowed.
- **Components:** Use functional components and React Hooks. Avoid class components.
- **Naming Conventions:**
  - `PascalCase` for components, types, and interfaces.
  - `camelCase` for variables, functions, and hooks.
  - `UPPER_SNAKE_CASE` for constants.
- **Exports:** Prefer named exports over default exports, except where frameworks (like Next.js) strictly require default exports.
