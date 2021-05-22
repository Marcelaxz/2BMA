import { MongoClient, ObjectID } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

import FilmeDetalhes from "../../../components/movies/FilmeDetalhes";
import Comentarios from "../../../components/comments/comentarios";

function FilmeDetalhe(props) {
  return (
    <Fragment>
      <Head>
        <title> {props.filmeData.titulo} </title>
      </Head>
      <FilmeDetalhes
        image={props.filmeData.image}
        titulo={props.filmeData.titulo}
        nomeD={props.filmeData.nomeD}
        elenco={props.filmeData.elenco}
        pais={props.filmeData.pais}
        anoF={props.filmeData.anoF}
      />
      <Comentarios eventId={props.filmeData.id} />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://maxDB:2009ç6!14B257@cluster0.dtpd9.mongodb.net/filmes?retryWrites=true&w=majority"
  );

  const db = client.db();

  const filmesCollection = db.collection("filmes");

  const filmes = await filmesCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: filmes.map((filme) => ({
      params: { filmeId: filme._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const filmeId = context.params.filmeId;

  const client = await MongoClient.connect(
    "mongodb+srv://maxDB:2009ç6!14B257@cluster0.dtpd9.mongodb.net/filmes?retryWrites=true&w=majority"
  );

  const db = client.db();

  const filmesCollection = db.collection("filmes");

  const selectedFilme = await filmesCollection.findOne({
    _id: ObjectID(filmeId),
  });

  client.close();

  return {
    props: {
      filmeData: {
        id: selectedFilme._id.toString(),
        titulo: selectedFilme.titulo,
        nomeD: selectedFilme.nomeD,
        elenco: selectedFilme.elenco,
        pais: selectedFilme.pais,
        anoF: selectedFilme.anoF,
        image: selectedFilme.image,
      },
    },
  };
}

export default FilmeDetalhe;
