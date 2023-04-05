import React from "react";
import { NavLink, useNavigate } from 'react-router-dom'

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }
    return (
        <div>
        <img className="logo"  src="https://png.pngtree.com/png-clipart/20210606/original/pngtree-sport-car-logo-vector-png-image_6398339.jpg"/>
            {auth ?
                <ul className="nav-ul">
                    <li><NavLink to='/'>Products</NavLink></li>
                    <li><NavLink to='/add'> Add Products</NavLink></li>
                    <li><NavLink to='/update'> Update Products</NavLink></li>
                    <li><NavLink to='/profile'>profile</NavLink></li>
                    <li><NavLink onClick={logout} to='/signup'> Logout ({JSON.parse(auth).name})</NavLink></li>
                </ul>
                 :
                <ul className="nav-ul nav-right">
                    <li> <NavLink to='/signup'>Sign up</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                </ul>

            }
        </div>
    )

}

export default Nav;

{/* <li>{auth ? <NavLink onClick={logout} to='/signup'> Log Out</NavLink> : <NavLink to='/signup'>Sign up</NavLink> }</li>
                <li><NavLink to='/login'>Login</NavLink></li> */}
