import boundaries from "eslint-plugin-boundaries";
import nextPlugin from "@next/eslint-plugin-next";
import oxlint from "eslint-plugin-oxlint";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "dist/**",
      "coverage/**",
      "**/http/generated/**",
    ],
  },
  ...tseslint.configs.recommended,
  oxlint.configs["flat/recommended"],
  {
    plugins: {
      "@next/next": nextPlugin,
      boundaries,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
    },
  },
  {
    settings: {
      "boundaries/elements": [
        { type: "core", pattern: "src/core/**/*" },
        { type: "infra", pattern: "src/infra/**/*" },
        { type: "http", pattern: "src/http/**/*" },
        { type: "presentation-ui", pattern: "src/presentation/ui/**/*" },
        { type: "presentation-pattern", pattern: "src/presentation/pattern/**/*" },
        { type: "presentation-layouts", pattern: "src/presentation/layouts/**/*" },
        { type: "presentation-features", pattern: "src/presentation/features/**/*" },
        { type: "presentation-providers", pattern: "src/presentation/providers/**/*" },
        { type: "app", pattern: "src/app/**/*" },
        { type: "mocks", pattern: "src/mocks/**/*" },
      ],
      "boundaries/ignore": ["**/*.spec.ts", "**/*.spec.tsx", "**/__specs__/**", "**/__integration__/**"],
    },
    rules: {
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            { from: "core", allow: ["core"] },
            { from: "infra", allow: ["core", "infra"] },
            { from: "http", allow: ["core", "infra", "http"] },
            { from: "presentation-ui", allow: ["presentation-ui"] },
            {
              from: "presentation-pattern",
              allow: ["core", "infra", "presentation-ui", "presentation-pattern"],
            },
            {
              from: "presentation-layouts",
              allow: [
                "core",
                "infra",
                "presentation-ui",
                "presentation-pattern",
                "presentation-layouts",
              ],
            },
            {
              from: "presentation-features",
              allow: [
                "core",
                "infra",
                "http",
                "presentation-ui",
                "presentation-pattern",
                "presentation-features",
              ],
            },
            {
              from: "presentation-providers",
              allow: [
                "core",
                "infra",
                "http",
                "presentation-ui",
                "presentation-pattern",
                "presentation-providers",
              ],
            },
            {
              from: "app",
              allow: [
                "core",
                "infra",
                "http",
                "presentation-ui",
                "presentation-pattern",
                "presentation-layouts",
                "presentation-features",
                "presentation-providers",
                "app",
              ],
            },
            {
              from: "mocks",
              allow: [
                "core",
                "infra",
                "http",
                "mocks",
                "presentation-features",
              ],
            },
          ],
        },
      ],
    },
  },
);
