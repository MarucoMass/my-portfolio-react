import React from 'react';
import './contact.css';
import { motion } from 'framer-motion';

function Contact() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.7, ease: 'easeOut' }}>
			<section className='contact section container'>
				<h2 className='section__title'>Contact me</h2>

				<div className='contact__container grid'>
					<div className='container__info'>
						<h3 className='contact__title'>
							Let's get in touch and work together!
						</h3>
					</div>

					<a
						href='mailto:mariomass23@gmail.com'
						className='btn contact__button'>
						Send me an email
					</a>
				</div>
			</section>
		</motion.div>
	);
}

export default Contact;
