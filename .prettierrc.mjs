// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  printWidth: 80,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
