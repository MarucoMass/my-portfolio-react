import React from 'react';

function HomeSocials() {
	return (
		<div className='home__socials'>
			<a
				href='https://github.com/MarucoMass'
				className='home__social-link'
				target='_blank'
				rel='noreferrer'>
				<i className='fa-brands fa-github' />
			</a>
			<a
				href='https://www.linkedin.com/in/mario-massonnat-a8266b229/'
				className='home__social-link'
				target='_blank'
				rel='noreferrer'>
				<i className='fa-brands fa-linkedin' />
			</a>
			<a
				href='https://www.instagram.com/Maruco_Mass'
				className='home__social-link'
				target='_blank'
				rel='noreferrer'>
				<i className='fa-brands fa-instagram' />
			</a>
		</div>
	);
}

export default HomeSocials;
