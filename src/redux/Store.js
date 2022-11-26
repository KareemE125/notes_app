import { configureStore } from "@reduxjs/toolkit";
import { notesReducer } from "./NotesSlice";


let store = configureStore({
    reducer:{ 
        notes: notesReducer,
    },
    // serializableCheck: false is used because we are dealing with Note class which is non-serializable
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});


export default store;