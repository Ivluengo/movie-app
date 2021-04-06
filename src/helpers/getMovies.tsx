export interface MovieItem {
    id: string;
    title: string;
    nota: number;
    resumen: string;
    fechaEstreno: string;
    poster: string;
    backdrop: string;
}

export const getMovies = async (movieQuery: string) => {
    const api = '594939a196832017634a0d7b0271311b';
    const resp = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${encodeURI(movieQuery)}`
    );
    const { results } = await resp.json();
    console.log(results);

    const movies: MovieItem[] = results.map(
        (movie: any): MovieItem => {
            return {
                id: movie.id,
                title: movie.title,
                nota: movie.vote_average,
                resumen: movie.overview,
                fechaEstreno: movie.release_date,
                poster: movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : 'No hay poster',
                backdrop: movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`
                    : 'No hay backdrop',
            };
        }
    );

    return movies;
};
