import React from 'react';

function Card (props) {
	const {icon, year, title, entity} = props;
	return (
		<div className='timeline__item'>
			<i className={icon} />
			<span className='timeline__date'>{year}</span>
			<h3 className='timeline__title'>{title}</h3>
			<p className='timeline__text'>{entity}</p>
		</div>
	);
}

export default Card;
