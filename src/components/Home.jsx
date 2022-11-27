import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { notesActions } from '../redux/NotesSlice';

import { Link } from 'react-router-dom';

export default function Home() {

    const notes = useSelector((state) => state.notes);
    const dispatch = useDispatch();

    return <main className='container py-4'>
        <h1>Notes</h1>
        <Link to='/newnote'>
          <button className='btn btn-danger mx-2'>new</button>
        </Link>
        <section className='row'>
            {
                notes.notesList.map((note, index) => <div key={index} className='col-sm-4 col-md-3 mb-4'>
                    <div className='card'>
                        <div className='card-header text-center'>
                            <h4>{note.title}</h4>
                        </div>
                        <div className="card-body">
                            <p>{note.body}</p>
                            <button className='btn btn-outline-danger' onClick={() => dispatch(notesActions.deleteNote(index))}>Delete Note</button>
                        </div>
                    </div>
                </div>)
            }
        </section>
    </main>

}
