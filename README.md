# notes_app
1) Redux for state Management
2) Create Notes [Title - Body - Tags]
3) Edit Notes
4) Delete Notes

## Screen SHots:
![{CAC753C5-BA34-4601-88D7-6B51A1C73CB5}](https://user-images.githubusercontent.com/61433385/204645677-0cb13679-14f7-4fe6-b56d-4958ba86c795.png)
![{474E534E-CB5F-4CBE-960E-6F9872E65529}](https://user-images.githubusercontent.com/61433385/204645686-09f78094-8f51-4855-bbcf-68a39294201e.png)

## Use Classes with Redux: 
```
middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
```
## Use Sets with Redux:
```
import { enableMapSet } from "immer";
enableMapSet();
```
## How to use them in Store Code:
```
import { configureStore } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
import { notesReducer } from "./NotesSlice";

// To enable using Maps and Sets in Redux
enableMapSet();

let store = configureStore({
    reducer:{ 
        notes: notesReducer,
    },
    // serializableCheck: false is used because we are dealing with Classes (Note class) which is non-serializable
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});


export default store;
```
