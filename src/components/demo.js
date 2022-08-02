import React, { useState } from 'react'



const Form = ({name,email}) => {
    const [newName, setSetName] = useState(name);
    const [newEmail, setSetEmail] = useState(email);

    
  return (
    <>
      <form data-testid="form">
        <p>Name</p><br/>
        <input nombre={name} defaultValue= {newName}/><br/>
        <p>Email</p><br/>
        <input correo={email} defaultValue= {newEmail}/><br/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Form;