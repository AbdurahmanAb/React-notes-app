import React, { useState } from 'react'
import Addnote from './components/Addnote';
import NoteHeader from './components/NoteHeader';

import Notes from './components/Notes';
import { NoteContextPro } from './Context/NotesContext';

function App() {
  const [dark, setDark] = useState(false);
  return (
    <NoteContextPro>
    <div className={`${dark && 'dark'}`}>
    <div className='container'>
    <NoteHeader handleToggle = {setDark} />
      <Notes/>
    </div>
    </div>
    </NoteContextPro>
  )
}
export default App; 