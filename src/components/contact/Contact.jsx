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

					<form action='' className='contact__form'>
						<div className='contact__form-group'>
							<div className='contact__form-div'>
								<input
									type='text'
									className='contact__form-input'
									placeholder='Write your name'
								/>
							</div>

							<div className='contact__form-div'>
								<input
									type='email'
									className='contact__form-input'
									placeholder='Write your email'
								/>
							</div>

							<div className='contact__form-div'>
								<input
									type='text'
									className='contact__form-input'
									placeholder='Write your subject'
								/>
							</div>

							<div className='contact__form-div'>
								<textarea
									name=''
									cols='30'
									rows='10'
									className='contact__form-input contact__form-area'
									placeholder='Write your message' />
							</div>
						</div>

						<input
							type='button'
							className='btn contact__button'
							value='Send message'
						/>
					</form>
				</div>
			</section>
		</motion.div>
	);
}

export default Contact;
