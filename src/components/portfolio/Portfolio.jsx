import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Menu from './Menu';
import './portfolio.css';

function Portfolio() {
	const [items, setItems] = useState(Menu);
	const filterItem = itemCategory => {
		const updateItems = Menu.filter(
			curlElem => curlElem.category === itemCategory
		);

		setItems(updateItems);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.7, ease: 'easeOut' }}>
			<section className='work'>
				<div className='container section'>
					<h2 className='section__title'>Recent works</h2>

					<div className='work__filters'>
						<button
							type='button'
							className='work__item'
							onClick={() => setItems(Menu)}>
							Everything
						</button>
						<button
							type='button'
							className='work__item'
							onClick={() => filterItem('Work')}>
							Work
						</button>
						<button
							type='button'
							className='work__item'
							onClick={() => filterItem('Courses')}>
							Courses
						</button>
						<button
							type='button'
							className='work__item'
							onClick={() => filterItem('Personal')}>
							Personal
						</button>
					</div>

					<div className='work__container grid'>
						{items.map(item => {
							const { id, image, title, demo, code, category } = item;
							return (
								<div className='work__card' key={id}>
									<div className='work__thumbnail'>
										<img src={image} alt='img' className='work__img' />
									</div>

									<span className='work__category'>{category}</span>
									<h3 className='work__title'>{title}</h3>

									<div className='work__links'>
										<a
											href={code}
											className='work__button btn'
											target='__blank'>
											Code
										</a>
										<a
											href={demo}
											className='work__button btn'
											target='__blank'>
											Deployment
										</a>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</motion.div>
	);
}

export default Portfolio;
