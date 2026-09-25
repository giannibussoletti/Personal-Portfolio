import { defineConfig } from "vite"
import react, { reactCompilerPreset } from "@vitejs/plugin-react"
import babel from "@rolldown/plugin-babel"
import { beasties } from "vite-plugin-beasties"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    beasties({
      options: {
        preload: "swap",
        pruneSource: true,
        inlineThreshold: 4000,
      },
    }),
  ],
})
