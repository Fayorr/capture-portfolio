import React, { useState, useEffect } from "react"
import styled from "styled-components";
import { Layout } from "../styles";
import { LayoutGroup, motion, useAnimate, useInView } from "motion/react";
import Toggle from "../constant/Toggle";
const FaqSection = () => {
    
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    }

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { amount: 0.45 });

  useEffect(() => {
    if (isInView) {
      // Animate all elements within scope with fade animation
      animate(scope.current, 
        { opacity: [0, 1] }, // Fade from 0 to 1 opacity
        { 
          duration: 2,     // Animation duration in seconds
          ease: "easeOut"    // Easing function
        }
      );
    }
  }, [isInView]);
  return (
    <Faq ref={scope}>
        <h2>Any Questions <span>FAQ</span></h2>
        <LayoutGroup>
            <Toggle title='How Do I Start'>
                <Question> 
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, molestiae?</p>
                </div>
                </Question>
            </Toggle>
            <Toggle title="Daily Schedule">
                <Question>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, molestiae?</p>
                    </div>
                </Question>
            </Toggle>
            <Toggle title="Different payment Methods">
                <Question>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, molestiae?</p>
                    </div>
                </Question>
            </Toggle>
            <Toggle title="What products do you offer?">
                <Question>  
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, molestiae?</p>
                    </div>
                </Question>
            </Toggle>
        </LayoutGroup>
    </Faq>
  );
}
 const Faq = styled(Layout)`
    display: block; 
    opacity: 0;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: 400;
    }
       
    .hide{
        display: none;
    }
 `;
const Question = styled.div`
    padding: 1rem 0rem;
`;
export default FaqSection;