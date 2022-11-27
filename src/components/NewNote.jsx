import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { notesActions } from '../redux/NotesSlice';
import Note from '../models/Note';

import CreatableSelect from 'react-select/creatable';
import '../css/NewNoteStyle.css'
import { Link, useNavigate } from 'react-router-dom';

export default function NewNote() 
{
  const notes = useSelector((state) => state.notes);
  // dispatch returns the action of the called action creator (the implemented functions the the slice)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputTitle = useRef();
  const inputTags = useRef();
  const inputBody = useRef();

  
  let tagOptions = useMemo(()=>{
    return [...notes.tags.values()].map((val)=>{
              return { value: val, label: val, color: '#000000' }
            });
  },[])

  
  

  function sumbitForm(event) 
  {
    event.preventDefault();

    const newNote = new Note(
      inputTitle.current.value,
      inputTags.current.state.ariaSelection?.value.map(option => option.value),
      inputBody.current.value,
    )

    dispatch(notesActions.addNote(newNote));
    navigate('/');
  }


  return <section id='new-note' className='container py-5'>
    <h2 className='mb-4'>Create New Note</h2>

    <form className="row" onSubmit={sumbitForm}>
      <div className='mb-3 col-lg-6'>
        <input ref={inputTitle} className='input form-control' type="text" placeholder='Title' required />
      </div>
      <div className='mb-3 col-lg-6'>
        <CreatableSelect options={tagOptions} ref={inputTags} isMulti components={{ DropdownIndicator: false }} placeholder={'Tags #'} />
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

  </section>
}
