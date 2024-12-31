import styled from "styled-components";
import { motion } from "motion/react";

export const Layout = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 7rem;
    position: relative;
    color: white;
    @media (max-width: 768px) {
    flex-direction: column;
    padding: 5rem 0rem;
  }
`;
export const Description = styled.div`
display: flex;
flex-direction: column;
    flex: 1;
    padding-right: 5rem;
    font-weight: lighter;
    z-index: 2;
    @media (max-width: 768px) {
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      padding: 0;
  }
`;
export const Image = styled.div`
    z-index: 2;
    flex: 1;
    overflow: hidden;
    margin: 0;
    img{
      width: 100%;
      height: 80vh;
        object-fit: cover;
    } 
    @media (max-width: 768px) {
      padding: 0;
      width: 100%;
      img{
        height: 50vh;
        padding: 0;
      }
  }
`;
export const Hide = styled.div`
  overflow: hidden; 
  h2{
    font-weight: 400;
  } 
`;
