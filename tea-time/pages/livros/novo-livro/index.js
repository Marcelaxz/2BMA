import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import CadastroLivro from "../../../components/books/CadastroLivro";

function NovoLivroPage() {
  const router = useRouter();

  async function addLivroHandler(enteredLivroData) {
    const response = await fetch("/api/novo-livro", {
      method: "POST",
      body: JSON.stringify(enteredLivroData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/livros");
  }

  return (
    <Fragment>
      <Head>
        <title>Cadastro de Livro </title>
      </Head>
      <CadastroLivro onAddLivro={addLivroHandler} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}


export default NovoLivroPage;

