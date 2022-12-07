/* eslint-disable array-callback-return */
import React from 'react';
import Data from './Data';
import Card from './Card';
import './resume.css';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.7, ease:'easeOut'}}
  >
      <section className="resume">
        <div className="container section">
          <h2 className="section__title">Resume</h2>

          <div className="resume__container grid">
            <div className="timeline grid">
              {Data.map((elem, id) => {
                if(elem.category === 'education') {
                  return(
                    <Card key={id} 
                          icon={elem.icon} 
                          title={elem.title} 
                          year={elem.year} 
                          entity={elem.entity}
                    />
                  )
                }
              })}
            </div>

            <div className="timeline grid">
              {Data.map((elem, index) => {
                if(elem.category === 'experience') {
                  return(
                    <Card key={index} 
                          icon={elem.icon} 
                          title={elem.title} 
                          year={elem.year} 
                          entity={elem.entity}
                    />
                  )
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Resume