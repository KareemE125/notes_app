import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { notesActions } from '../redux/NotesSlice';

import { Link } from 'react-router-dom';

export default function Home() {

    const notes = useSelector((state) => state.notes);
    const dispatch = useDispatch();

    function deleteNote(index) {
        dispatch(notesActions.deleteNote(index))
    }

    return <main className='container'>
        <nav className='w-100 shadow-lg position-fixed top-0 start-0 bg-dark text-primary px-2 px-sm-5 py-2 d-flex justify-content-between align-items-center'>
            <h1 className='h2'>My Notes</h1>
            <Link to='/newnote'>
                <button className='btn btn-outline-primary'>Create Note</button>
            </Link>
        </nav>

        <section className='row align-items-stretch'>

            {
                notes.notesList.map((note, index) => <div key={index} className='col-sm-4 col-md-3 mb-4'>
                    <div className='card bg-dark text-primary'>
                        <div className='card-header text-center'>
                            <h4><div className="text-line-dots">{note.title}</div></h4>
                        </div>
                        <div className="card-body">
                            <p><div className="text-multi-dots">{note.body}</div></p>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <button className='btn btn-outline-danger border-0' onClick={() => deleteNote(index)}>
                                <i className="fa fa-trash"></i>
                            </button>
                            <Link to={'/edit/'+index}>
                                <button className='btn btn-outline-warning border-0'>
                                    <i className="fa fa-pen-to-square"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>)
            }
        </section>
    </main>

}
