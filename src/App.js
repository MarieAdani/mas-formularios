import './App.css';
import { useState } from 'react';

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  //Justo para el ejercicio
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState("");


  const handleErrorFirstName = (e) => {
    setFirstName(e);
    if (e.length <= 2){
      if (e === "") {
        setErrorFirstName ("");
      }
      else if (e.length <= 2){
        setErrorFirstName ("First name must be at least 2 characters")
      }
    }
    else {
      setErrorFirstName("");
    }
  }
  //Termina metodo de error del nombre
  //Empieza el apellido

  const handleErrorLastName = (e) => {
    setLastName(e);
    if (e.length <= 2){
      if (e === "") {
        setErrorLastName ("");
      }
      else if (e.length <= 2){
        setErrorLastName ("Last name must be at least 2 characters")
      }
    }
    else {
      setErrorLastName("");
    }
  }
  
  //Termina metodo de error del apellido
  //Empieza el email

  const handleErrorEmail = (e) => {
    setEmail(e);
    if (e.length <= 2){
      if (e === "") {
        setErrorEmail("");
      }
      else if (e.length <= 2){
        setErrorFirstName ("Email must be at least 2 characters")
      }
    }
    else {
      setErrorEmail("");
    }
  }

  //Termina metodo de error del email
  //Empieza el password

  const handleErrorPassword = (e) => {
    setPassword(e);
    if (e.length < 8){
      if (e === "") {
        setErrorPassword("");
      }
      else{
        setErrorPassword("Password must be at least 8 characters");
      }
    }
    else {
      setErrorPassword("");
    }
  }

  //Termina metodo de error del password
  //Empieza password confirm

  const handleErrorPasswordConfirm = (e) => {
    setPasswordConfirm(e);
    if (e.length < 8){
      if (e === "") {
        setErrorPasswordConfirm("");
      }
      else {
        setErrorPasswordConfirm("Password confirmation must be at least 8 characters")
      }
    }
    else if (password !== e){
      setErrorPasswordConfirm("Passwords must match");
    }
    else {
      setErrorPasswordConfirm("");
    }
  }


  return (
    <div>
      <h1>Formulario</h1>
      <form>
        <div>
          <label>First Name:</label>
          <input type='text' name='firstName' onChange={(e) => handleErrorFirstName(e.target.value)} />
          <p className='text-danger'>{errorFirstName}</p>
        </div>

        <div>
          <label>Last Name:</label>
          <input type='text' name='lastName' onChange={(e) => handleErrorLastName(e.target.value)} />
          <p className='text-danger'>{errorFirstName}</p>
        </div>

        <div>
          <label>Email:</label>
          <input type='text' name='email' onChange={(e) => handleErrorEmail(e.target.value)} />
          <p className='text-danger'>{errorFirstName}</p>
        </div>


        <div>
          <label>Password:</label>
          <input type='password' name='password' onChange={(e) => handleErrorPassword (e.target.value)}></input>
          <p className='text-danger'>{errorPassword}</p>
        </div>

        <div>
          <label>Password Confirm:</label>
          <input type='password' name='passwordConfirm' onChange={(e) => handleErrorPasswordConfirm (e.target.value)}></input>
          <p className='text-danger'>{errorPasswordConfirm}</p>
        </div>

      </form>
    </div>
  );
}

export default App;
