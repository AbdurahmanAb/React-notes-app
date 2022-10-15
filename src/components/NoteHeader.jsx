import { useState, useContext } from "react";
import NoteContext from "../Context/NotesContext";

const NoteHeader = ({handleToggle}) => {
const {setSearch} = useContext(NoteContext)

  return (
    <div>
    <div className="notes-header">
    <div className="head">
    <h2>Notes</h2>
    </div>
    <button className="btn-toggle" onClick={()=>handleToggle((prevMode)=>!prevMode)}>Toggle Mode</button> 
    </div>
    <div className="search">
      <i className="fa fa-search icon"></i>
      <input type="text" className="input" onChange={(e)=>setSearch(e.target.value)} placeholder="Search Note ...." />
    </div>
    </div>
  )
}

export default NoteHeader;