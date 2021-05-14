import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://maxDB:2009ç6!14B257@cluster0.dtpd9.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
