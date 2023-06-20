import React from 'react'
import './HeaderStyle.css'
const Header = ({title , desc , img , btn , ButtonStyle}) => {
  return (
    <header>
        <div className="hero">
            <img src={img} alt="" />
            <div className="info">
                <h1>{title}</h1>
                <h2>{desc}</h2>
                <button className={ButtonStyle}>{btn}</button>
            </div>
        </div>
    </header>
  )
}

export default Header