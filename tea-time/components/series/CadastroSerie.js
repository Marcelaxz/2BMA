import { useRef, useState } from "react";
import classes from "./CadastroSerie.module.css";

function FormularioSerie(props) {
  const [isInvalid, setIsInvalid] = useState(false);

  const tituloInputRef = useRef();
  const nomeDInputRef = useRef();
  const elencoInputRef = useRef();
  const paisInputRef = useRef();
  const tempInputRef = useRef();
  const anoInputRef = useRef();
  const imageInputRef = useRef();

  function cadastrarSerieHandler(event) {
    event.preventDefault();

    const enteredTitulo = tituloInputRef.current.value;
    const enteredNomeD = nomeDInputRef.current.value;
    const enteredElenco = elencoInputRef.current.value;
    const enteredPais = paisInputRef.current.value;
    const enteredTemp = tempInputRef.current.value;
    const enteredAno = anoInputRef.current.value;
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
      !enteredTemp ||
      enteredTemp.trim() === "" ||
      !enteredAno ||
      enteredAno.trim() === "" ||
      !enteredImage ||
      enteredImage === ""
    ) {
      setIsInvalid(true);
      return;
    }

    const serieData = {
      titulo: enteredTitulo,
      nomeD: enteredNomeD,
      elenco: enteredElenco,
      pais: enteredPais,
      temporada: enteredTemp,
      ano: enteredAno,
      image: enteredImage,
    };

    props.onAddSerie(serieData);
  }

  return (
    <form className={classes.form} onSubmit={cadastrarSerieHandler}>
      <div className={classes.style}>
        <h2 className={classes.h2}> Cadastro de Séries </h2>
        <div className={classes.control}>
          <label htmlFor="titulo"> Título da Série </label>
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
          <label htmlFor="temporada"> Temporadas </label>
          <input type="text" id="temporada" ref={tempInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="ano"> Ano </label>
          <input type="text" id="ano" ref={anoInputRef} />
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

export default FormularioSerie;