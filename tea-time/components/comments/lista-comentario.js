import classes from "./lista-comentario.module.css";
import CommentIcon from "../ui/icons/comment-icon";

function ListaComentario(props) {
  const { items } = props;

  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item._id}>
          <p>{item.texto}</p>
          <div>
            <address>
              {item.nome}
              <span className={classes.icon}>  
                <CommentIcon />
              </span>
            </address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListaComentario;
