import { defineConfig } from "nitro"

// https://nitro.build/config
export default defineConfig({
  compatibilityDate: "latest",
  serverDir: "server",
  imports: false,
  modules: ["workflow/nitro"],
  rollupConfig: {
    external: ["@opentelemetry/api"],
  },
});
