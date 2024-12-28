import { useState } from "react"
import styled from "styled-components";
import { motion } from "motion/react";

const Toggle = ({children, title}) => {
    const [toggle, setToggle] = useState(false);
  return (
    <ToggleContainer onClick={() => setToggle(!toggle)}>
        <motion.h4 layout>{title}</motion.h4>
        {toggle ? children : ""}
        <motion.div className="faq-line"></motion.div>
    </ToggleContainer>
  )
}
const ToggleContainer = styled(motion.div)`
    padding: 1rem 0rem;
    cursor: pointer;
  
    h4{
        color: white;
        font-size: 2rem;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin-top: .4rem;
     
        width: 100%;
    }
    .answer{
        padding: 1rem 0rem;
        display: block;
    p{
        padding: 0.9rem 0;
    }
    }
`;

export default Toggle;