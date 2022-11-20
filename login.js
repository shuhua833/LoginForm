import { useState, useEffect, useRef, } from 'react';
import './App.css';

function App() {
  return (
    <LoginForm />
  )
}

function LoginForm() {

  const [message, setMessage] = useState("")
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    setMessage("Please login")
  }, [])

  const handleSubmit = () => {
  
    if (user === "admin" && password === "admin")
      setMessage((_) => "Logged in successfully")
    else
      setMessage((_) => "Login failed")
    return
  }

  const handleUser = (event) => {
    setUser(event.target.value);
  }

  const handlePwd = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div >
      <p>{message}</p>
      <UserName handleUser={handleUser} />
      <Password handlePwd={handlePwd} />
      <Submit handleSubmit={handleSubmit} />

    </div>
  );
}

function UserName({ handleUser }) {
  return (
    <div >
      <div>Username</div>
      <input onChange={handleUser} />
    </div>
  )
}

function Password({ handlePwd }) {
  return (
    <>
      <div>Password</div>
      <input onChange={handlePwd} />

    </>
  )
}

function Submit({ handleSubmit }) {
  return (
    <button onClick={handleSubmit}>submit</button>
  )
}

export default App;
