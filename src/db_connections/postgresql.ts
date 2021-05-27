import { Client } from 'pg';

const initDb = async () => {
  const client = new Client();
  await client.connect();
  return client;
};
const fetchCollections = (client: Client) => {
  client.query(
    "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"
  );
  return;
};
const fetchAllFieldsLazily = (client: Client) => {
  client.query('');
  return;
};
const fetchFieldsLazily = (client: Client) => {
  client.query('');

  return;
};
const editField = (client: Client) => {
  client.query('');

  return;
};
