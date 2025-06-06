import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import parserTypescript from '@typescript-eslint/parser'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginPrettier from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.Config[]} */


export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parser: parserTypescript
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      prettier: pluginPrettier,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-interface': 'off'
    }
  }
]
