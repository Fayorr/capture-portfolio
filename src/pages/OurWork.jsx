import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import athlete from '../img/athlete-small.png';
// import theracer from '../img/theracer-small.png';
// import goodtimes from '../img/goodtimes-small.png';
import { MovieState } from '../constant/movieState';

const OurWork = () => {
	return (
		<Work>
			{MovieState.map((movie, index) => (
				<Movie key={index}>
					<h2>{movie.title}</h2>
					<div className="line"></div>
					<Link to={`/work/${movie.id}`}>
						<img src={movie.mainImg} alt="athlete" />
					</Link>
				</Movie>
			))}
			
		</Work>
	);
};

const Work = styled.div`
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
export default OurWork;
