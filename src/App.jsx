import './styles/index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Details from './pages/Details'

import Hero from './components/Hero'
import Populares from './components/Populares'

// router dom
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Details />}/>
      </Routes>
      
      {/* <Hero /> */}
      {/* <Populares /> */}
    </>
  )
}

export default App
