import React, {useState} from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Nav = () => {
	const [toggle, setToggle] = useState(true);

const handleClick = () => {
	setToggle(!toggle)
	console.log("clicked")
}

	return (
		<StyledNav>
			<h1>
				<NavLink to="/" id="logo">
					Capture
				</NavLink>
			</h1>
			<ul className={toggle ? "show-menu" : ""}>
				<li className='cancel--button' onClick={handleClick}>X</li>
				<li>
					<NavLink to="/about">About Us</NavLink>
				</li>
				<li>
					<NavLink to="/work">Our Work</NavLink>
				</li>
				<li>
					<NavLink to="/contact">Contact Us</NavLink>
				</li>
			</ul>
			<div onClick={handleClick}><i className="fa-solid fa-bars" 
			></i></div>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	position: sticky;
	top: 0; 
	min-height: 10vh;
	max-height: 11vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 3.5rem;
	background-color: #282828;
	z-index: 10;
	ul {
		display: flex;
		list-style-type: none;
	}
	li {
		padding-left: 5rem;
	}
	a {
		color: white;
		text-decoration: none;
		font-size: 0.8rem;
	}
	#logo {
		font-size: 1.1rem;
		font-family: 'Lobster', cursive;
		font-weight: lighter;
	}
	.cancel--button{
		display: none;
	}
	.fa-bars{
			display: none;
		}    
	  @media (max-width: 768px) {
		li{
			padding: 2rem 0;
			display: flex;
			align-items: center;
			justify-content: center;
			list-style-type: none;
		}
		ul{
			/* background-color: red; */
			/* display: flex; */
			display: none;
			position: absolute;
			right: 0;
			top:0;
			flex-direction: column;
			height: 100vh;
			width: 50%;
			background-color: #282828;
			/* padding: 1rem 0; */
			&.show-menu {
        	display: flex;
      }
		}
		.cancel--button{
			display: block;
			color: WHite;
			font-size: 2.5rem;
			cursor: pointer;
			align-self: flex-start;
			padding: 10% 0 1rem 10%;
			/* padding-left: 10%; */
		}
		.fa-bars{
            display: block;
			color: white;
            font-size: 1.8rem;
            cursor: pointer;
		}   
		
  }
`;

export default Nav;
