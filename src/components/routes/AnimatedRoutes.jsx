import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import Skills from '../skills/Skills';
import Resume from '../resume/Resume';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';
import { AnimatePresence } from 'framer-motion';
const AnimatedRoutes = () => {

    const location = useLocation()

  return (
    <AnimatePresence initial={false} mode={'wait'}>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/skills' element={<Skills />}></Route>
            <Route path='/resume' element={<Resume />}></Route>
            <Route path='/portfolio' element={<Portfolio />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;