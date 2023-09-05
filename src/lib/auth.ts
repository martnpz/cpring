import { ObjectId } from "mongodb";
import db from "./db";

import { hashSync, compare }  from "bcrypt";

interface Anon {
    _id: ObjectId;
    type: string;
    passwordHash: string;
    isAdmin: boolean;
}

export async function registerAnon(password: string) {
    const anons = db.collection<Anon>("anons");
    
    const  hashedPassword = hashSync(password, 10);

    const newAnon  = {
        _id: new ObjectId(),
        type: "gordo",
        passwordHash: hashedPassword,
        isAdmin: false
    };

    console.log(`New anon id: ${newAnon._id}\nPassword hash: ${newAnon.passwordHash}` );

    await anons.insertOne(newAnon);
}

export async function loginAnon(anonId: string, password: string) {

    if (!ObjectId.isValid(anonId)) {
        console.log("Invalid ObjectId");
        return null; // or handle the error in your preferred way
    }
    
    const anons = db.collection<Anon>("anons");

    const anon = await anons.findOne({_id : new ObjectId(anonId)});

    if (!anon || !await compare(password, anon.passwordHash)) {
        console.log("Invalid credentials");
    } else {
        console.log("Anon is logged");
        
    }

    return anon;
}