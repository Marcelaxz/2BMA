import { MongoClient, ObjectID } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

import LivroDetalhes from "../../../components/books/LivroDetalhes";
import Comentarios from "../../../components/comments/comentarios";

function LivroDetalhe(props) {
  return (
    <Fragment>
      <Head>
        <title> {props.livroData.titulo} </title>
      </Head>
      <LivroDetalhes
        image={props.livroData.image}
        titulo={props.livroData.titulo}
        nomeD={props.livroData.nomeD}
        editora={props.livroData.editora}
        ano={props.livroData.ano}
        pais={props.livroData.pais}
      />
      <Comentarios eventId={props.livroData.id} />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://maxDB:2009ç6!14B257@cluster0.dtpd9.mongodb.net/livros?retryWrites=true&w=majority"
  );

  const db = client.db();

  const livrosCollection = db.collection("livros");

  const livros = await livrosCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: livros.map((livro) => ({
      params: { livroId: livro._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const livroId = context.params.livroId;

  const client = await MongoClient.connect(
    "mongodb+srv://maxDB:2009ç6!14B257@cluster0.dtpd9.mongodb.net/livros?retryWrites=true&w=majority"
  );

  const db = client.db();

  const livrosCollection = db.collection("livros");

  const selectedLivro = await livrosCollection.findOne({
    _id: ObjectID(livroId),
  });

  client.close();

  return {
    props: {
      livroData: {
        id: selectedLivro._id.toString(),
        titulo: selectedLivro.titulo,
        nomeD: selectedLivro.nomeD,
        editora: selectedLivro.editora,
        ano: selectedLivro.ano,
        pais: selectedLivro.pais,
        image: selectedLivro.image,
      },
    },
  };
}

export default LivroDetalhe;
