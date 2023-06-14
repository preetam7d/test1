import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [register, setregister] = useState({ name: '', username: '', email: '', password: '' });
    const changeHandler = (e) => {
        setregister({ ...register, [e.target.name]: e.target.value });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/api/auth/register`, register).then(res => { alert(res.data); navigate('/login') }).catch(err => alert(err.response.data));
    }
    return (
        <div className='register'>
            <div className="loginadmin"><Link to='/adminlogin' >Login as Admin</Link></div>
            <h2 className="regishead">Sign-up</h2>
            <form className="regisform" onSubmit={submitHandler}>
                <label htmlFor="name">Name: <br />
                    <input type="text" name='name' onChange={changeHandler} autoComplete='off' required />
                </label>
                <label htmlFor="name">Username: <br />
                    <input type="text" name='username' onChange={changeHandler} autoComplete='off' required />
                </label>
                <label htmlFor="name">Email: <br />
                    <input type="text" name='email' onChange={changeHandler} autoComplete='off' required />
                </label>
                <label htmlFor="name">Password: <br />
                    <input type="password" name='password' onChange={changeHandler} autoComplete='off' required />
                </label>
                <input className='regisbtn' type="submit" value="Register" />
            </form>
            <div className="already">Already have an account? <Link to='/login'>Sign-In</Link></div>
        </div>
    )
}
