import { getSession } from "next-auth/client";
import { Fragment } from "react";
import Image from "next/image";
import Head from "next/head";
import classes from "./pagina-inicial.module.css";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title> Página Inicial </title>
      </Head>

      <section className={classes.content}>
        <Image
          className={classes.img}
          width={650}
          height={600}
          src="/images/undraw.svg"
        />
        <header className={classes.style}>
          <h2> BOAS VINDAS! </h2>
          <div>
            <p>
              Olá, tudo bem? Seja bem-vindo(a) a nossa pequena comunidade! O Tea
              Time é um site que foi criado com o objetivo de reunir pessoas de
              diversos cantos do país (e quem sabe do mundo!) para compartilhar
              seus principais interesses em séries, livros e/ou filmes e também
              conhecer novos assuntos.
            </p>
            <p>
              Atualmente, o site ainda está em desenvolvimento, portanto as
              funções são limitadas. Por enquanto (e pedimos compreensão), você
              poderá obter informações sobre os itens disponibilizados, realizar
              e ver avaliações, além visualizar os conteúdos curtidos e
              comentados em seu perfil. Uma das funcionalidades também inclui a
              possibilidade de você (sim, você!), cadastrar filmes, livros e
              séries que quiser!
            </p>
            <p>
              Como pode notar, o Tea Time é um site feito com muito carinho para
              que você se sinta acolhido e possa ter uma boa experiência ao
              buscar e compartilhar o que ama. Sendo assim, aproveite e relaxe,
              pois é hora do chá.
            </p>
          </div>
        </header>
      </section>
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

export default HomePage;
