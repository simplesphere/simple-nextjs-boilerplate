import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import nextPlugin from '@next/eslint-plugin-next'

export default tseslint.config(
	js.configs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.stylistic,
	{
		ignores: ['**/node_modules/**', '**/.next/', 'out/**'],
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,tsx}'],
		plugins: {
			react: eslintPluginReact,
			'react-hooks': eslintPluginReactHooks,
			'@next/next': nextPlugin,
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: { jsx: true },
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		rules: {
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'no-console': ['error', { allow: ['warn', 'error'] }],
			'@typescript-eslint/no-explicit-any': 'error',
			'max-depth': ['warn', 4],
			'max-lines': ['warn', { max: 400, skipBlankLines: true, skipComments: true }],
			'complexity': ['warn', 20],
			'@next/next/no-html-link-for-pages': 'error',
			'@typescript-eslint/consistent-type-definitions': 'off',
			'@typescript-eslint/no-require-imports': 'off',
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: './tsconfig.json',
			},
		},
	},
)
