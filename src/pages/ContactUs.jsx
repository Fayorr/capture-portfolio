import React from 'react'
import { pageAnimation, titleAnim } from '../constant/animation'
import styled from 'styled-components'
import { motion } from "motion/react"

const ContactUs = () => {

  return (
    <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>
            Get in touch.
          </motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
        <Social variants={titleAnim} >
          <Circle />
          <h2>Send Us A Message.</h2>
        </Social>
        </Hide>
        <Hide>
        <Social variants={titleAnim} >
          <Circle />
          <h2>Send an email</h2>
        </Social>
        </Hide>
        <Hide>
        <Social variants={titleAnim} >
          <Circle />
          <h2>Social Media.</h2>
        </Social>
        </Hide>
      </div>
    </ContactStyle>
  )
}

const ContactStyle = styled(motion.div)`
  padding: 4rem 10rem;
  color: #353535;
  min-height: 90vh;
  background-color: #FFF;
  @media (max-width: 768px) {
    font-size: 1rem;
      justify-content: center;
      margin: 0 auto;
      padding: 5rem 3rem;
  }
  `;
  const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
  `;
  const Hide = styled.div`
    overflow: hidden;
  `;
  const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background-color: #353535;
  `;
  const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2{
      margin: 2rem;
    }
  `;
export default ContactUs