import { nextJsConfig } from '@repo/eslint-config/next-js'

/** @type {import("eslint").Linter.Config} */
const eslintConfig = [
  ...nextJsConfig,
  {
    ignores: ['.next/'],
  },
]

export default eslintConfig
