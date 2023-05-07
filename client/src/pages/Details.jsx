import { useParams } from 'react-router-dom'
import { useMovieDetail } from '../hooks/useMovieDetail'
import ReactLoading from 'react-loading';


const URLIMG = 'https://image.tmdb.org/t/p/w500'

const Details = () => {

    const { id, name } = useParams();

    const { isLoading, movieFull, platforms } = useMovieDetail(id, name)

    return (
        <>
            {
                isLoading
                    ? (
                        <div className='flex items-center justify-center min-h-[85vh]'>
                            <ReactLoading
                                type={'spinningBubbles'}
                            />
                        </div>
                    )
                    : (
                        <div className='py-10 '>
                            {/* pelicula principal */}

                            <div className='text-center flex items-center justify-center flex-col container mx-auto'>
                                <div className='flex flex-col items-center justify-center mb-5'>
                                    <h1 className='mb-3 text-3xl text-gray-300'>{movieFull.title}</h1>
                                    <img
                                        src={URLIMG + movieFull.poster_path}
                                        alt={movieFull.title}
                                        className='poster mb-5'
                                    />
                                    <p className='text-gray-300 text-base md:text-xl w-full px-3 md:px-0 md:w-1/2'>{movieFull.overview}</p>
                                </div>

                                {
                                    platforms?.length > 0 &&
                                    (
                                        <div className='flex flex-col items-center justify-center border border-dashed border-gray-300 w-full p-5'>
                                            <p className='text-gray-300 text-base md:text-xl'>Película disponible en las siguientes plataformas:</p>

                                            {
                                                platforms.length > 0 && (
                                                    <div className='mt-3'>
                                                        {platforms.map((plat, index) => (
                                                            <p className='mb-2' key={index}>
                                                                <a className='text-yellow-400 font-bold cursor-pointer hover:text-purple-600'
                                                                    href={plat.url}
                                                                    target='_blank'>{plat.name}
                                                                </a>
                                                            </p>
                                                        ))}
                                                    </div>
                                                )
                                            }

                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default Details