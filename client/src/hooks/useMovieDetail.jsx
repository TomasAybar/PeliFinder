import { useEffect, useState } from 'react'
import { movieDB, watchTV } from '../api/movieDB'

export const useMovieDetail = (movieID, movieTitle) => {

    const [isLoading, setIsLoading] = useState(true)

    const [moviesState, setMoviesState] = useState({
        movieFull: undefined,
        movieSimilar: [],
        platforms: []
    })

    const getMovieDetail = async () => {

        const movieDetailPromise = movieDB.get(`/movie/${movieID}`)
        const similarPromise = movieDB.get(`/movie/${movieID}/similar`)
        const platformPromise = watchTV.get(`/search?title=${movieTitle}`)

        const res = await Promise.all([
            movieDetailPromise,
            similarPromise,
            platformPromise
        ])



        setMoviesState({
            movieFull: res[0].data,
            movieSimilar: res[1].data.results,
            platforms: res[2].data.results[0].platforms,
        })


        setIsLoading(false)


    }


    useEffect(() => {
        getMovieDetail()
    }, [])

    return {
        ...moviesState,
        isLoading
    }
}
