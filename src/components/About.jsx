import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


export default function About() {

    const notes = useContext(AppContext)

    function addNote()
    {
        notes.addNote({ name: `Note #${notes.notesList.length+1}`, body: `Here is the body of note #${notes.notesList.length+1}` }) 
    }

    return <main className='container py-4'>
        <h1>About</h1>
        <section className='text-center mt-3 my-4'>
            <button className='btn btn-warning m-2' onClick={addNote}>
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
                            <h4>{note.name}</h4>
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
