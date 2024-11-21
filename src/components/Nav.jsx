import styled from "styled-components";
import React from 'react'

const Nav = () => {
  return (
    <StyledNav>
        <h1><a href="#" id="logo">Capture</a></h1>
        <ul>
            <li><a href="#">1. About Us</a></li>
            <li><a href="#">2. Our Work</a></li>
            <li><a href="#">3. Contact Us</a></li>
        </ul>
    </StyledNav>
  )
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    ul{
        display: flex;
        list-style-type: none;
    }
    li{
        padding-left: 5rem;

    }
    a{
        color: white;
        text-decoration: none;
        font-size: .8rem;
    }
    #logo{
        font-size: 1.1rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }

`;

export default Nav