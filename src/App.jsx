import './App.css';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import ScrollTop from './constant/ScrollTop';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"; // Changed from motion/react to framer-motion

function App() {
  const location = useLocation();
  
  return (
    <>
      <GlobalStyle />
      <Nav />
      <ScrollTop /> 
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/work">
            <Route index element={<OurWork />} />
            <Route path=":id" element={<MovieDetail />} /> {/* Simplified path */}
          </Route>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<AboutUs />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;