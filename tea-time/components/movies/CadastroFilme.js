import { useRef, useState } from "react";
import classes from "./CadastroFilme.module.css";

function Formulario(props) {
  const [isInvalid, setIsInvalid] = useState(false);

  const tituloInputRef = useRef();
  const nomeDInputRef = useRef();
  const elencoInputRef = useRef();
  const paisInputRef = useRef();
  const imageInputRef = useRef();

  function cadastrarFilmeHandler(event) {
    event.preventDefault();

    const enteredTitulo = tituloInputRef.current.value;
    const enteredNomeD = nomeDInputRef.current.value;
    const enteredElenco = elencoInputRef.current.value;
    const enteredPais = paisInputRef.current.value;
    const enteredImage = imageInputRef.current.value;

    if (
      !enteredTitulo ||
      enteredTitulo.trim() === "" ||
      !enteredNomeD ||
      enteredNomeD.trim() === "" ||
      !enteredElenco ||
      enteredElenco.trim() === "" ||
      !enteredPais ||
      enteredPais.trim() === "" ||
      !enteredImage ||
      enteredImage === ""
    ) {
      setIsInvalid(true);
      return;
    }

    const filmeData = {
      titulo: enteredTitulo,
      nomeD: enteredNomeD,
      elenco: enteredElenco,
      pais: enteredPais,
      image: enteredImage,
    };

    props.onAddFilme(filmeData);
  }

  return (
    <form className={classes.form} onSubmit={cadastrarFilmeHandler}>
      <div className={classes.style}>
        <h2 className={classes.h2}> Cadastro de Filmes </h2>
        <div className={classes.control}>
          <label htmlFor="titulo"> Título do Filme </label>
          <input type="text" id="titulo" ref={tituloInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="nomeD"> Diretor </label>
          <input type="text" id="nomeD" ref={nomeDInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="elenco"> Elenco Principal </label>
          <input type="text" id="elenco" ref={elencoInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="pais"> País </label>
          <input type="text" id="pais" ref={paisInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image"> Imagem </label>
          <input type="url" id="image" ref={imageInputRef} />
        </div>
        <div className={classes.actions}>
          {isInvalid && (
            <p>Por favor, preencha todos os campos corretamente.</p>
          )}
          <button> Cadastrar</button>
        </div>
      </div>
    </form>
  );
}

export default Formulario;
