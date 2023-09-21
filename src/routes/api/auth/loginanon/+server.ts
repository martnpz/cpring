import { json } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";
import { loginAnon } from "$lib/auth.js";


export async function POST({ request }) {
    const credentials = await request.json();
    const anonId = credentials.loginData.anonId;
    const password = credentials.loginData.anonPassword;

    const isValid = await loginAnon(anonId, password)

    if (isValid) {
        return json({ status: 200, body: 'ok' })
    } else {
        throw error(500, { message: "Invalid login credentials." });
    }
}