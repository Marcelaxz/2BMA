import UsuarioPage from "../../components/perfil/perfil-usuario";
import { getSession } from "next-auth/client";

function ProfilePage() {
  return (
    <section>
      <UsuarioPage />
    </section>
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

export default ProfilePage;
