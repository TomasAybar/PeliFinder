import axios from "axios";

const URL = 'https://api.themoviedb.org/3/movie/popular?api_key=da105d94ec008192c58e8fcad8b05171&language=es-MX'


const moviesActions = {


    getPopularMovies: (page) => {

        return async (dispatch, getState) => {

            const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=da105d94ec008192c58e8fcad8b05171&language=es-MX&page=${page}`)
            return res

        }
    },

    getOneMovie: (id) => {

        return async (dispatch, getState) => {

            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=da105d94ec008192c58e8fcad8b05171&language=es-MX`)
            return res

        }
    },

    getSimilarOneMovie: (id) => {

        return async (dispatch, getState) => {

            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=da105d94ec008192c58e8fcad8b05171&language=es-MX`)
            return res

        }
    },

}

export default moviesActions;