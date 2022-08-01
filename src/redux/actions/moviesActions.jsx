import axios from "axios";

const URL = 'https://api.themoviedb.org/3/movie/popular?api_key=da105d94ec008192c58e8fcad8b05171&language=es-MX'


const moviesActions = {


    getPopularMovies: () => {

        return async (dispatch, getState) => {

            const res = await axios.get(URL)
            // console.log(res.data)
            // dispatch({
            //     type: 'GET_POPULAR_MOVIES',
            //     payload: res
            // })
            return res

        }

    },

    getOneMovie: (id) => {

        return async (dispatch, getState) => {

            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=da105d94ec008192c58e8fcad8b05171&language=es-MX`)
            return res

        }
    }

}

export default moviesActions;