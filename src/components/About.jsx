import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { notesActions } from '../redux/NotesSlice';
import Note from '../models/Note';


export default function About() {

    const notes = useSelector((state) => state.notes);

    // dispatch returns the action of the called action creator (the implemented functions the the slice)
    const dispatch = useDispatch();

    
    function addNote()
    {
        dispatch(notesActions.addNote(
            new Note(
                'Study',
                ['css', 'html'],
                'html is a markup language not a programming language'
                )
        ));
    }

    return <main className='container py-4'>
        <h1>About</h1>
        <section className='text-center mt-3 my-4'>
            <button className='btn btn-warning m-2' onClick={addNote} >
                Add New Note
            </button>
            <Link to='/'>
                <button className='btn btn-warning m-2'>Go To Home Page</button>
            </Link>
        </section>
        <section className='row'>
            {
                notes.notesList.map((note, index) => <div key={index} className='col-sm-4 col-md-3 mb-4'>
                    <div className='card'>
                        <div className='card-header text-center'>
                            <h4>{note.title}</h4>
                        </div>
                        <div className="card-body">
                            <p>{note.body}</p>
                        </div>
                    </div>
                </div>)
            }
        </section>
    </main>
}
