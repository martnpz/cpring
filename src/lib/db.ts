import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'cpring';

const client = new MongoClient(url);

export function startMongo(): Promise<MongoClient> {
  console.log('Starting Mongo');
  return client.connect();
}

// Export 'db' as an object.
export default client.db(dbName);
