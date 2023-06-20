import React from 'react'
import './PopularDestinations.css'

const PopularDestinations = ({title , info , FirstImage , SecImage , Class}) => {
  return (
    <div className="popular">
    <div className={Class}>
          <div className="info">
            <h2>{title}</h2>
            <p>{info}</p>
          </div>
          <div className="images">
            <img src={FirstImage} alt="" />
            <img src={SecImage} alt="" />
          </div>
    </div>
    </div>
  )
}

export default PopularDestinations