import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://maxDB:2009ç6!14B257@cluster0.dtpd9.mongodb.net/series?retryWrites=true&w=majority"
    );

    const db = client.db();

    const seriesCollection = db.collection("series");

    const result = await seriesCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Serie Cadastrada" });
  }
}

export default handler;
