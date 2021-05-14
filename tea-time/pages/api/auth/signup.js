import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;
  const { nome, dataN, estado, cidade, email, user, password } = data;

  if (
    !nome ||
    nome.trim() === "" ||
    !dataN ||
    dataN.trim() === "" ||
    !estado ||
    estado.trim() === "" ||
    !cidade ||
    cidade.trim() === "" ||
    !email ||
    !email.includes("@") ||
    !user ||
    user.trim() === "" ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        "Inserção incorreta de dados. A senha deve possuir, pelo menos, 7 caractéres.",
    });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const existingUser = await db.collection("users").findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: "Usuário já cadastrado." });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection("users").insertOne({
    nome: nome,
    dataN: dataN,
    estado: estado,
    cidade: cidade,
    email: email,
    user: user,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Usuário criado" });
  client.close();
}

export default handler;
