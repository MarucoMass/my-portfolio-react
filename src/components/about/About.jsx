import React from 'react'
import './about.css';
import Photo from '../../assets/photo.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.7, ease:'easeOut'}}
  >
      <section className="about">
        <div className="container section">     
            <h2 className="section__title">About me</h2>

              <div className="about__container grid">
                <div className="about__container--img">
                  <img src={Photo} alt="me" className='about__img'/>
                </div>

                <div className="about__data ">
                    <p className="about__description">My name is Mario Massonnat and I am a freelance web developer. I am also a musician. <br/><br/>
                    I currently live in the city of Rosario, in Argentina. In 2019 I started studying programming out of curiosity and there I discovered my passion for web design and development. <br /><br />
                    Since then I have been studying on various platforms and doing various projects in order to be a better professional every day.</p>
                    <a href="./resume.pdf" download="Mario Mass resume" className='btn about__button'>Download CV</a>
                </div>
              </div>   
        </div>
      </section>
    </motion.div>
  )
}

export default About