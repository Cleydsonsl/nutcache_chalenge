import React, { useState } from 'react';
import Select from 'react-select';

import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [values, setValues] = useState({
    name: '',
    date_birth: '',
    sex: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ],
    email: '',
    cpf: '',
    date_start: '',
    team: [
      { value: 'frontEnd', label: 'Front-End' },
      { value: 'backEnd', label: 'Back-End' },
      { value: 'mobile', label: 'Mobile' },
    ],
  });

  const handleNameInputChange = (event) => {
    setValues({...values, name: event.target.value})
  }
  const handleDateBirthInputChange = (event) => {
    setValues({...values, date_birth: event.target.value})
  }
  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }
  const handleCpfInputChange = (event) => {
    setValues({...values, cpf: event.target.value})
  }
  const handleDateStartInputChange = (event) => {
    setValues({...values, date_start: event.target.value})
  }

  const [submitted, setSubmitted] = useState(false);

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="divDash">

        <div className="divName">
          <input id="name" className="form-field" type="text" placeholder="Your Name"
            name="name" value={values.name} onChange={handleNameInputChange}
          />
          { submitted && !values.name ? <span>Please enter a your name</span>: null }
        </div>

        <div className="divDateB">
          <input id="date_birth" className="form-field" type="date" placeholder="Your birth date"
            name="date_birth" value={values.date_birth} onChange={handleDateBirthInputChange}
          />
          { submitted && !values.date_birth ? <span>Please enter a your date birh</span>: null }
        </div>

        <div className="divSex">
        <Select
          className="select-field"
          options={values.sex}
        />
        { submitted && !values.sex ? <span>Please select a your sex</span>: null }
        </div>

        <div className="divEmail">
        <input id="email" className="form-field" type="text" placeholder="Email"
          name="email" value={values.email} onChange={handleEmailInputChange}
        />
        { submitted && !values.email ? <span>Please enter a your e-mail</span>: null }
        </div>

        <div className="divCpf">
        <input id="cpf" className="form-field" type="text" placeholder="CPF"
          name="cpf" value={values.cpf} onChange={handleCpfInputChange}
        />
        { submitted && !values.cpf ? <span>Please enter a your CPF</span>: null }
        </div>

        <div className="divDateS">
          <input id="date_start" className="form-field" type="date"
          placeholder="Date Start" name="date_start" value={values.date_start}
          onChange={handleDateStartInputChange}
          />
          { submitted && !values.date_start ? <span>Please enter a your date start</span>: null }
        </div>

        <div className="divTeam">
          <Select
            className="select-field"
            options={values.team}
          />
          { submitted && !values.team ? <span>Please select a your team</span>: null }
        </div>

      </div>
      <div>
        <button className="btnRegister" type="submit">Register</button>
        <button className="btnClose" type="button" onClick={handleClose}>
          Close
        </button>
      </div>
      </section>
    </div>
  );
};

export default Modal;
