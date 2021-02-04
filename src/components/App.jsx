import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App(){
  //pasamos la nueva nota a un arreglo llamado "notes" y lo modificamos con "setNotes"
  const [notes, setNotes]=useState([]);

  //funcion para recibir la nota nueva
  function addNote(newNote){ //newNote viene de createArea.jsx se puede nombrar al gusto
    setNotes(prevNotes => { //añadimos las notas previas al arreglo
      return [...prevNotes, newNote]//añadimos la nueva nota a final
    })
  }
//funcion para eliminar las notas con el boton "Delete"
  function deleteNote(id){ //se pasa el id de la nota
    console.log("Delete was trigered");
    setNotes(prevNotes => { //se actualiza el arreglo "Notes" con "setNotes"
      return prevNotes.filter((noteItem, index) => { //
        return index !== id; //regresa las notas que no tienen ese id
      });
    });
  }
    return <div>
        <Header />
        <CreateArea
          onAdd={addNote}
        />
        {notes.map((noteItem, index) => { //crea una nota para cada elemento en el array "notes"
          return <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote} />
        })}
        <Footer />
    </div>
}

export default App;
