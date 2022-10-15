import { useContext } from "react";
import NoteContext from "../Context/NotesContext";

const Note = ({text, date, id}) => {
  const {handleDel} = useContext(NoteContext)
  return (
    <div className="note">
        <span>{text}</span>
        <footer className="note-footer">
           <small>{date}</small>
           <p className="fa fa-trash-can icon" onClick={()=>handleDel(id)}></p>
        </footer>
    </div>
  )
}

export default Note;