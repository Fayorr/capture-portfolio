import React from 'react'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import FaqSection from '../components/FaqSection'
import { motion } from "motion/react"
import { pageAnimation } from '../constant/animation.js'

const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" >
      <AboutSection /> 
      <ServicesSection />
      <FaqSection />
    </motion.div>
  )
}

export default AboutUs