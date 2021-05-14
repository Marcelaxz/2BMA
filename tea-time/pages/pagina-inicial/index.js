import { getSession } from "next-auth/client";

function HomePage() {
    return (
      <section>
        <h3> Página Inicial </h3>
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
  

  export default HomePage;