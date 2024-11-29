import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<StyledNav>
			<h1>
				<NavLink to="/" id="logo">
					Capture
				</NavLink>
			</h1>
			<ul>
				<li>
					<NavLink to="/about">1. About Us</NavLink>
				</li>
				<li>
					<NavLink to="/work">2. Our Work</NavLink>
				</li>
				<li>
					<NavLink to="/contact">3. Contact Us</NavLink>
				</li>
			</ul>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 7rem;
	background-color: #282828;
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
`;

export default Nav;
