import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./ItemSerie.module.css";

function ItemSerie(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/series/" + props.id);
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

export default ItemSerie;
