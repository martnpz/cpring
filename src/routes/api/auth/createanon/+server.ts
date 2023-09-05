import { registerAnon } from "$lib/auth";
import { json } from "@sveltejs/kit";

export async function POST({request}) {
    const password = await request.json();
    console.log("creating password", password.password);
    
    registerAnon(password.password);

    return json({status: 200, body:'OK'});
}