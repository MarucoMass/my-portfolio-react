import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../home/Home';
import About from '../about/About';
import Skills from '../skills/Skills';
import Resume from '../resume/Resume';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';

function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence initial={false} mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/skills' element={<Skills />} />
				<Route path='/resume' element={<Resume />} />
				<Route path='/portfolio' element={<Portfolio />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
