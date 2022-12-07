import React from 'react'
import './skills.css';
import SkillsList from './SkillsList';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.7, ease:'easeOut'}}
  >
      <section className="skills container section">   
          <h2 className="section__title">My skills</h2>

          <div className="skills__data ">
            <h3 className="skills__description">These are the tools and technologies I use for my projects.</h3>
                  
            <div className="skills__container grid">
              {SkillsList.map((elem) => {
                return(
                  <div className="skills__thumbnail" key={elem.id}>
                    <img src={elem.image} alt="skill" />
                  </div>
                )
              })}
            </div>
          </div>
      </section>
    </motion.div>
  )
}

export default Skills;