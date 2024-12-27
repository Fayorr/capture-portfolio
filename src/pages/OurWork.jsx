import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MovieState } from '../constant/movieState';
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import { pageAnimation, fade, photoAnim } from '../constant/animation';

const OurWork = () => {
	return (
		<Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
			<AnimatePresence>
				{MovieState.map((movie, index) => (
					<Movie key={index} variants={pageAnimation}>
						<motion.h2 variants={fade}>{movie.title}</motion.h2>
						<motion.div className="line"></motion.div>
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
	h2 {
		padding: 1rem 0rem;
	}
`;
const Movie = styled.div`
	padding-bottom: 10rem;
	.line {
		height: 0.33rem;
		background: #cccccc;
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
`
export default OurWork;
