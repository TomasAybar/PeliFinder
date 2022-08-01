import './styles/index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Details from './pages/Details'
import ScrollTop from './components/ScrollTop' // empieza siempre arriba
import BotonScrollToTop from 'react-scroll-to-top'

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
      <ScrollTop /> 

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Details />} />
      </Routes>

      <BotonScrollToTop 
        smooth
        style={{
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          backgroundColor: '#E3011F',
          paddingBottom: '20'
        }}

        component={
          <p style={{
            fontSize: '1.5rem',
            color: '#ffffff',
            fontWeight: '600'
          }}>⬆</p>}
      />

    </div>
  )
}

export default App
