import { deletePost } from "$lib/db";
import { json } from "@sveltejs/kit";

export async function POST({request}){
    const postId = await request.json();
    deletePost(postId)

    return json({status: 200, body: "Success"})
}