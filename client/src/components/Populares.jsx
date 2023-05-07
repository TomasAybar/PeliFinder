import { Link as LinkRouter } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { usePopularMovies } from '../hooks/usePopularMovies';
import ReactLoading from 'react-loading';

const URLIMG = 'https://image.tmdb.org/t/p/w500'

const Populares = () => {

    const { backPage, nextPage, isLoading, getSearchPopular, page, popular } = usePopularMovies()

    return (
        <>
            {/* search */}
            <div className='text-center'>

                <input
                    className='w-3/4 md:w-1/2   rounded-sm py-2 px-2 text-center border mx-5'
                    placeholder='Pelicula que desea buscar..'
                    type='text'
                    onChange={(e) => getSearchPopular(e.target.value)}
                />

            </div>

            {/* contenedor peliculas */}
            <main>
                <h3 className='text-center text-3xl font-bold py-4 text-gray-300'>Peliculas Populares</h3>

                {/* Contenedor peliculas */}
                <div className='min-h-[70vh] container mx-auto flex flex-wrap items-center justify-around pb-14'>

                    {
                        isLoading
                            ? (
                                <div className='flex items-center justify-center min-h-[85vh]'>
                                    <ReactLoading
                                        type={'spinningBubbles'}
                                    />
                                </div>
                            )
                            : <>
                                {
                                    popular?.length !== 0
                                        ? popular?.map(movie => {
                                            return (
                                                <LinkRouter
                                                    to={`/movie/${movie.id}/${movie.title}`}
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
                                        : <p className='text-white text-xl text-center'>Lamentablemente, no se encontraron resultados para su búsqueda</p>

                                }
                            </>
                    }


                </div>

                {/* Paginador */}
                <div
                    className='flex items-center justify-evenly bg-purple-500 text-white font-bold fixed bottom-0 w-full h-[5vh]'

                >
                    <ArrowBackIcon
                        className='hover:text-yellow-300 cursor-pointer'
                        onClick={backPage} />

                    <p>Pagina {page}</p>

                    <ArrowForwardIcon
                        className='hover:text-yellow-300 cursor-pointer'
                        onClick={nextPage} />
                </div>

            </main>
        </>
    )
}

export default Populares