import { movieDB, watchTV } from '../../api/movieDB';


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

    getWatchTV: (title) => {
        return async (dispatch, getState) => {

            const res = await watchTV.get(`/search?title=${title}`)

            return res

        }
    }

}

export default moviesActions;