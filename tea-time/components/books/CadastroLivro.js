import { useRef, useState } from "react";
import classes from "./CadastroLivro.module.css";

function FormularioLivro(props) {
  const [isInvalid, setIsInvalid] = useState(false);

  const tituloInputRef = useRef();
  const nomeDInputRef = useRef();
  const editoraInputRef = useRef();
  const anoInputRef = useRef();
  const paisInputRef = useRef();
  const imageInputRef = useRef();

  function cadastrarLivroHandler(event) {
    event.preventDefault();

    const enteredTitulo = tituloInputRef.current.value;
    const enteredNomeD = nomeDInputRef.current.value;
    const enteredEditora = editoraInputRef.current.value;
    const enteredAno = anoInputRef.current.value;
    const enteredPais = paisInputRef.current.value;
    const enteredImage = imageInputRef.current.value;

    if (
      !enteredTitulo ||
      enteredTitulo.trim() === "" ||
      !enteredNomeD ||
      enteredNomeD.trim() === "" ||
      !enteredEditora ||
      enteredEditora.trim() === "" ||
      !enteredAno ||
      enteredAno.trim() === "" ||
      !enteredPais ||
      enteredPais.trim() === "" ||
      !enteredImage ||
      enteredImage === ""
    ) {
      setIsInvalid(true);
      return;
    }

    const livroData = {
      titulo: enteredTitulo,
      nomeD: enteredNomeD,
      editora: enteredEditora,
      ano: enteredAno,
      pais: enteredPais,
      image: enteredImage,
    };

    props.onAddLivro(livroData);
  }

  return (
    <form className={classes.form} onSubmit={cadastrarLivroHandler}>
      <div className={classes.style}>
        <h2 className={classes.h2}> Cadastro de Livros </h2>
        <div className={classes.control}>
          <label htmlFor="titulo"> Título do Livro </label>
          <input type="text" id="titulo" ref={tituloInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="nomeA"> Autor(a) </label>
          <input type="text" id="nomeA" ref={nomeDInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="editora"> Editora </label>
          <input type="text" id="editora" ref={editoraInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="ano"> Ano </label>
          <input type="text" id="ano" ref={anoInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="pais"> País </label>
          <input type="text" id="pais" ref={paisInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image"> URL da Imagem </label>
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

export default FormularioLivro;
