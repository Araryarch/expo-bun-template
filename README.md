# Expo Bun Template

A modern React Native starter template with Bun.js, Gluestack UI, and essential development tools preconfigured.

## Created By

This template was created by [Araryarch](https://github.com/Araryarch/expo-bun-template.git).

## Features

- ⚡ **Bun.js** - Faster runtime, package manager, and test runner
- 🎨 **Gluestack UI** - Beautiful, accessible UI components
- 📱 **Expo** - Cross-platform React Native development
- 🐶 **Husky** - Git hooks made easy
- 📝 **Commitlint** - Enforce conventional commit messages
- 🧹 **ESLint** - JavaScript/TypeScript linting
- 🛠 **Preconfigured Tooling** - Batteries included setup

## Prerequisites

- [Bun.js](https://bun.sh/) (v1.0.0 or later)
- Node.js (v18 or later) - for Expo CLI if not using Bun
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (optional)

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Araryarch/expo-bun-template.git
   cd expo-bun-template
   ```

2. **Install dependencies**:

   ```bash
   bun install
   ```

3. **Start the development server**:

   ```bash
   bun expo start
   ```

   Alternatively, if you have Expo CLI installed globally:

   ```bash
   expo start
   ```

## Scripts

| Command       | Description                             |
| ------------- | --------------------------------------- |
| `bun start`   | Starts the Expo development server      |
| `bun lint`    | Runs ESLint on your code                |
| `bun test`    | Runs tests (configure your test runner) |
| `bun prepare` | Sets up Husky git hooks                 |
| `bun build`   | Builds the app for production           |

## Project Structure

```
expo-bun-template/
├── assets/               # Static assets (images, fonts, etc.)
├── components/           # Reusable UI components
├── app/                  # Main application entry and navigation
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and helpers
├── screens/              # Application screens
├── .eslintrc.js          # ESLint configuration
├── .commitlintrc.js      # Commitlint configuration
├── app.json              # Expo configuration
├── bun.lockb             # Bun lockfile
├── package.json          # Project dependencies and scripts
└── README.md             # You are here
```

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Commit messages must follow this format:

```
type(scope?): subject
```

Examples:

- `feat(home): add new welcome banner`
- `fix(button): correct padding issue`
- `docs: update installation instructions`

## Included UI Components

The template comes with several pre-built Gluestack UI components:

- Button
- Text
- Input
- Card
- Avatar
- And more...

You can find these in the `components` directory and customize them as needed.

## Why This Stack?

- **Bun.js**: Offers significantly faster installs and runtime compared to traditional Node/npm/yarn setups.
- **Gluestack UI**: Provides beautiful, accessible components that follow best practices out of the box.
- **Husky + Commitlint**: Ensures consistent commit messages and better project history.
- **ESLint**: Catches potential issues early and enforces code style.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
