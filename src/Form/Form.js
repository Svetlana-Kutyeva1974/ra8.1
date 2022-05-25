import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Form.css'

function Form({ submitForm }) {
  const [form, setForm] = useState({id: '', note: ''});

  function inputForm(evt) {
    setForm((prev) => {
      if (evt.target.name === 'note') {
        return { ...prev, note: evt.target.value };
      }
    })
  } 

  function handleSubmit(e) {
    e.preventDefault();
    submitForm(form);
    setForm({id: '', note: ''});
  }


  return (
    <form className='input-form'>
      <div className='form-name'>
        <label htmlFor="Name">New Note</label>
        <textarea 
          id ='note' 
          name='note' 
          value={form.note}
          onChange={inputForm} required />
      </div>
      <button className='btn-add2' onClick={handleSubmit}>&#10148;</button>
    </form>
  )
}

Form.propTypes = {
  form: PropTypes.object,
  inputForm: PropTypes.func,
  submitForm: PropTypes.func,
}

export default Form