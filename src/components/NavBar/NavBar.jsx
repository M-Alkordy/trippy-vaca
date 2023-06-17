import React from 'react'
import './NavBarStyle.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <nav> 
        <h1>Trippy</h1>
        <ul>
            <li> <Link to="/">Home <i className="fa-solid fa-house-user"></i></Link> </li>
            <li>About <i className="fa-solid fa-circle-info"></i></li>
            <li>Service <i className="fa-solid fa-briefcase"></i></li>
            <li>Contact <i className="fa-solid fa-address-book"></i></li>
            <li className='signUp'>Sign up</li>
        </ul>
    </nav>
    </>
  )
}

export default NavBar