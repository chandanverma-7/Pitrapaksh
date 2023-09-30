import React from 'react'
import {GrClose} from 'react-icons/gr'
import { NavLink } from 'react-router-dom'
import './MobNavbar.scss'

function MobNavbar({onClose}) {
  return (
    <div className='mobNavbar' onClick={onClose}>
        <div className="icon" onClick={onClose}>
        <GrClose className='close'/>
        </div>

        <ul className="items">
      <li>
        <NavLink exact to="/" activeClassName="active">
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" activeClassName="active">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="active">
          Contact Us
        </NavLink>
      </li>
    </ul>
    </div>
  )
}

export default MobNavbar
