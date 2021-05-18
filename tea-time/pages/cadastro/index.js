import CadastroUser from "../../components/cadastro/cadastro-usuario";
import { getSession } from "next-auth/client";

function Cadastro() {
  return <CadastroUser />;
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
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

export default Cadastro;
