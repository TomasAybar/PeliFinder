import React from 'react'
import logo from '../assets/img/icons/logo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* logo */}
            <div>

                <img src={logo} alt="logo" />


            </div>

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