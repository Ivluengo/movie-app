import React, { useEffect, useState } from 'react';
import { getMovies, MovieItem } from './../helpers/getMovies';
import MovieGridItem from './MovieGridItem';

interface MovieGridProps {
    movieQuery: string;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movieQuery }) => {
    const [allMovies, setAllMovies] = useState<MovieItem[]>([]);

    useEffect(() => {
        getMovies(movieQuery).then((movies) => setAllMovies(movies));
    }, [movieQuery]);

    return (
        <div
            className='mb-12 py-36 px-24'
            style={
                allMovies[0]?.backdrop
                    ? {
                          backgroundImage: `linear-gradient(to bottom,rgba(243, 244, 246) 0%, transparent 5%, transparent 95%, rgba(243, 244, 246)) ,url(${allMovies[0].backdrop})`,
                          backgroundSize: 'cover',
                      }
                    : {}
            }
        >
            <h2 className='gridTitle'>
                <span className='bg-white p-4 rounded-md'>{movieQuery}</span>
            </h2>

            <MovieGridItem allMovies={allMovies} />
            {/* <div
                className='gridImages grid gap-8'
                style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}
            >
                {allMovies?.map((movie) => {
                    return (
                        movie.poster !== 'No hay poster' && (
                            <div key={movie.id} className='text-center p-5 bg-white rounded-md'>
                                <h5>{movie.title}</h5>
                                <img
                                    className='u-max-full-width rounded-xl'
                                    src={movie.poster}
                                    alt={movie.title}
                                />
                            </div>
                        )
                    );
                })}
            </div> */}
        </div>
    );
};

export default MovieGrid;
