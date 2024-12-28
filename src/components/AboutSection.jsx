import React from 'react'
import styled from 'styled-components'
import {Layout, Description, Image, Hide} from '../styles.jsx'
import home1 from "../img/home1.png"
import Wave from './Wave.jsx'
import { motion } from "motion/react"
import { titleAnim, fade, photoAnim } from "../constant/animation.js"


const AboutSection = () => {
  return (
   <Layout>
        <Description>
            <div className="title">
                <Hide>
                    <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}>your <span>dreams</span> come
                </motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}>true.</motion.h2>
                </Hide>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </div> 
        </Description>
        <Image>
            <motion.img variants={photoAnim} initial='hidden' animate='show' src={home1} alt="hero-image" />
        </Image>
        <Wave />
   </Layout>
  )
};



export default AboutSection