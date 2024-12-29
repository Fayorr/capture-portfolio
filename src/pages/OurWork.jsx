import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import styled from "styled-components";
import { MovieState } from "../constant/movieState";
import { 
  pageAnimation, 
  fade, 
  photoAnim, 
  lineAnim, 
  slider, 
  sliderContainer 
} from "../constant/animation";

const MovieCard = ({ movie }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { 
    amount: 0.1,
    once: true 
  });

  return (
    <Movie 
      ref={ref}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.h2 variants={fade}>{movie.title}</motion.h2>
      <motion.div variants={lineAnim} className="line" />
      <Link to={`/work/${movie.id}`}>
        <Hide>
          <motion.img
            variants={photoAnim}
            src={movie.mainImg}
            alt={movie.title}
          />
        </Hide>
      </Link>
    </Movie>
  );
};

const OurWork = () => {
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        {[Frame1, Frame2, Frame3, Frame4].map((Frame, index) => (
          <Frame key={index} variants={slider} />
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        {MovieState.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
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
    padding: 1rem 0;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  opacity: 0;

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
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;