import axios from 'axios';

export function getMoviesByTitle(type: string, movieTitle: string){
    // type === "movie" || "tv"
    const url = `https://api.themoviedb.org/3/search/${type}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${movieTitle}`;
    return axios.get(url)

    

}