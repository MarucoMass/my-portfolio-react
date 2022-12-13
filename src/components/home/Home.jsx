import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Robot from '../../assets/robot-cloud.png';
import HomeSocials from './HomeSocials';
import './home.css';


function Home() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.7, ease: 'easeOut' }}>
			<section className='home__container container'>
				<div className='hero'>
					<h1 className='home__name'>
						Hi folks!
						<br /> I'm <span>Mario Mass</span>
					</h1>
					<span className='home__education'>Front-End Developer</span>

					<HomeSocials />

					<Link to='/contact' className='home__button btn'>
						Let's work together!
					</Link>
				</div>
				<div className='home__img-container'>
					<img src={Robot} alt='robot saying hello' className='home__img' />
				</div>
			</section>
		</motion.div>
	);
}

export default Home;
