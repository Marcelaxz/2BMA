import classes from './FilmeDetalhes.module.css';

function FilmeDetalhes(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.titulo} />
      <h1> {props.titulo} </h1>
      <p> <b> Diretor: </b> {props.nomeD} </p>
      <p> <b> Elenco: </b> {props.elenco} </p>
      <p> <b> País: </b> {props.pais} </p>
    </section>
  );
}

export default FilmeDetalhes;
 