// src/lib/dbConnect.js
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.uhlwwqt.mongodb.net/?appName=Cluster0`;

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

const dbConnect = async (collectionName) => {
  const client = await clientPromise;
  const db = client.db("care-house");
  return db.collection(collectionName);
};

export default dbConnect;
