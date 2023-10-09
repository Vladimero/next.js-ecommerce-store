import { Sql } from 'postgres';

export type Item = {
  id: number;
  name: string;
  price: string;
  description: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE items (
       id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
       name varchar(30) NOT NULL,
       price varchar(30) NOT NULL,
       description varchar(100) NOT NULL
    );
  `;
}

export async function down(sql: Sql) {
  await sql`
     DROP TABLE items
  `;
}
