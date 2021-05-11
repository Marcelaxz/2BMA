import ItemLivro from "./ItemLivro";
import classes from './ListaLivros.module.css';

function ListaLivros(props) {
  return (
    <ul className={classes.list}>
      {props.livros.map((livro) => (
        <ItemLivro
          key={livro.id}
          id={livro.id}
          image={livro.image}
          titulo={livro.titulo}
        />
      ))}
    </ul>
  );
}

export default ListaLivros;
