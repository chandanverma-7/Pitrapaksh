import React from 'react'
import './Hero.scss'
import { NavLink } from 'react-router-dom'

function Hero(props) {
  return (
    <div className="hero-section" style={{backgroundImage: `url(${props.imageUrl})`}}>
    <div className="hero-content">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <NavLink to="/contact" activeClassName="active">
      <button>{props.ctaText}</button>
        </NavLink>
    </div>
  </div>
  )
}

export default Hero
