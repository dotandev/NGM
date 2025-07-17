import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];

const eslintConfig = [
  ...compat.config({
    extends: ['next', 'next/core-web-vitals', 'next/typescript', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
    rules: {
      'react/no-unescaped-entities': 'warn',
      '@next/next/no-page-custom-font': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',  
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  }),
]

export default eslintConfig;
