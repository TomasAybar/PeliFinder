import React from 'react'
import miLista from '../assets/img/icons/plus.svg'
import play from '../assets/img/icons/play.svg'
import info from '../assets/img/icons/info.svg'

const Hero = () => {
    return (
        <div className='bg-black text-white py-2'>

            <div className='flex items-center justify-evenly'>
                <div className='flex flex-col items-center justify-center cursor-pointer p-2'>
                    <img className='' src={miLista} alt="mi lista" />
                    <p>Mi lista</p>
                </div>

                <div className='bg-white text-black flex items-center justify-center px-10 py-2 cursor-pointer gap-3'>
                    <img className=' bg-black' src={play} alt="play" />
                    <p>Reproducir</p>
                </div>

                <div className='flex flex-col items-center justify-center cursor-pointer p-2'>
                    <img className='' src={info} alt="" />
                    <p>Info</p>
                </div>
            </div>
        </div>
    )
}

export default Hero