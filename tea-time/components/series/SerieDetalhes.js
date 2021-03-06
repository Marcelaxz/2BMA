import classes from './SerieDetalhes.module.css';
import Rating from '@material-ui/lab/Rating';

function SerieDetalhes(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.titulo} />
      <h1> {props.titulo} </h1>
      <p> <b> Diretor: </b> {props.nomeD} </p>
      <p> <b> Elenco: </b> {props.elenco} </p>
      <p> <b> País: </b> {props.pais} </p>
      <p> <b> Temporadas: </b> {props.temporada} </p>
      <p> <b> Ano: </b> {props.ano} </p>
      <Rating />
    </section>
  );
}

export default SerieDetalhes;