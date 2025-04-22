import eslintPluginAstro from 'eslint-plugin-astro';
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: [
      // Build output
      'dist/**/*',
      '**/dist/**/*',

      // Dependencies
      'node_modules/**/*',
      '**/node_modules/**/*',

      // Configuration and cache
      '.astro/**/*',
      '.wrangler/**/*',
      '.github/**/*',
      '.vscode/**/*',
      '.husky/**/*',

      // Static assets
      'public/**/*',

      // System files
      '.DS_Store',
      '*.log',
    ],
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
      quotes: ['error', 'single'],
      indent: ['error', 2, { SwitchCase: 1 }],
    },
  },
];
