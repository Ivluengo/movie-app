import { MovieItem } from '../helpers/getMovies';

interface MovieGridItemProps {
    allMovies: MovieItem[];
}

const MovieGridItem: React.FC<MovieGridItemProps> = ({ allMovies }) => {
    return (
        <div className='gridImages grid gap-8'>
            {allMovies?.map((movie) => {
                return (
                    movie.poster !== 'No hay poster' && (
                        <div
                            key={movie.id}
                            className='movieItem text-center p-5 bg-white rounded-md'
                        >
                            <img
                                className='u-max-full-width rounded-xl'
                                src={movie.poster}
                                alt={movie.title}
                            />
                            <h5>{movie.title}</h5>
                            <small className='nota bg-yellow-400 p-3 rounded-full font-bold text-2xl'>
                                {movie.nota}
                            </small>
                            <p className='-ml-2'>📅 {movie.fechaEstreno}</p>
                            <p className='descripcion mb-2'>
                                {movie.resumen.substr(0, 80) + '...'}
                            </p>
                        </div>
                    )
                );
            })}
        </div>
    );
};

export default MovieGridItem;
