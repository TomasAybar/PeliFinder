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
    <div style={{
      backgroundColor: '#1f1f1f'
    }}>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Details />} />
      </Routes>

      {/* <Navbar /> */}

      {/* <Hero /> */}
      {/* <Populares /> */}
    </div>
  )
}

export default App
