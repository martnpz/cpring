import { registerAnon } from "$lib/auth";
import { json } from "@sveltejs/kit";

export async function POST({request}) {
    const password = await request.json();

    try {
        await registerAnon(password.password);
        return json({status: 200, body:'OK'});
    } catch (error) {
        console.log(`Failed to register. Error: ${error}`);
        return json({status: 500, body: error});
    }
}