import React, { useState, useEffect } from 'react'
import moviesActions from '../redux/actions/moviesActions'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const URLIMG = 'https://image.tmdb.org/t/p/w500'

const Details = () => {
    const dispatch = useDispatch();

    const [movie, setMovie] = useState() // traigo mis peliculas

    const { id } = useParams(); // id 

    useEffect(() => {

        dispatch(moviesActions.getOneMovie(id))
            .then(res => setMovie(res.data))

    }, [id])

    // console.log(movie)
    return (
        <div className='text-center flex items-center justify-center flex-col'>
            <p className='mb-2 text-2xl'>{movie?.title}</p>
            <img
                src={URLIMG + movie?.poster_path}
                alt={movie?.title}
                className='poster'
            />
        </div>
    )
}

export default Details