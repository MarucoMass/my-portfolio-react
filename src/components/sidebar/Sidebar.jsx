/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logotype.svg';
import './sidebar.css';

function Sidebar() {
	const [toggle, setToggle] = useState(false);

	return (
		// eslint-disable-next-line react/jsx-no-comment-textnodes
		<>
			<button
				type='button'
				className={toggle ? 'nav__burguer active' : 'nav__burguer'}
				onClick={() => setToggle(!toggle)} />
			<aside className='aside'>
				<NavLink className='aside_logo' to='/'>
					<img src={Logo} alt='logo' />
				</NavLink>

				<nav className='nav'>
					<div className='nav__menu'>
						<ul className='nav__list'>
							<li className='nav__item'>
								<NavLink
									className='nav__link after-home'
									to='/'
									onClick={() => setToggle(false)}>
									<i className='icon-home' />
								</NavLink>
							</li>
							<li className='nav__item'>
								<NavLink
									className='nav__link after-about'
									to='/about'
									onClick={() => setToggle(false)}>
									<i className='icon-user' />
								</NavLink>
							</li>
							<li className='nav__item'>
								<NavLink
									className='nav__link after-skills'
									to='/skills'
									onClick={() => setToggle(false)}>
									<i className='icon-wrench' />
								</NavLink>
							</li>
							<li className='nav__item'>
								<NavLink
									className='nav__link after-resume'
									to='/resume'
									onClick={() => setToggle(false)}>
									<i className='icon-graduation' />
								</NavLink>
							</li>
							<li className='nav__item'>
								<NavLink
									className='nav__link after-portfolio'
									to='/portfolio'
									onClick={() => setToggle(false)}>
									<i className='icon-layers' />
								</NavLink>
							</li>
							<li className='nav__item'>
								<NavLink
									className='nav__link after-contact'
									to='/contact'
									onClick={() => setToggle(false)}>
									<i className='icon-bubble' />
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>

				<div className='nav__footer'>
					<span className='copyright'>&copy; Mario Mass 2023</span>
				</div>
			</aside>
		</>
	);
}

export default Sidebar;
