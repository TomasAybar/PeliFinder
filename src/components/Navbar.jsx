import React from 'react'
import logo from '../assets/img/icons/logo.png'
import { Link as LinkRouter } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>

            {/* logo */}
            <LinkRouter to={'/'}>
                <img src={logo} alt="logo" />
            </LinkRouter>

            {/* navegacion */}
            <div className='container mx-auto flex items-center justify-evenly text-xl text-white'>
                <p>Series</p>
                <p>Peliculas</p>
                <p>Mi lista</p>
            </div>
        </div>
    )
}

export default Navbar