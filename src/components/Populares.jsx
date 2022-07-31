import React from 'react'
import moviesActions from '../redux/actions/moviesActions'

import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

const URLIMG = 'https://image.tmdb.org/t/p/w500'

const Populares = () => {

    const dispatch = useDispatch();

    const [popularMovies, setPopularMovies] = useState([]) // traigo mis peliculas


    useEffect(() => {

        dispatch(moviesActions.getPopularMovies())
            .then(res => setPopularMovies(res.data.results))

    }, [])



    console.log(popularMovies)
    return (


        <div>
            <h3 className='text-center text-3xl font-bold py-4'>Peliculas</h3>

            {/* Contenedor peliculas */}
            <div className='container mx-auto flex flex-wrap items-center justify-around'>

                {
                    popularMovies?.map(movie => {
                        return (
                            <div key={movie.id} className='card-movie m-4 cursor-pointer shadow-md'>

                                <img
                                    src={URLIMG + movie.poster_path}
                                    alt={movie.title}
                                    className='poster'
                                />
                            </div>
                        )
                    })
                }


            </div>

        </div>
    )
}

export default Populares