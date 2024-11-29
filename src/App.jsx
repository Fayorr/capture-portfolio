import './App.css';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Nav />
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<AboutUs />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="/work">
					<Route index element={<OurWork />} />
					<Route path="/work/:id" element={<MovieDetail />} />
				</Route>

				<Route path="/contact" element={<ContactUs />} />
				<Route path="*" element={<AboutUs />} />
			</Routes>
		</>
	);
}

export default App;
