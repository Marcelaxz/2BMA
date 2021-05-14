import { getSession} from "next-auth/client";
import CadastroUser from "../components/cadastro/cadastro-usuario";

function AuthPage() {
  return <CadastroUser />;
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

export default AuthPage;
