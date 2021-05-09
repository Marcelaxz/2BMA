import { useEffect, useState } from "react";

import ListaComentario from "./lista-comentario";
import classes from "./comentarios.module.css";
import NovoComentario from "./novo-comentario";

function Comentarios(props) {
  const { eventId } = props;

  const [showComentarios, setShowComentarios] = useState(false);
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    if (showComentarios) {
      fetch("/api/comments/" + eventId)
        .then((response) => response.json())
        .then((data) => {
          setComentarios(data.comments);
        });
    }
  }, [showComentarios]);

  function toggleComentariosHandler() {
    setShowComentarios((prevStatus) => !prevStatus);
  }

  function addComentariosHandler(comentarioData) {
    fetch("/api/comments/" + eventId, {
      method: "POST",
      body: JSON.stringify(comentarioData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleComentariosHandler}>Comentários</button>
      {showComentarios && (
        <NovoComentario onAddComentario={addComentariosHandler} />
      )}
      {showComentarios && <ListaComentario items={comentarios} />}
    </section>
  );
}

export default Comentarios;
