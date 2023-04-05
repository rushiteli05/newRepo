import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth) {
            navigate('/')
        }
    })

    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",

    });

    const inputEvent = (e) => {
        setState({
            ...state, [e.target.name]: e.target.value
        })
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        console.log(state.name, state.email, state.password);

        const { name, email, password } = state

        let result = await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem('user', JSON.stringify(result));
        if (result) {
            navigate('/');
        }
    }



    return (
        <div className='dinu'>
        <div className='register'>
            <form>
                <h1>Register</h1>
                <input className='inputbox' type='text' name='name' value={state.name} onChange={inputEvent} placeholder='Enter Name' required />
                <input className='inputbox' type='email' name='email' value={state.email} onChange={inputEvent} placeholder='Enter Email' required />
                <input className='inputbox' type='password' name='password' value={state.password} onChange={inputEvent} placeholder='Enter Password' required />
                <button type='button' className='appButton' onClick={onSubmit}>Sign Up</button>
            </form>
        </div>
        </div>
    )
}

export default SignUp
