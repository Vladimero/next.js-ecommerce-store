import { setEnvironmentVariables } from './util/config.mjs';

setEnvironmentVariables();

// for later deployment
const options = {
  ssl: Boolean(process.env.POSTGRES_URL),
};
export default options;
