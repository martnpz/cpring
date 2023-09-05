import { loginAnon } from "$lib/auth";
import { json } from "@sveltejs/kit";

export async function POST({request}) {
    const credentials = await request.json();
    console.log("loggin anon:", credentials);
    console.log("id:", credentials.loginData.anonId);
    console.log("password:", credentials.loginData.anonPassword);
    
    const anonId = credentials.loginData.anonId;
    const password = credentials.loginData.anonPassword;
    
    loginAnon(anonId, password);

    return json({status: 200, body:'OK'});
}