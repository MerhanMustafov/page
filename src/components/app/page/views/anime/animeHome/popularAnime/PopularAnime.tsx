import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { getPopularAnime } from '../../../../../../../api/apiReaquest/apiRequest'
import {PopularAnimeCard} from './PopularAnimeCard'

interface SingleAnimeData {
  animeId: string
  animeTitle: string
  animeImg: string
  releasedDate: string
  animeUrl: string
}

export function PopularAnime() {
    let key = 1
    const navigateTo = useNavigate()
  const [data, setData] = useState<SingleAnimeData[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    getPopularAnime(1).then((res) => setData(res.data)).catch(err => setError('getPopularAnime error'))
  }, [])

  function xScroll(e: React.WheelEvent){
    const elToScroll = document.querySelector('.anime-PopularAnime-inner-wrapper') as HTMLElement
    if(e.deltaY === 100){
        // +
        elToScroll.scrollLeft += 100
    }else if(e.deltaY === -100){
        // -
        elToScroll.scrollLeft -= 100
    }
  }

  return (
    <div className="anime-PopularAnime-outer-wrapper">
        <h2 onClick={() => navigateTo('/anime/popular/1')} className="anime-PopularAnime-tite">Popular anime</h2>
        <div  className="anime-PopularAnime-inner-wrapper"  onWheel={(e) => xScroll(e)}>
            { data.length > 0
                ? data.map(anime => <PopularAnimeCard key={`PopularAnimeCard${key++}`} {...anime}/>)
                : <div className="anime-home-loading">Loading ...</div>
            
            }

        </div>
    
    </div>


  );
}
