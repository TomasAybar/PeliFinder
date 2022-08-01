import React, { useState, useEffect } from 'react'
import moviesActions from '../redux/actions/moviesActions'
import { Link as LinkRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const URLIMG = 'https://image.tmdb.org/t/p/w500'

const Populares = () => {

    const dispatch = useDispatch();

    const [popularMovies, setPopularMovies] = useState([]) // traigo mis peliculas
    const [page, setPage] = useState(1)

    // llama a las populares
    useEffect(() => {

        dispatch(moviesActions.getPopularMovies(page))
            .then(res => setPopularMovies(res.data.results))

    }, [page])


    // cambia el el hook del paginador
    const changePage = (value) => {

        value === 'next'
            ? page < 1000 && setPage(page + 1)
            : page > 1 && setPage(page - 1)

    }

    return (

        <div>
            <h3 className='text-center text-3xl font-bold py-4 text-gray-300'>Peliculas</h3>

            {/* Contenedor peliculas */}
            <div className='container mx-auto flex flex-wrap items-center justify-around pb-14'>

                {
                    popularMovies?.map(movie => {
                        return (
                            <LinkRouter
                                to={`/movie/${movie.id}`}
                                key={movie.id}
                            >
                                <div
                                    className='card-movie m-4 cursor-pointer shadow-md'
                                >

                                    <img
                                        src={URLIMG + movie.poster_path}
                                        alt={movie.title}
                                        className='poster'
                                    />
                                </div>
                            </LinkRouter>
                        )
                    })
                }

            </div>

            {/* Paginador */}
            <div
                className='flex items-center justify-evenly bg-purple-500 text-white font-bold fixed bottom-0 w-full'

            >
                <button
                    className='text-4xl hover:text-yellow-300'
                    onClick={(e) => changePage(e.target.value)}
                    value='back'
                >
                    ⬅
                </button>

                <p>Pagina {page}</p>

                <button
                    className='text-4xl hover:text-yellow-300'
                    onClick={(e) => changePage(e.target.value)}
                    value='next'
                >
                    ➡
                </button>

            </div>

        </div>
    )
}

export default Populares