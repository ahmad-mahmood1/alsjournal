import { type Config } from "drizzle-kit";
import { ENV } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  out: "./src/server/db",
  driver: "mysql2",
  dbCredentials: {
    uri: ENV.DATABASE_URL,
  },
  tablesFilter: ["jio_*"],
} satisfies Config;
