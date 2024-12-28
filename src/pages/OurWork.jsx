import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MovieState } from '../constant/movieState';
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from '../constant/animation';

const OurWork = () => {
	return (
		<Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
			<motion.div variants={sliderContainer}>
				<Frame1 variants={slider}></Frame1>
				<Frame2 variants={slider}></Frame2>
				<Frame3 variants={slider}></Frame3>
				<Frame4 variants={slider}></Frame4>
			</motion.div>
			<AnimatePresence>
				{MovieState.map((movie, index) => (
					<Movie key={index} >
						<motion.h2 variants={fade}>{movie.title}</motion.h2>
						<motion.div variants={lineAnim} className="line"></motion.div>
						<Link to={`/work/${movie.id}`}>
							<Hide>
								<motion.img variants={photoAnim} src={movie.mainImg} alt="athlete" />
							</Hide>
						</Link>
					</Movie>
				))}
			</AnimatePresence>
		</Work>
	);
};

const Work = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 7rem;
	background: white;
	h2 {
		padding: 1rem 0rem;
	}
`;
const Movie = styled.div`
	padding-bottom: 10rem;
	.line {
		height: 0.33rem;
		background: #23d997;
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;
const Hide = styled.div`
	overflow: hidden;
`;

//Frame Animation 
const Frame1 = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 10%;
	width: 100%;
	height: 100vh;
	background: #fffebf;
	z-index: 2;
`;
const Frame2 = styled(Frame1)`
	background: #ff8efb;
`
const Frame3 = styled(Frame1)`
	background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
	background: #8effa0;
`

export default OurWork;
