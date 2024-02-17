module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true, // Ajoutez cette ligne pour permettre l'usage de process.env
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } }, // Vous pouvez aussi utiliser 'detect' ici
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    // Ajoutez ou modifiez vos règles personnalisées ici
  },
}
