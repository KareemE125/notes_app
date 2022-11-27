import { configureStore } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
import { notesReducer } from "./NotesSlice";

// To enable using Maps and Sets in Redux
enableMapSet();

let store = configureStore({
    reducer:{ 
        notes: notesReducer,
    },
    // serializableCheck: false is used because we are dealing with Note class which is non-serializable
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});


export default store;