/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { notesActions } from '../redux/NotesSlice';
import Note from '../models/Note';

import CreatableSelect from 'react-select/creatable';
import '../css/NewNoteStyle.css'
import { Link, useNavigate } from 'react-router-dom';

export default function NewNote() {
  const notes = useSelector((state) => state.notes);
  // dispatch returns the action of the called action creator (the implemented functions the the slice)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputTitle = useRef();
  const inputTags = useRef();
  const inputBody = useRef();


  let tagOptions = useMemo(() => {
    return [...notes.tags.values()].map((val) => {
      return { value: val, label: val, color: '#000000' }
    });
  }, [])

  function sumbitForm(event) {
    event.preventDefault();

    const newNote = new Note(
      inputTitle.current.value,
      inputTags.current.getValue().map(option => option.value),
      inputBody.current.value,
    )

    dispatch(notesActions.addNote(newNote));
    navigate('/');
  }


  return <main id='new-note' className='container'>
    <nav className='w-100 shadow-lg position-fixed top-0 start-0 bg-dark text-primary px-2 px-sm-5 py-2 d-flex justify-content-between align-items-center'>
      <h1 className='h2'>Create Note</h1>
    </nav>

    <form className="row" onSubmit={sumbitForm}>
      <div className='mb-3 col-lg-6'>
        <input ref={inputTitle} className='input form-control' type="text" placeholder='Title' required />
      </div>
      <div className='mb-3 col-lg-6'>
        <CreatableSelect  ref={inputTags} className='text-black' options={tagOptions} isMulti components={{ DropdownIndicator: false }} placeholder={'Tags #'} />
      </div>
      <div className='mb-3 col-lg-12'>
        <textarea ref={inputBody} className='form-control mb-3' cols="30" rows="10" placeholder='Body...'></textarea>
      </div>
      <div className='d-flex w-100 justify-content-end'>
        <Link to='/'>
          <button className='btn btn-danger mx-2'>Cancel</button>
        </Link>
        <button className='btn btn-primary mx-2'>Submit</button>
      </div>
    </form>

  </main>
}
