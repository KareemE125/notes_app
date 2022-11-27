import { createSlice } from "@reduxjs/toolkit";

let initState = { notesList: [], tags: new Set() }


let notesSlice = createSlice({
    name: 'notes',
    initialState: initState,
    // these reducers are action creators functions so when they are exctued they
    // returns the wanted actions, these actions are taken by the dispatch to dispatch
    // these actions. ===> dispatch(actionCreator())
    reducers: {
        addNote: (state, action) => {
            // action.payload is the params that is passed to the function when called
            state.notesList.push(action.payload);

            if(!action.payload.tags){}
            else if(typeof action.payload.tags === "object")
            {
                action.payload.tags.forEach( tag => state.tags.add(tag) )
            }
            else{ state.tags.add(action.payload.tags); }

            console.log('==========List Of Tags In The App=========');
            console.log(...state.tags.values());
            console.log('==========List Of Tags In The App=========');
        },
        deleteNote: (state, action) => {
            state.notesList.splice(action.payload,1);
        },
    }
});

export const notesReducer = notesSlice.reducer;
export const notesActions = notesSlice.actions;