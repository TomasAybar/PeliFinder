import React from 'react'

const Filtros = () => {

    const handleSearch = (value) => {



        console.log(value)


        
    }

    return (
        <div className='text-center'>
            <input
                className='py-2 text-center border'
                placeholder='Pelicula que desea buscar..'
                type='text'
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    )
}

export default Filtros