import { Db, MongoClient } from "mongodb"

const uri = '0.0.0.0:27017'
const dbName = 'cpring'

let client: MongoClient | undefined;

export async function connectToDatabase(): Promise<Db> {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client.db(dbName);
}