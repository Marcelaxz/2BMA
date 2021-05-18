import LogarUser from '../components/signin/logar-usuario'
import { getSession } from "next-auth/client";


function StartingPageContent() {
  return (
    <section>
      <LogarUser />
    </section>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/pagina-inicial",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default StartingPageContent;
