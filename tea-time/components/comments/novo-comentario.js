import { useRef, useState } from "react";
import classes from "./novo-comentario.module.css";

function NovoComentario(props) {
  const [isInvalid, setIsInvalid] = useState(false);

  const nomeInputRef = useRef();
  const comentarioInputRef = useRef();

  function comentariotHandler(event) {
    event.preventDefault();

    const enteredNome = nomeInputRef.current.value;
    const enteredComentario = comentarioInputRef.current.value;

    if (
      !enteredNome ||
      enteredNome.trim() === "" ||
      !enteredComentario ||
      enteredComentario.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    props.onAddComentario({
      nome: enteredNome,
      texto: enteredComentario,
    });
  }

  return (
    <form className={classes.form} onSubmit={comentariotHandler}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" ref={nomeInputRef} />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="comentario">Escreva seu comentário</label>
        <textarea id="comentario" rows="5" ref={comentarioInputRef}></textarea>
      </div>
      {isInvalid && <p>Por favor, preencha todos os campos corretamente.</p>}
      <button className={classes.btn}>Comentar</button>
    </form>
  );
}

export default NovoComentario;
