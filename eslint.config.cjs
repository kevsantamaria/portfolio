import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import astro from "eslint-plugin-astro";
import tailwind from "eslint-plugin-tailwindcss";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  astro.configs.recommended,
  {
    plugins: {
      react,
      tailwindcss: tailwind,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "tailwindcss/classnames-order": "warn",
    },
  },
  prettierConfig,
];
