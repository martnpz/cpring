import { json } from '@sveltejs/kit'
import db from '$lib/db'


export async function GET() {
    const collection = db.collection('cposts');
    const cposts = await collection.find().toArray();

  return json(cposts);
}