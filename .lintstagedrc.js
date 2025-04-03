module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => [
    'bun run typecheck',
    'bun run format:write',
    'bun run build',
  ],

  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js)': () => ['bun run lint:strict', 'bun run format:write'],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': () => 'bun run format:write',
}
