import ItemFilme from "./ItemFilme";
import classes from './ListaFilmes.module.css';

function ListaFilmes(props) {
  return (
    <ul className={classes.list}>
      {props.filmes.map((filme) => (
        <ItemFilme
          key={filme.id}
          id={filme.id}
          image={filme.image}
          titulo={filme.titulo}
        />
      ))}
    </ul>
  );
}

export default ListaFilmes;
