import Pool from 'pg-pool';
import { Client, PoolClient } from 'pg';

class postgres {
  currentTable = '';

  user: string;

  password: string;

  host: string;

  port: number;

  private fieldsToFetch = '*';

  client: (Client & PoolClient) | undefined;

  // get fieldsToFetch() {
  //   return this._fieldsToFetch
  // }

  constructor(user: string, password: string, host: string, port: number) {
    this.user = user;
    this.password = password;
    this.host = host;
    this.port = port;
  }

  initDb = () => {
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

  fetchAllFieldsLazily = (client: Client) => {
    client.query('UPDATE ${this.currentTable} set $ ');
    return;
  };

  *fetchFieldsLazily(client: Client,query: Query fieldsToFetch?: string[]) {
    const joinedFieldsToFetch = fieldsToFetch ? fieldsToFetch.join() : '*';
    client.query(``);
    return;
  }

  editField = (
    client: Client,
    fieldName: string,
    newValue: string,
    fieldId: string
  ) => {
    client.query(
      `update dummy_table set ${fieldName}=${newValue} where id=${fieldId}`
    );
  };
}
