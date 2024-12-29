import React, { useState } from "react"
import styled from "styled-components";
import { Layout } from "../styles";
import { LayoutGroup, motion } from "motion/react";
import Toggle from "../constant/Toggle";
const FaqSection = () => {
    
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    }
  return (
    <Faq>
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