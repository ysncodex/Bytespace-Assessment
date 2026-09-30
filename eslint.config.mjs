import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const compat = new FlatCompat({ baseDirectory: path.dirname(fileURLToPath(import.meta.url)) });
const config = [
  { ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'] },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // Supplied local cutouts and SVG compositions keep their intrinsic appearance.
      // Below-the-fold images are lazy-loaded; the hero is prioritized explicitly.
      '@next/next/no-img-element': 'off',
    },
  },
];

export default config;
