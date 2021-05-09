import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../../components/comments/db-util";

async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao conectar com o Banco de Dados." });
    return;
  }

  if (req.method === "POST") {
    const { nome, texto } = req.body;

    if (!nome || nome.trim() === "" || !texto || texto.trim() === "") {
      res.status(422).json({ message: "Entrada Inválida." });
      client.close();
      return;
    }

    const newComment = {
      nome,
      texto,
      eventId,
    };

    let result;

    try {
      result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;
      res
        .status(201)
        .json({ message: "Comentário Adicionado.", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Falha ao inserir comentário." });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(
        client,
        "comments",
        { _id: -1 },
        { eventId: eventId }
      );
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Falha ao recuperar comentários." });
    }
  }

  client.close();
}

export default handler;
