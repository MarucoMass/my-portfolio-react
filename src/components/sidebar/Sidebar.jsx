/* eslint-disable jsx-a11y/control-has-associated-label */
// import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import Logo from '../../assets/logotype.svg';
import './sidebar.css';

function Sidebar() {
	// const [toggle, setToggle] = useState(false);

	return (
		// eslint-disable-next-line react/jsx-no-comment-textnodes
		
			
			<aside className='aside'>
				<nav className='nav'>
					<div className='nav__menu'>
						<ul className='nav__list'>
							<li className='nav__item'>
								<NavLink
									className='nav__link after-home'
									to='/'
					>
									<i className='icon-home' />
								</NavLink>
							</li>
							<li className='nav__item'>
								<NavLink
									className='nav__link after-about'
									to='/about'
					>
									<i className='icon-user' />
								</NavLink>
							</li>
							<li className='nav__item'>
								<NavLink
									className='nav__link after-skills'
									to='/skills'
					>
									<i className='icon-wrench' />
								</NavLink>
							</li>
							<li className='nav__item'>
								<NavLink
									className='nav__link after-resume'
									to='/resume'
					>
									<i className='icon-graduation' />
								</NavLink>
							</li>
							<li className='nav__item'>
								<NavLink
									className='nav__link after-portfolio'
									to='/portfolio'
					>
									<i className='icon-layers' />
								</NavLink>
							</li>
							<li className='nav__item'>
								<NavLink
									className='nav__link after-contact'
									to='/contact'
					>
									<i className='icon-bubble' />
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>

				{/* <div className='nav__footer'>
					<span className='copyright'>Mario Mass</span>
				</div> */}
			</aside>
	
	);
}

export default Sidebar;
