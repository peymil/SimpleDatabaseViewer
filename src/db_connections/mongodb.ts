import { Db, MongoClient, Collection } from 'mongodb';
import { Client } from 'pg';
type DbClass = {
  currentColllection: void;
  initDb: () => void;
  fetchCollections: () => void;
  fetchAllFieldsLazily: (n?: number) => void;
  fetchFieldsLazily: (query: void, n?: number) => void;
  editField: (fieldId: string) => void;
};
type MongodbTypes = {
  database: Db;
  collection: Collection;
};
type DbType<Type> = {
  [Property in keyof Type]: boolean;
};
