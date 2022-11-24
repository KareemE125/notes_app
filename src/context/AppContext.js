import { createContext, useState } from "react";

export const AppContext = createContext(0);

export default function AppContextProvider(props)
{
    const [notesList, setNotesList] = useState([]);

    function addNote (note)
    {
        const updatedNotesList = [...notesList];
        updatedNotesList.push(note);
        setNotesList(updatedNotesList)
    }

    return <AppContext.Provider value={{notesList, addNote}}>
        {props.children}
    </AppContext.Provider>
}