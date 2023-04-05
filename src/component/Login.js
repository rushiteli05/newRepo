import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) {
        navigate('/')
    }
})

  const handleLogin = async () => {

    console.log("email,password", email, password)

    let result = await fetch('http://localhost:5000/login', {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    })


    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem('user', JSON.stringify(result));
      navigate("/");

    } else {
      alert("Please Enter Correct Details")
    }
  }


  return (
    <div className='login'>
      <h1>Login</h1>
      <input className='inputbox' type="email" placeholder='Enter Email'
        onChange={(e) => setEmail(e.target.value)} value={email} required />
      <input className='inputbox' type="password" placeholder='Enter Password'
        onChange={(e) => setPassword(e.target.value)} value={password} required />
      <button onClick={handleLogin} className='appButton' type="button">Login</button>
    </div>
  )
}

export default Login
