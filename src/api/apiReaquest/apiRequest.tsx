import axios from 'axios'

export  function getPopularAnime(){
    return axios.get("https://gogoanime.consumet.org/popular")
    
}
export  function getTopAiring(){
    return axios.get("https://gogoanime.consumet.org/top-airing")
    
}
export  function getAnimeDetailById(animeId: string){
    return axios.get(`https://gogoanime.consumet.org/anime-details/${animeId}`)
    
}