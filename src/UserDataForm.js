import React from 'react';
import { useState } from 'react';

import './UserDataForm.css';

const UserDataForm = ({userData, isReadOnly, onSubmit}) => {
  const [name, changeName] = useState(userData.name);
  const [email, changeEmail] = useState(userData.email);

  const onSubmitClick = e => {
    e.preventDefault();
    onSubmit( {name, email} );
  }

  return (
    <form className="UserDataForm">
      <h2>{ isReadOnly ? "Read-only form" : "Editable form" }</h2>

      <label>Name
        <input type="text"
               readOnly={isReadOnly}
               value={name}
               onChange={e => changeName(e.target.value)} />
      </label>

      <label>E-Mail
        <input type="text"
               readOnly={isReadOnly}
               value={email}
               onChange={e => changeEmail(e.target.value)} />
      </label>

      { !isReadOnly && <button type="submit" onClick={onSubmitClick}>Submit</button> }
    </form>
  );
};

export default UserDataForm;