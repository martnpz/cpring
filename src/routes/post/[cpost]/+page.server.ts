import type { PageServerLoad } from "./$types";
import db from "$lib/db";
import { ObjectId } from "mongodb";

export const load = (async (urlData) => {
    const cpostCollection = db.collection('cposts');
    const cpostData = await cpostCollection.findOne({'_id': new ObjectId(urlData.params.cpost)});
    
    // Serialize the cpost data.
    const cpost = {
        id: cpostData?._id.toString(),
        title: cpostData?.title,
        body: cpostData?.body,
        image: cpostData?.image
    };

    return cpost;
}) satisfies PageServerLoad;