import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://maxDB:2009ç6!14B257@cluster0.dtpd9.mongodb.net/livros?retryWrites=true&w=majority"
    );

    const db = client.db();

    const livrosCollection = db.collection("livros");

    const result = await livrosCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Livro Cadastrado" });
  }
}

export default handler;

