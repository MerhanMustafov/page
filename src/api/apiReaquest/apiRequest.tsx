import axios from 'axios'

export  function getPopularAnime(page: number){
    return axios.get(`https://gogoanime.consumet.org/popular?page=${page}`)
}
export  function getTopAiring(page: number){
    return axios.get(`https://gogoanime.consumet.org/top-airing?page=${page}`)
}
export  function getAnimeDetailById(animeId: string){
    return axios.get(`https://gogoanime.consumet.org/anime-details/${animeId}`)
}
export  function getAnimeEpisode(episodeId: string){
    return axios.get(`https://gogoanime.consumet.org/vidcdn/watch/${episodeId}`)
}
export  function getAnimeByTitle(animeTitle: string){
    return axios.get(`https://gogoanime.consumet.org/search?keyw=${animeTitle}`)
}
export  function getAnimesByGenre(genre: string, currentPage: number){
    return axios.get(`https://gogoanime.consumet.org/genre/${genre}?page=${currentPage}`)
}