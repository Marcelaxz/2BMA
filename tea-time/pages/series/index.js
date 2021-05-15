import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
import Link from "next/link";
import classes from "../../components/series/ItemSerie.module.css";
import ListaSerie from "../../components/series/ListaSeries";

function SeriePage(props) {
  return (
    <Fragment>
      <Head>
        <title> Séries </title>
      </Head>
      <div className={classes.actions}>
      <button><Link href="/series/nova-serie"> Cadastro de Série </Link></button>
      </div>
      <ListaSerie series={props.series} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://maxDB:2009ç6!14B257@cluster0.dtpd9.mongodb.net/series?retryWrites=true&w=majority"
  );

  const db = client.db();

  const seriesCollection = db.collection("series");

  const series = await seriesCollection.find().toArray();

  client.close();

  return {
    props: {
      series: series.map((serie) => ({
        titulo: serie.titulo,
        image: serie.image,
        id: serie._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default SeriePage;
