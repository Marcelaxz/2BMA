import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
import Link from "next/link";
import classes from "../../components/movies/ItemFilme.module.css";
import ListaFilme from "../../components/movies/ListaFilmes";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title> Filmes </title>
      </Head>
      <div className={classes.actions}>
      <button><Link href="/filmes/novo-filme"> Cadastro de Filme </Link></button>
      </div>
      <ListaFilme filmes={props.filmes} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://maxDB:2009ç6!14B257@cluster0.dtpd9.mongodb.net/filmes?retryWrites=true&w=majority"
  );

  const db = client.db();

  const filmesCollection = db.collection("filmes");

  const filmes = await filmesCollection.find().toArray();

  client.close();

  return {
    props: {
      filmes: filmes.map((filme) => ({
        titulo: filme.titulo,
        image: filme.image,
        id: filme._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
