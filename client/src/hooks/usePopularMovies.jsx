import { useEffect, useState } from 'react'
import { movieDB } from '../api/movieDB'

export const usePopularMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [reload, setReload] = useState(false)

    const [moviesState, setMoviesState] = useState({
        popular: [],
    })

    const getPopularMovies = async () => {
        setIsLoading(true)
        const popularRes = await movieDB.get(`/movie/popular?page=${page}`)

        setMoviesState({
            popular: popularRes.data.results,
        })

        setIsLoading(false)
    }

    const getSearchPopular = async (text) => {

        setIsLoading(true)
        if (text !== '' && text.length > 0) {

            const popularSearchRes = await movieDB.get(`/search/movie?query=${text}`)
            setMoviesState({
                popular: popularSearchRes.data.results,
            })

        } else {
            setReload(!reload)
        }
        setIsLoading(false)
    }

    const nextPage = () => page < 1000 && setPage(page + 1)
    const backPage = () => page > 1 && setPage(page - 1)

    useEffect(() => {
        getPopularMovies()
    }, [page])

    return {
        ...moviesState,
        page,
        isLoading,
        nextPage,
        backPage,
        getSearchPopular
    }
}
