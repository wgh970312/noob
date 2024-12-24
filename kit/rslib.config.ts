import { defineConfig } from '@rslib/core';
import path from 'node:path'

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: 'es2021',
      dts: true,
    },
    {
      format: 'cjs',
      syntax: 'es2021',
    },
  ],
  // resolve.alias 对于 TypeScript 项目，你只需要在 tsconfig.json 中配置 compilerOptions.paths 即可，Rsbuild 会自动识别它，不需要额外配置 resolve.alias 字段
});
