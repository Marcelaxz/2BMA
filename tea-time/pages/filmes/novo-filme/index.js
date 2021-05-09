import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import CadastroFilme from "../../../components/movies/CadastroFilme";

function NovoFilmePage() {
  const router = useRouter();

  async function addFilmeHandler(enteredFilmeData) {
    const response = await fetch("/api/novo-filme", {
      method: "POST",
      body: JSON.stringify(enteredFilmeData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/filmes");
  }

  return (
    <Fragment>
      <Head>
        <title>Cadastro de Filme </title>
      </Head>
      <CadastroFilme onAddFilme={addFilmeHandler} />
    </Fragment>
  );
}

export default NovoFilmePage;
