import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
import Link from "next/link";
import classes from "../../components/books/ItemLivro.module.css";
import ListaLivro from "../../components/books/ListaLivros";

function BookPage(props) {
  return (
    <Fragment>
      <Head>
        <title> Livros </title>
      </Head>
      <div className={classes.actions}>
      <button><Link href="/livros/novo-livro"> Cadastro de Livro </Link></button>
      </div>
      <ListaLivro livros={props.livros} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://maxDB:2009ç6!14B257@cluster0.dtpd9.mongodb.net/livros?retryWrites=true&w=majority"
  );

  const db = client.db();

  const livrosCollection = db.collection("livros");

  const livros = await livrosCollection.find().toArray();

  client.close();

  return {
    props: {
      livros: livros.map((livro) => ({
        titulo: livro.titulo,
        image: livro.image,
        id: livro._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default BookPage;
