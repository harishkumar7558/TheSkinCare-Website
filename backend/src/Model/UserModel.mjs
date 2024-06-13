import { client } from "../Config.mjs";

export default async function UserModel(){
     await client.connect();
     let database=coll.db("theSkinCare");
     let collection = database.collection("asserts");
     return collection;

}