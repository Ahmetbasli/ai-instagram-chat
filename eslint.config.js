import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended,

    "plugin:prettier/recommended"

    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
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
