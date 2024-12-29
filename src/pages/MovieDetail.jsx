import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'; // Change from useLocation to useParams
import { MovieState } from '../constant/movieState';

const MovieDetail = () => {
	const { id } = useParams(); // Extract the dynamic ID from the route
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		// Find the movie by matching the reconstructed URL
		const currentMovie = MovieState.find((stateMovie) => stateMovie.id === Number(id));
		setMovie(currentMovie);
	}, [id]);

	if (!movie) {
		return <div>Loading or No Movie Found</div>;
	}

	return (
		<Details>
			<Headline>
				<h2>{movie.title}</h2>
				<img src={movie.mainImg} alt={movie.title} />
			</Headline>
			<Awards>
				{movie.awards.map((award) => (
					<Award key={award.title} title={award.title} description={award.description} />
				))}
			</Awards>
			{movie.secondaryImg && (
				<SecondaryImage>
					<img src={movie.secondaryImg} alt={`${movie.title} secondary`} />
				</SecondaryImage>
				
			)}
		</Details>
	);
};

// ... rest of your existing styled components and Award component

const Details = styled.div`
	color: white;
`;
const Headline = styled.div`
	min-height: 90vh;
	padding-top: 20vh;
	position: relative;
	h2 {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -10%);
		z-index: 2;
		color: white;
	}
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
		object-position: top;
	}
`;

const Awards = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 2rem 5%;
`;

const SecondaryImage = styled.div`
	img {
		width: 100%;
		height: 100vh;
		/* object-position: center; */
		object-fit: cover;
			}
`;

const Award = ({ title, description }) => {
	return (
		<AwardStyle>
			<h3>{title}</h3>
			<div className="line"></div>
			<p>{description}</p>
		</AwardStyle>
	);
};

const AwardStyle = styled.div`
	padding: 1rem;
	text-align: center;
	.line {
		width: 100%;
		background: #23d997;
		height: 0.5rem;
		margin: 1rem 0;
	}
	h3 {
		font-size: 1.5rem;
	}
	p {
		padding: 1rem 0;
	}
`;

export default MovieDetail;
