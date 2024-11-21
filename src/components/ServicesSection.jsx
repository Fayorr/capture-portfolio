import React from 'react'
import clock from "../img/clock.svg"
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
import {Layout, Description, Image, Hide} from '../styles'
import styled from 'styled-components'
const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>High <span>quality</span> services</h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2}  alt='camera' />
      </Image>
    </Services>
  )
};

const Services = styled(Layout)`
padding: 5rem 7rem;
  h2{
    padding-bottom: 4.5rem;
  }
  p{
    width: 70%;
    padding: 2rem 0rem 4rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
   flex-basis: 14em;
   .icon {
    display: flex;
    align-items: center;
    width: 40%;
    img{
      width: 30%;
    }
   }
   h3{
    background-color: white;
    color: black;
    font-size: .7rem;
    margin-left: 1rem;
    padding: 0.5rem 1rem;
   }
   p{
    padding: 2rem 0;
   }
`;
export default ServicesSection