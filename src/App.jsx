import './App.css'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
import ContactUs from './pages/ContactUs'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Nav />
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<AboutUs />} />
        <Route path='/ourwork' element={<OurWork />} />
        <Route path='/contact' element={<ContactUs />} />


      </Routes>
      <AboutUs />
    </>
  )
}

export default App
