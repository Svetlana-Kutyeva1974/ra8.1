import React from 'react'
import PropTypes from 'prop-types'
//import './Form.css'

function Form({ url, id }) {
  //const [form, setForm] = useState({id: '', note: ''});

  /*function inputForm(evt) {
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
*/

  return (
    
      <div className='form-name'>
        <label htmlFor="Name">New Note</label>
        <textarea 
          id ='note' 
          name='note' 
         />
      </div>

  )
}

Form.propTypes = {
  form: PropTypes.object,
  inputForm: PropTypes.func,
  submitForm: PropTypes.func,
}

export default Form