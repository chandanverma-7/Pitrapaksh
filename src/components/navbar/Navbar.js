import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import pitrapakshLogo from '../../assets/pitrapakshLogo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import './Navbar.scss'
import MobNavbar from '../mobNavbar/MobNavbar';

function Navbar() {
    const [show,setShow]=useState(false)
    function handleClick(){
        setShow(!show);
    }
  return <>
    <div className="navbar">
      <NavLink to='/' activeClassName='active'>
        <div className="logo">
            <img src={pitrapakshLogo} alt="pitrapaksh logo" />
        </div>
      </NavLink>

        <div className="hamburger" onClick={handleClick}>
            <GiHamburgerMenu className='icon'/>
        </div>
        
         <ul className="items">
      <li>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">
          About Us
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
       {show && <MobNavbar className='mobnav' onClose={()=>setShow(!show)}/>}
   
   </>
}


export default Navbar
