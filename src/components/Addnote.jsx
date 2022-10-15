import { useContext, useState, useRef } from "react";
import NoteContext from "../Context/NotesContext";
import {nanoid} from 'nanoid'

export default function Addnote() {
 const [text, setText] = useState(''); 
 const [count, setCount] = useState(200);
 const ref = useRef(null)

 const {handleSave} = useContext(NoteContext)
 const handleChange = (e)=>{
  e.preventDefault()
  setText(e.target.value)
  setCount(200-e.target.value.trim().length)
 }
 const array = {
  text:text,
  date: new Date().toLocaleDateString()}
  const handler = ()=>{
 if(text.trim().length>0 && count>0){
   handleSave(array, ref, setCount)
   setText('')
   
}


}
return (
    <div className="note new">
        <textarea ref={ref} cols="10" rows="8" placeholder="Add a note..." onChange={handleChange}></textarea>
        <div className="note-footer">
          <small>{`${count>0? count + ' remaining': 'No MoreThan 200 Charcter'}`}</small>
          <button className="save" onClick={handler}>save</button>
        </div>
    </div>
  )
}
