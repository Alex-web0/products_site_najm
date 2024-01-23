import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import react from "@astrojs/react";

// H E L P  R E S
//
// DOCS: https://docs.astro.build/en/guides/server-side-rendering/
//
// FIX TAILWIND ON SSR: https://stackoverflow.com/questions/73142994/error-cannot-find-module-tailwindcss-next-js-application
//
// ADDING SSR FIREBASE ADAPTER NODE: https://stackoverflow.com/questions/76699640/how-do-i-deploy-astro-ssr-to-firebase-hosting#:~:text=dev's%20correct%20answer%2C%20to%20use,use%20it%20in%20middleware%20mode.
//
// SSR CACHE NO EXIST: https://stackoverflow.com/questions/75971534/does-astro-js-fallback-to-ssr-when-cache-is-not-available
// ssr docs

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
});
