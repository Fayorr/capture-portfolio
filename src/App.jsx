import { useState } from 'react'
import './App.css'
import AboutUs from './pages/AboutUs'
import GlobalStyle from './components/GlobalStyle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />
      <AboutUs />
    </>
  )
}

export default App
