import { MongoClient, ObjectId } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'cpring';

const client = new MongoClient(url);
const collection = client.db(dbName).collection('cposts');

export function createPost(data: any) {
    collection.insertOne(data)
}

export function deletePost(postId: any) {
    collection.deleteOne({ "_id" : new ObjectId(postId) });
    
}

// Export 'db' as an object.
export default client.db(dbName);
