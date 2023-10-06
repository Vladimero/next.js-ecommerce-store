import { headers } from 'next/headers';
import postgres, { Sql } from 'postgres';
import { setEnvironmentVariables } from '../util/config.js';

setEnvironmentVariables();

/*
const sql = postgres({
  transform: {
    ...postgres.camel,
    undefined: null,
  },
});
*/

// set a global variable for browser and node.js in the back for connecting one time to the database --> copy pasted from:https://github.com/vercel/next.js/discussions/50695
declare module globalThis {
  let postgresSqlClient: Sql;
}

function connectOneTimeToDatabase() {
  if (!('postgresSqlClient' in globalThis)) {
    globalThis.postgresSqlClient = postgres();
  }

  return ((
    ...sqlParameters: Parameters<typeof globalThis.postgresSqlClient>
  ) => {
    headers();
    return globalThis.postgresSqlClient(...sqlParameters);
  }) as typeof globalThis.postgresSqlClient;
}

export const sql = connectOneTimeToDatabase();

/* is written in items.ts file
export async function getAllItemsFromDatabase() {
  const items = await sql`
  SELECT * FROM items
  `;
  return items;
}
*/
