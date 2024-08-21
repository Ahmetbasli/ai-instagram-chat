import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import nextPlugin from '@next/eslint-plugin-next'
import sonarjs from 'eslint-plugin-sonarjs'

export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'src/@shadcn'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
      'plugin:@next/next/recommended',
      'plugin:sonarjs/recommended',
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@next/next': nextPlugin,
      sonarjs: sonarjs,
      'only-warn': { meta: { name: 'only-warn' } },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'max-lines': ['error', { max: 200 }],
      '@typescript-eslint/no-explicit-any': 'off',
      'react-hooks/exhaustive-deps': 'off',
      '@next/next/no-img-element': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: 'export',
          next: '*',
        },
      ],
    },
  },
)

// {
//   "env": {
//     "browser": true,
//     "es2022": true
//   },
//   "plugins": ["@typescript-eslint/eslint-plugin", "only-warn"],
//   "extends": [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:react-hooks/recommended",
//     "plugin:prettier/recommended",
//     "plugin:@next/next/recommended",
//     "plugin:sonarjs/recommended"
//   ],
//   "parser": "@typescript-eslint/parser",
//   "parserOptions": {
//     "ecmaVersion": "latest",
//     "sourceType": "module"
//   },
//   "rules": {
//     "max-lines": [
//       "error",
//       {
//         "max": 200
//       }
//     ],
//     "@typescript-eslint/no-explicit-any": "off",
//     "react-hooks/exhaustive-deps": "off",
//     "@next/next/no-img-element": "off",
//     "prettier/prettier": [
//       "error",
//       {
//         "endOfLine": "auto"
//       }
//     ],
//     "padding-line-between-statements": [
//       "error",
//       {
//         "blankLine": "always",
//         "prev": "export",
//         "next": "*"
//       }
//     ]
//   },
//   "ignorePatterns": ["src/@shadcn"]
// }
