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
            <li><Link to="/about"> About <i className="fa-solid fa-circle-info"></i></Link></li>
            <li><Link to="/service"> Service <i className="fa-solid fa-briefcase"></i></Link></li>
            <li><Link to="/contact"> Contact <i className="fa-solid fa-address-book"></i></Link></li>
            <li className='signUp'>Sign up</li>
        </ul>
    </nav>
    </>
  )
}

export default NavBar