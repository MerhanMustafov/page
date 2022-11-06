import axios from 'axios'

// const xRapidApiKey = "f8221dfdc6msh5d211097e39ba7cp15c49fjsneb6740958cab";
// const xRapidApiHost = "gogoanime2.p.rapidapi.com";

// function generateOptions(method: string, endpoint: string){

// }

export async function searchAnime() {
  const options = {
    method: 'GET',
    url: 'https://gogoanime2.p.rapidapi.com/search',
    params: { keyw: 'one piece'},
    headers: {
      'X-RapidAPI-Key': 'f8221dfdc6msh5d211097e39ba7cp15c49fjsneb6740958cab',
      'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com',
    },
  }

  const res = await axios.request(options)
  return res
}


export  function getPopularAnime(){
    return axios.get("https://gogoanime.consumet.org/popular")
    
}