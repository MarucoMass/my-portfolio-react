import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logotype.svg';
import './sidebar.css';                                    
const Sidebar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <>
     <div className={toggle ? "nav__burguer active" : "nav__burguer"} onClick={() => setToggle(!toggle)}>
        {/* <div className="burguer__one"></div>
        <div className="burguer__two"></div> */}
        <i className='icon-menu'></i>
      </div>

      <aside className='aside'>
        <NavLink className='aside_logo' to='/'><img src={Logo} alt="logo" /></NavLink>

        <nav className='nav'>
          <div className='nav__menu'>
            <ul className='nav__list'>
              <li className='nav__item'>
                <NavLink className='nav__link after-home' to='/' onClick={() => setToggle(false)}>
                  <i className='icon-home'></i>
                </NavLink>
              </li>
              <li className='nav__item'>
                <NavLink className='nav__link after-about' to='/about' onClick={() => setToggle(false)}>
                  <i className='icon-user'></i>
                </NavLink>
              </li>
              <li className='nav__item'>
                <NavLink className='nav__link after-skills' to='/skills' onClick={() => setToggle(false)}>
                  <i className='icon-wrench'></i>
                </NavLink>
              </li>
              <li className='nav__item'>
                <NavLink className='nav__link after-resume' to='/resume' onClick={() => setToggle(false)}>
                  <i className='icon-graduation'></i>
                </NavLink>
              </li>
              <li className='nav__item'>
                <NavLink className='nav__link after-portfolio' to='/portfolio' onClick={() => setToggle(false)}>
                  <i className='icon-layers'></i>
                </NavLink>
              </li>
              <li className='nav__item'>
                <NavLink className='nav__link after-contact' to='/contact' onClick={() => setToggle(false)}>
                  <i className='icon-bubble'></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <div className='nav__footer'>
          <span className='copyright'>&copy; Mario Mass 2022-2023</span>
        </div>

      </aside>
    </>
  )
}

export default Sidebar