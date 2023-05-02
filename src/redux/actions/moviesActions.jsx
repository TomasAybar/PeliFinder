import { movieDB } from '../../api/movieDB';


const moviesActions = {

    getPopularMovies: (page) => {

        return async (dispatch, getState) => {

            const res = await movieDB.get(`/movie/popular?page=${page}`)

            return res

        }
    },

    getOneMovie: (id) => {

        return async (dispatch, getState) => {

            const res = await movieDB.get(`/movie/${id}`)

            return res

        }
    },

    getSimilarOneMovie: (id) => {

        return async (dispatch, getState) => {

            const res = await movieDB.get(`/movie/${id}/similar`)

            return res

        }
    },

    getSearchMovie: (text) => {

        return async (dispatch, getState) => {

            const res = await movieDB.get(`/search/movie?query=${text}`)

            return res

        }
    },

}

export default moviesActions;