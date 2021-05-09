import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./ItemFilme.module.css";

function ItemFilme(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/filmes/" + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.titulo} />
        </div>
        <div className={classes.content}>
          <h3 onClick={showDetailsHandler}>{props.titulo}</h3>
        </div>
      </Card>
    </li>
  );
}

export default ItemFilme;
