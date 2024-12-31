import React, { useRef, useEffect } from 'react'
import clock from "../img/clock.svg"
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
import {Layout, Description, Image, Hide} from '../styles'
import styled from 'styled-components'
import { fade } from "../constant/animation"
import {motion, useInView, useAnimate} from "motion/react"

const ServicesSection = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { amount: 0.45, once: true });

  useEffect(() => {
    if (isInView) {
      // Animate all elements within scope with fade animation
      animate(scope.current, 
        { opacity: [0, 1] }, // Fade from 0 to 1 opacity
        { 
          duration: 1.5,     // Animation duration in seconds
          ease: "easeOut"    // Easing function
        }
      );
    }
  }, [isInView]);

  return (
    <Services ref={scope}>
      <Description>
        <h2>High <span>quality</span> services</h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="Efficiency icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="Teamwork icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="Diaphragm icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="Affordability icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt='Camera equipment showcase' />
      </Image>
    </Services>
  )
};

const Services = styled(Layout)`
  padding: 4rem 7rem;
  h2 {
    padding-bottom: 4.5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem;
  }
  opacity: 0; // Start with 0 opacity
  @media (max-width: 768px) {
    padding: 0;
    img{ 
      padding: 0;
      width: 100%;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  @media (max-width: 768px) {
    justify-content: center;
   padding: 0;
    margin: 0 auto;
    width: 100%;
      }
`;

const Card = styled.div`
   flex-basis: 14em;

   .icon {
    display: flex;
    align-items: center;
    width: 40%;
    img {
      width: 40%;
    }
   }
   h3 {
    background-color: white;
    color: black;
    font-size: .7rem;
    margin-left: 1rem;
    padding: 0.5rem 1rem;
   }
   p {
    padding: 2rem 0;
   }
   @media (max-width: 768px) {
   padding-left: 3rem;
    flex-basis: 14em; 
    align-items: center;
    justify-content: center;
    img{
      width: 40%;
    }
      }
`;

export default ServicesSection