import './App.css';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "motion/react"

function App() {
	const location = useLocation();
	console.log(location.key);
	return (
		<>
			<Nav />
			<GlobalStyle />
			<AnimatePresence>
				<Routes location={location} key={location.key}>
					<Route path="/" element={<AboutUs />} />
					<Route path="/about" element={<AboutUs />} />
					<Route path="/work">
						<Route index element={<OurWork />} />
						<Route path="/work/:id" element={<MovieDetail />} />
					</Route>

					<Route path="/contact" element={<ContactUs />} />
					<Route path="*" element={<AboutUs />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;
