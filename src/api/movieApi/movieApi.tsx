import axios from 'axios';

export function getMoviesByTitle(type: string, movieTitle: string){
    // type === "movie" || "tv"
    const url = `https://api.themoviedb.org/3/search/${type}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${movieTitle}`;
    return axios.get(url)
}

export function getMovieDetailById(type: string,movieId: number){
    return axios.get(`https://api.themoviedb.org/3/${type}/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
}
export function getMovieTrailerById(type: string, movieId: number){
    return axios.get(`https://api.themoviedb.org/3/${type}/${movieId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
}