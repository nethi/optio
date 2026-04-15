import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    env: {
      OPTIO_AUTH_DISABLED: "true",
    },
    coverage: {
      enabled: !!process.env.CI,
      provider: "v8",
      reporter: ["text", "json-summary", "json"],
      reportsDirectory: "./coverage",
      include: ["src/**/*.ts"],
      exclude: ["src/**/*.test.ts", "src/**/*.spec.ts", "src/db/migrations/**", "src/index.ts"],
      thresholds: {
        lines: 50,
        branches: 65,
        functions: 50,
        statements: 50,
      },
    },
  },
});
