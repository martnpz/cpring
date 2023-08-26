import { createPost } from '$lib/db';
import { json } from '@sveltejs/kit';

export async function POST({request}) {
    try {
        const formData = await request.json(); // Use the json function from @sveltejs/kit
        const result = createPost(formData);
        return json({ status: 200, result });

    } catch (error) {
        return json({ status: 500, error: 'An error occurred while creating the post.' });

    }
}