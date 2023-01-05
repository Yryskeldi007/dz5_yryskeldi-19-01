

import React, { useState } from "react";
import "./index.css";

export default function App() {
  const[values,setValues]=useState({
    firstName:"",
    lastName:"",
    email:"",
  })


  const [submitted,setSubmitted]=useState(false);

const handleFirstNameInputChange=(event)=>{
  setValues({...values,firstName:event.target.value})
}
const handleLasttNameInputChange=(event)=>{
  setValues({...values,lasttName:event.target.value})
}
const handleEmailInputChange=(event)=>{
  setValues({...values,email:event.target.value})
}
const handleSubmit=(event)=>{
  event.preventDefault();
  setSubmitted(true)
}


  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted ? <div className="success-message">Спасибо за регистрацию!!!</div>:null}
        <input
        onChange={handleFirstNameInputChange}
          value={values.firstName}
          className="form-field"
          placeholder="First Name"
          name="firstName"
        />
        
        <input
        onChange={handleLasttNameInputChange}
         value={values.lastName}
         className="form-fiedl"
          placeholder="Last Name"
          name="lastName"
        />
       
        <input
        onChange={handleEmailInputChange}
         value={values.email}
         className="form-fiedl"
          placeholder="Email"
          name="email"
        />
        
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
