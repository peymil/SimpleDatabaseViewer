import Pool from 'pg-pool';
import { Client, PoolClient } from 'pg';

class Postgres {
  currentTable = '';

  user: string;

  password: string;

  host: string;

  port: number;

  client: (Client & PoolClient) | undefined;
  // get fieldsToFetch() {
  //   return this._fieldsToFetch
  // }

  constructor(user: string, password: string, host: string, port: number) {
    this.user = user;
    this.password = password; // that is unsecure. Change that later
    this.host = host;
    this.port = port;
  }

  initDb = async () => {
    const { host, user, password, port } = this;
    const client = await new Pool({
      host,
      user,
      password,
      port,
    }).connect();
    this.client = client;
  };

  selectTable = async (tableName: string) => {
    this.currentTable = tableName;
  };

  fetchTables = async (client: Client) => {
    const result = await client.query(
      "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"
    );
    return result;
  };

  fetchAllFieldsLazily = async (client: Client, fieldsToFetch?: string[]) => {
    const joinedFieldsToFetch = fieldsToFetch ? fieldsToFetch.join() : '*';
    const result = client.query(
      `SELECT ${joinedFieldsToFetch} FROM ${this.currentTable}`
    );
    return result;
  };

  async fetchFieldsLazily(
    client: Client,
    filter: { [key: string]: string },
    range: string,
    fieldsToFetch?: string[]
  ) {
    const [min, max] = range.split('-');
    const joinedFieldsToFetch = fieldsToFetch ? fieldsToFetch.join() : '*';
    const strFilters = Object.entries(filter)
      .map((key, value) => `${key}=${value}`)
      .join();
    const result = await client.query(
      `SELECT ${joinedFieldsToFetch} FROM ${this.currentTable} where ${strFilters} limit ${min},${max}`
    );
    return result;
  }

  editField = async (
    client: Client,
    fieldName: string,
    newValue: string,
    fieldId: string
  ) => {
    const result = client.query(
      `update dummy_table set ${fieldName}=${newValue} where id=${fieldId}`
    );
    return result;
  };
}
export default Postgres;
// interface Db<> {
//   initDb: () => Promise<{}>;
//   selectTable: () => Promise<{}>;
//   fetchTables: () => Promise<{}>;
//   fetchAllFieldsLazily: () => Promise<{}>;
//   editField: () => Promise<{}>;
// }
