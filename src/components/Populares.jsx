import { Link as LinkRouter } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { usePopulares } from '../hooks/usePopulares';


const URLIMG = 'https://image.tmdb.org/t/p/w500'

const Populares = () => {

    const { backPage, nextPage, searching, popularMovies, page } = usePopulares()

    return (
        <>
            {/* search */}
            <div className='text-center'>

                <input
                    className='w-3/4 md:w-1/2   rounded-sm py-2 px-2 text-center border mx-5'
                    placeholder='Pelicula que desea buscar..'
                    type='text'
                    onChange={(e) => searching(e.target.value)}
                />

            </div>

            {/* contenedor peliculas */}
            <div>
                <h3 className='text-center text-3xl font-bold py-4 text-gray-300'>Peliculas Populares</h3>

                {/* Contenedor peliculas */}
                <div className='contenedor-peliculas container mx-auto flex flex-wrap items-center justify-around pb-14'>

                    {
                        popularMovies?.length !== 0
                            ? popularMovies?.map(movie => {
                                return (
                                    <LinkRouter
                                        to={`/movie/${movie.id}`}
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

            </div>
        </>
    )
}

export default Populares