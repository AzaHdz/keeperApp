import React from "react";

function Note(props){
  //funcion para borrar notas
  function handleClick(){
    props.onDelete(props.id); //activa la funcion "onDelete" que esta en App.jsx
  }
  return (
  <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button onClick={handleClick}>DELETE</button>
  </div>
);
}

export default Note;
