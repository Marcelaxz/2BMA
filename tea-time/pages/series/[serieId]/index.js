import { MongoClient, ObjectID } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

import SerieDetalhes from "../../../components/series/SerieDetalhes";
import Comentarios from "../../../components/comments/comentarios";

function SerieDetalhe(props) {
  return (
    <Fragment>
      <Head>
        <title> {props.serieData.titulo} </title>
      </Head>
      <SerieDetalhes
        image={props.serieData.image}
        titulo={props.serieData.titulo}
        nomeD={props.serieData.nomeD}
        elenco = {props.serieData.elenco}
        pais={props.serieData.pais}
        temporada={props.serieData.temporada}
        ano={props.serieData.ano}
      />
      <Comentarios eventId={props.serieData.id} />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://maxDB:2009ç6!14B257@cluster0.dtpd9.mongodb.net/series?retryWrites=true&w=majority"
  );

  const db = client.db();

  const seriesCollection = db.collection("series");

  const series = await seriesCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: series.map((serie) => ({
      params: { serieId: serie._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const serieId = context.params.serieId;

  const client = await MongoClient.connect(
    "mongodb+srv://maxDB:2009ç6!14B257@cluster0.dtpd9.mongodb.net/series?retryWrites=true&w=majority"
  );

  const db = client.db();

  const seriesCollection = db.collection("series");

  const selectedSerie = await seriesCollection.findOne({
    _id: ObjectID(serieId),
  });

  client.close();

  return {
    props: {
      serieData: {
        id: selectedSerie._id.toString(),
        titulo: selectedSerie.titulo,
        nomeD: selectedSerie.nomeD,
        elenco: selectedSerie.elenco,
        pais: selectedSerie.pais,
        temporada: selectedSerie.temporada,
        ano: selectedSerie.ano,
        image: selectedSerie.image,
      },
    },
  };
}

export default SerieDetalhe;
