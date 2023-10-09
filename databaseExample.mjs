// this file is only for node.js testing purposes

import postgres from 'postgres';
import { setEnvironmentVariables } from './util/config.mjs';

setEnvironmentVariables();

const sql = postgres();

console.log(
  await sql`
  SELECT * FROM items
  `,
);
