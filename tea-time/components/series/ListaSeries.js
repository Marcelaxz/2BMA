import ItemSerie from "./ItemSerie";
import classes from './ListaSeries.module.css';

function ListaSeries(props) {
  return (
    <ul className={classes.list}>
      {props.series.map((serie) => (
        <ItemSerie
          key={serie.id}
          id={serie.id}
          image={serie.image}
          titulo={serie.titulo}
        />
      ))}
    </ul>
  );
}

export default ListaSeries;