import React from 'react'
import { pageAnimation } from '../constant/animation'
import { motion } from "motion/react"

const ContactUs = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <h1>Our Contact</h1>
    </motion.div>
  )
}

export default ContactUs