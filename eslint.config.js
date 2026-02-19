// @ts-check

import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import tsEslintParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // Global ignores
  {
    ignores: ['node_modules/', 'dist/', 'dev-dist/', '.astro/', 'public/'],
  },
  // Base ESLint configuration for JS/TS files
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsEslintParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      // Add general JavaScript/TypeScript rules here if needed
    },
  },
  // Astro plugin recommended configuration
  ...eslintPluginAstro.configs.recommended,
  // JSX-a11y plugin recommended configuration
  eslintPluginJsxA11y.flatConfigs.recommended,
  // Specific configuration for .astro files
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        parser: tsEslintParser, // Use TypeScript parser for scripts in Astro files
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      // Add Astro-specific rules here
    },
  },
  // Prettier configuration (must be last to override other formatting rules)
  eslintConfigPrettier, // This disables ESLint rules that conflict with Prettier
];
