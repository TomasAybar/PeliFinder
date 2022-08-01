import './styles/index.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Populares from './components/Populares'
import Details from './pages/Details'

// router dom
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/movie/:id' element={<Details />}/>
        <Route path='/' element={<Populares />} />
      </Routes>
      {/* <Hero /> */}
      {/* <Populares /> */}
    </>
  )
}

export default App
