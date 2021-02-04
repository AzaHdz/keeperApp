import React, {useState} from "react";

function CreateArea(props){ //utilizamos props para activar funciones en otro archivo como App.jsx
  //se crea constante "note" y funcion "setNote" para setear "note"
  //note es un objeto con propiedades "title" y "content" ambas empty string
  const [note, setNote]= useState({
    title:"",
    content:""
  });
  //para saber lo que se escribe en los inputs
  function handleChange(event){
    //name dice donde estas escribiendo(title o content);
    //value dice lo que estas escribiendo(la ultima letra que escribiste)
    const {name, value} = event.target;
    //añade las letras para unirlas y devuelve un nuevo objeto
    setNote(prevNote => {
      return {
        ...prevNote, //pone los valores anteriores
        [name]: value //añande el nuevo name y value
      };
    });
  }
  //esta funcion se ejecuta con el click del boton para pasar la nota hacia app.jsx
  //siempre que hay un boton en un form refresca la pagina al hacer click, por eso se usa preventDefault
  function submitNote(event){
    props.onAdd(note); //esta linea activa addNote en App.jsx y pasa el objeto "note" actual
    event.preventDefault();// evita que la pagina se secargue al hacer click
    setNote({ //limpia el texto de los inputs pasando el objeto vacio
      title:"",
      content:""
    })

  }
  //cuando escribes en el input (onChange) se ejecuta  la funcion handleChange
  return <form>
  <input name="title" onChange={handleChange} value={note.title}   placeholder="title"/>
  <input name="content" onChange={handleChange} value={note.content}   placeholder="Content" rows="3"/>
  <button onClick={submitNote}>Add</button>
  </form>
}
export default CreateArea;
