import { config as dotenvConfig } from "dotenv";
import { join } from "path";

dotenvConfig({ path: join(process.cwd(), ".env") });

const config = {
  PORT: process.env.PORT,
  DB_URI: process.env.DB_URI,
  NODE_ENV: process.env.NODE_ENV,
};
export default config;
