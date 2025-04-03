import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

// Determine the current file and directory paths
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Create a new FlatCompat instance with the current base directory
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {},
})

// Build the ESLint config using `compat.extends` and the required ESLint rules for React Native
const eslintConfig = [
  // Use the basic ESLint configuration for React Native and React
  ...compat.extends(
    'eslint:recommended', // Basic ESLint recommended rules
    'plugin:react/recommended', // React recommended rules
    'plugin:react-native/all', // React Native rules
  ),

  // Additional ignores for files that shouldn't be linted
  {
    ignores: [
      '**/.lintstagedrc.js',
      '**/tailwind.config.js',
      '**/.prettierrc.js',
    ],
  },
]

export default eslintConfig
