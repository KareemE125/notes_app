import { createSlice } from "@reduxjs/toolkit";
import Note from "../models/Note";

let initState = { notesList: [new Note('Duumy Note',['dummy','note'],'This is a dummy note. 👋')], tags: new Set() }


let notesSlice = createSlice({
    name: 'notes',
    initialState: initState,
    // these reducers are action creators functions so when they are exctued they
    // returns the wanted actions, these actions are taken by the dispatch to dispatch
    // these actions. ===> dispatch(actionCreator())
    reducers: {
        addNote: addNote,
        editNote: editNote,
        deleteNote: deleteNote,
    }
});

export const notesReducer = notesSlice.reducer;
export const notesActions = notesSlice.actions;


function addNote(state, action) 
{
    // action.payload is the params that is passed to the function when called
    state.notesList.push(action.payload);

    if (action.payload.tags) {
        action.payload.tags.forEach(tag => state.tags.add(tag));
    }
    //console.log(state.tags.values());
}

function editNote(state, action) 
{
    state.notesList[action.payload.index] = action.payload.newNote

    if (action.payload.newNote.tags) 
    {
        action.payload.newNote.tags.forEach(tag => state.tags.add(tag));
    }

    console.log('====================================');
    console.log(action.payload);
    console.log(...state.notesList);
    console.log('====================================');
}

function deleteNote(state, action) 
{
    state.notesList.splice(action.payload, 1); 
}


