import { createSlice } from "@reduxjs/toolkit";

let initState = { notesList: [], tags: [] }

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
        }
    },
});

export const notesReducer = notesSlice.reducer;
export const notesActions = notesSlice.actions;