import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faHtml5,
	faCss3Alt,
	faSass,
	faJs,
	faReact,
	faGitAlt,
	faWordpress,
	faNpm,
	faNodeJs,
	faBootstrap,
	faFigma,
} from '@fortawesome/free-brands-svg-icons';
import Vsc from '../../assets/vsc.svg';
import Illustrator from '../../assets/illustrator.svg';
import Netlify from '../../assets/netlify.svg';

function List() {
	return (
		<div className='skills__container grid'>
			<img src={Vsc} className='skills__thumbnail' alt='icon' />
			<div className='skills__thumbnail'>
				<FontAwesomeIcon icon={faFigma} />
			</div>
			<img src={Illustrator} className='skills__thumbnail' alt='icon' />
			<div className='skills__thumbnail'>
				<FontAwesomeIcon icon={faHtml5} />
			</div>
			<div className='skills__thumbnail'>
				<FontAwesomeIcon icon={faCss3Alt} />
			</div>
			<div className='skills__thumbnail'>
				<FontAwesomeIcon icon={faSass} />
			</div>
			<div className='skills__thumbnail'>
				<FontAwesomeIcon icon={faJs} />
			</div>
			<div className='skills__thumbnail'>
				<FontAwesomeIcon icon={faReact} />
			</div>
			<div className='skills__thumbnail'>
				<FontAwesomeIcon icon={faNodeJs} />
			</div>
			<div className='skills__thumbnail'>
				<FontAwesomeIcon icon={faNpm} />
			</div>
			<div className='skills__thumbnail'>
				<FontAwesomeIcon icon={faGithub} />
			</div>
			<div className='skills__thumbnail'>
				<FontAwesomeIcon icon={faGitAlt} />
			</div>
			<div className='skills__thumbnail'>
				<FontAwesomeIcon icon={faWordpress} />
			</div>
			<div className='skills__thumbnail'>
				<FontAwesomeIcon icon={faBootstrap} />
			</div>
			<img src={Netlify} className='skills__thumbnail' alt='icon' />
		</div>
	);
}

export default List;
