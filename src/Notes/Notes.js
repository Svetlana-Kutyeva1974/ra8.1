import React, { useState } from 'react';
import Form from '../Form/Form';
import NoteList from '../NoteList/NoteList';
import {nanoid} from 'nanoid';
import './Notes.css';


function Notes(props) {
  console.log(' name component', props.name);
  const [notes, setNotes] = useState([]);

  const loadActual = () => {
    console.log(process.env.REACT_APP_NOTES_URL);
    fetch(process.env.REACT_APP_NOTES_URL)
    //fetch('https://git.heroku.com/backend-crud.git/notes/allow-cors', {mode:'cors'})
    .then(response => response.json())
    .then(notes => {
    setNotes(notes);
    console.log(' массив заметок после set',notes);
    });
  }


//-------------------
const load = (form) => {
  fetch(process.env.REACT_APP_NOTES_URL, {
  //  fetch('https://git.heroku.com/backend-crud.git/notes/allow-cors', {
     // mode:'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(form),
  }).then(result => {
      if (result.status === 204) {
          loadActual();
      }
  });
}

//для разнообразия через await
async function deletes (id) {
  let response = await fetch( `${process.env.REACT_APP_NOTES_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  });
  console.log('result delete=========', response);
  // не нужен код ниже, т.к. удалили все вручную и на сервере и в state
  /*if (response.status === 204) {
    loadActual();
  }*/
}

  /*-------------через then
  const deletes = (id) => {
    fetch(`${process.env.REACT_APP_NOTES_URL}/${id}`, {
        method: 'DELETE',
    }).then(result => {
        if (result.status === 204) {
            loadActual();
        }
    });
}
  -----------------*/

  function onDelete(id) {
    const copy = notes.filter((e) => e.id !== id);
    setNotes(copy);
    deletes(id);
  }

  function submitForm(form) {
    if (form.note !== '') {
      const add = [...notes, {id: nanoid(), note: form.note}];
      setNotes(add);
      load(add[add.length-1]);
    }
  } 

  return (
    <>
      <span>Notes      </span>
      <button className='reload' onClick={loadActual} style={{color: 'green'}}>
        <span className='colorReload'>&#128260;</span>
      </button>
      <NoteList items={notes} onDelete={onDelete}/>
      <Form submitForm={submitForm}/>
    </>
  )
}

Notes.defaultProps = {
  name: 'Компонент Notes'
  };

export default Notes;







  /*общий вариант на память
  fetch(url, {  
    method: 'post',  
    headers: {  
      "Content-type": "application/json"  
    },  
    body: 'foo=bar&lorem=ipsum'  
  })
  .then(json)  
  .then(function (data) {  
    console.log('Request succeeded with JSON response', data);  
  })  
  .catch(function (error) {  
    console.log('Request failed', error);  
  });
  */