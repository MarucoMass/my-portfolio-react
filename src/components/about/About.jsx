/* eslint-disable global-require */
import React from 'react';
import './about.css';
import { motion } from 'framer-motion';
// import Photo from '../../assets/photo.jpg';

function About() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.7, ease: 'easeOut' }}>
			<section className='about'>
				<div className='container section'>
					<h2 className='section__title'>About me</h2>

					<div className='about__container grid'>
						<div className='about__container--img'>
							<img src={require('../../assets/photo.jpg')} alt='me' className='about__img' />
						</div>

						<div className='about__data '>
							<p className='about__description'>
								Are you in need of a talented and passionate web developer? Look
								no further! My name is Mario Massonnat, and I am a highly
								skilled freelancer with a love for both web development and
								music. <br />
								<br />
								Based in the vibrant city of Rosario, Argentina, I have been
								honing my skills in web design and development for the past few
								years. With a keen eye for detail and a dedication to delivering
								the best possible results, I am committed to helping my clients
								achieve their goals. <br />
								<br />
								Whether you need a stunning new website or a custom application,
								I am here to make it happen. Contact me today and let's discuss
								how I can help bring your vision to life. Let's work together to
								create something truly special.
							</p>
						</div>
					</div>
				</div>
			</section>
		</motion.div>
	);
}

export default About;
