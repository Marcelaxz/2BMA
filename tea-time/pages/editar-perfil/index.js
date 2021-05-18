import EditPerfil from "../../components/editar-perfil/editar-perfil";
import { getSession } from "next-auth/client";

function PerfilEdit() {
  return (
    <div>
      <EditPerfil />
    </div>
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

export default PerfilEdit;
