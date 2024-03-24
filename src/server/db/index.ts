import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

import { ENV } from "~/env";
import * as schema from "./schema";

export const db = drizzle(
  mysql.createPool({
    uri: ENV.DATABASE_URL,
  }),
  { schema, mode: "default" },
);
