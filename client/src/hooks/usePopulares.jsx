import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import moviesActions from '../redux/actions/moviesActions';

export const usePopulares = () => {

    const dispatch = useDispatch();

    // HOOKS
    const [popularMovies, setPopularMovies] = useState() // traigo mis peliculas
    const [page, setPage] = useState(1)
    const [reload, setReload] = useState(false)

    // llama a las populares
    useEffect(() => {

        dispatch(moviesActions.getPopularMovies(page))
            .then(res => setPopularMovies(res.data.results))

    }, [reload, page])


    const nextPage = () => page < 1000 && setPage(page + 1)
    const backPage = () => page > 1 && setPage(page - 1)



    // ejecuta la busqueda del input
    const searching = async (value) => {

        if (value !== '' && value.length > 0) {

            const res = await dispatch(moviesActions.getSearchMovie(value))
            setPopularMovies(res.data.results)

        } else {

            setReload(!reload)
        }
    }


    return {
        searching,
        backPage,
        nextPage,
        popularMovies,
        page
    }
}
