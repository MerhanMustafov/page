import React, { useEffect, useState} from 'react'
import { useNavigate} from 'react-router-dom'
import {getAnimesByGenre} from '../../../../../../../api/apiReaquest/apiRequest'
import {GenresAnimeCard} from './GenresAnimeCard'
interface SingleAnimeData {
  animeId: string
  animeTitle: string
  animeImg: string
  releasedDate: string
  animeUrl: string
}

export function Genres(){
    let key = 1

    const listOfGenres = [
        "action",
        "adventure",
        "cars",
        "comedy",
        "crime",
        "dementia",
        "demons",
        "drama",
        "dub",
        "ecchi",
        "family",
        "fantasy",
        "game",
        "gourmet",
        "harem",
        "historical",
        "horror",
        "josei",
        "kids",
        "magic",
        "martial-arts",
        "mecha",
        "military",
        "Mmusic",
        "mystery",
        "parody",
        "police",
        "psychological",
        "romance",
        "samurai",
        "school",
        "sci-fi",
        "seinen",
        "shoujo",
        "shoujo-ai",
        "shounen",
        "shounen-ai",
        "slice-of-Life",
        "space",
        "sports",
        "super-power",
        "supernatural",
        "suspense",
        "thriller",
        "vampire",
        "yaoi",
        "yuri",
        ]
    
    
    const [data, setData] = useState<SingleAnimeData[]>([])
    let [currentPage, setCurrentPage] = useState<number>(1)
    const [currentGenre, setCurrentGenre] = useState<string>('action')

    useEffect(() => {
        setData([])
        getAnimesByGenre(currentGenre, currentPage).then(res => setData(res.data))
    }, [currentGenre, currentPage])
        function xScroll(e: React.WheelEvent, elementClass: string){
    const elToScroll = document.querySelector(elementClass) as HTMLElement
    if(e.deltaY === 100){
        // +
        elToScroll.scrollLeft += 150
    }else if(e.deltaY === -100){
        // -
        elToScroll.scrollLeft -= 150
    }
  }




  function activeGener(e: React.MouseEvent){
    const existing = document.querySelector('.active-genre') as HTMLElement;

    existing && existing.classList.remove('active-genre');

    (e.target as HTMLElement).classList.add('active-genre')
    setCurrentPage(1)
    setCurrentGenre((e.target as HTMLElement).id.split('-')[2].trim())

  }

  function changePage(direction: number){
        direction === 1 ? setCurrentPage(++currentPage) : setCurrentPage(--currentPage)
   
  }

    return (
        <div className="anime-Genres-outer-wrapper">
                
                <span className="genre-text">Genres</span>
            <div onWheel={(e) => xScroll(e, '.anime-Genres-inner-wrapper'.trim())} className="anime-Genres-inner-wrapper">
                
            {listOfGenres.length > 0

            ?
             listOfGenres.map(g => <div key={`Genres${key++}`} onWheel={(e) => xScroll(e, '.anime-Genres-inner-wrapper'.trim())} onClick={(e) => activeGener(e)} className={`anime-Genres-box ${g ==='action' && currentGenre == 'action' && 'active-genre' }`} id={`id-genre-${g}`}>{g}</div> ) 
             

            : <div>Loading genres ...</div> }
                
            </div>




            <div className="anime-Genres-animes-box-outer-wrapper">
                <div onWheel={(e) => xScroll(e, '.anime-Genres-animes-box-inner-wrapper'.trim())} className="anime-Genres-animes-box-inner-wrapper">
                    {
                        data.length > 0 
                        ?
                        data.map(animeData => <GenresAnimeCard  {...{...{animeData}, xScroll,}}/> )
                        : <div>LOADING ...</div>
                    }
                    {data.length === 20 
                    ?  
                    <div className="anime-Genres-bts-wrapper">
                        {/* <i className="fa-solid fa-angle-right"></i>  */}
                        <button onClick={() => changePage(1)} className="next"><span className="next-page">{currentPage + 1}</span> </button>
                        {/* <button className="previouse">Previouse</button> */}
                        {/* <i className="fa-solid fa-angle-left"></i> */}
                        {currentPage > 1
                        ? <button onClick={() => changePage(-1)} className="previouse"> <span className="previouse-page">{currentPage - 1}</span></button>
                        : null
                        }
                    </div> 
                    : null}
                   
                </div>

                </div>
            
        </div>
    );
}