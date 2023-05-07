import React, { useEffect, useState } from 'react'
import { movieDB } from '../api/movieDB'

export const usePopularMovies = (page) => {
    const [isLoading, setIsLoading] = useState(true)

    const [moviesState, setMoviesState] = useState({
        popular: [],
    })

    const getPopularMovies = async () => {

        const popularRes = await movieDB.get(`/movie/popular?page=${page}`)

        setMoviesState({
            popular: popularRes.data.results,
        })

        setIsLoading(false)
    }

    useEffect(() => {
        getPopularMovies()
    }, [])

    return {
        ...moviesState,
        isLoading

    }
}
