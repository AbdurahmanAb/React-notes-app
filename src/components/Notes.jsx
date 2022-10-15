import Note from "./Note"
import { useContext } from "react"
import Addnote from "./Addnote"
import NoteContext from "../Context/NotesContext"
const Notes = () => {
  const {value, search} = useContext(NoteContext)
  return (
  <div className="note-list">
   {  value.filter((notes)=>notes.text.toLowerCase().includes(search)).map(el=>(
    <Note key={el.id} text={el.text} id={el.id} date={el.date}/>
   ))}
   <Addnote/>
  </div>
  )
}

export default Notes;