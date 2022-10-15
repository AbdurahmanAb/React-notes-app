import React, {createContext, useEffect, useState} from 'react'
import {nanoid} from 'nanoid'
 
    const NoteContext = createContext();
   
  
export const NoteContextPro = ({children})=>{
    const [search, setSearch] = useState('')
    const  [value, setValue] = useState([
        {id:nanoid() , text:"the text 1 is here", date:"12/21/2022"},
        {id:nanoid(), text:"the text 2 is here", date:"12/21/2022"},
        {id:nanoid() , text:"the text 3 is here", date:"12/21/2022"},
      
    ])
     const handleSave =(newText,ref, setter )=>{
      newText.id = nanoid()
         setValue([...value, newText])
         ref.current.value = ''
        setter(200)
      

    } 
   
const handleDel = (text)=>{
   setValue(value.filter((note)=>note.id !== text))
}


    useEffect(()=>{
        const savedNote = JSON.parse(localStorage.getItem('react-notes-data'))
        if(savedNote){
            setValue(savedNote)
        }
    },[])
    
        useEffect(()=>{
            localStorage.setItem('react-notes-data', JSON.stringify(value))
        }, [value])



  return(  <NoteContext.Provider value={{value,
  handleSave,
  handleDel,
  setSearch,
  search}}>
         {children}
    </NoteContext.Provider>
)}

  
  

export default NoteContext;