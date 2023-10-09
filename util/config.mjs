import { readFileSync } from 'node:fs';
import dotenv from 'dotenv';

// copy pasted environment function from: https://github.com/rolodato/dotenv-safe/issues/128#issuecomment-1383176751
export function setEnvironmentVariables() {
  dotenv.config();

  const unconfiguredEnvVars = Object.keys(
    dotenv.parse(readFileSync('./.env.example')),
  ).filter((exampleKey) => !process.env[exampleKey]);

  if (unconfiguredEnvVars.length > 0) {
    throw new Error(
      `.env.example environment ${
        unconfiguredEnvVars.length > 1 ? 'variables' : 'variable'
      } ${unconfiguredEnvVars.join(', ')} not configured in .env file`,
    );
  }
}
