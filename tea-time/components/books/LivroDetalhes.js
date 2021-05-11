import classes from './LivroDetalhes.module.css';

function LivroDetalhes(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.titulo} />
      <h1> {props.titulo} </h1>
      <p> <b> Autor(a): </b> {props.nomeD} </p>
      <p> <b> Editora: </b> {props.editora} </p>
      <p> <b> Ano: </b> {props.ano} </p>
      <p> <b> País: </b> {props.pais} </p>
    </section>
  );
}

export default LivroDetalhes;
 