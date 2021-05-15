import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import CadastroSerie from "../../../components/series/CadastroSerie";

function NovaSeriePage() {
  const router = useRouter();

  async function addSerieHandler(enteredSerieData) {
    const response = await fetch("/api/nova-serie", {
      method: "POST",
      body: JSON.stringify(enteredSerieData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/series");
  }

  return (
    <Fragment>
      <Head>
        <title>Cadastro de Série </title>
      </Head>
      <CadastroSerie onAddSerie={addSerieHandler} />
    </Fragment>
  );
}

export default NovaSeriePage;