import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), "");
  
  return {
    tanstackStart: {
      server: { entry: "server" },
    },
    vite: {
      define: {
        "process.env.AIRTABLE_PAT": JSON.stringify(env.AIRTABLE_PAT),
        "process.env.AIRTABLE_BASE_ID": JSON.stringify(env.AIRTABLE_BASE_ID),
        "process.env.SUPABASE_PROJECT_ID": JSON.stringify(env.SUPABASE_PROJECT_ID),
        "process.env.SUPABASE_PUBLISHABLE_KEY": JSON.stringify(env.SUPABASE_PUBLISHABLE_KEY),
        "process.env.SUPABASE_URL": JSON.stringify(env.SUPABASE_URL),
      },
    },
  };
});