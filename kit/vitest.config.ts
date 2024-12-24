import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Configure Vitest (https://vitest.dev/config/)
  test: {
    alias: {
      '~/': new URL('./src/', import.meta.url).pathname,
    }
  },
});
