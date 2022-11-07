import { useEffect, useState } from 'react'
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
  const [data, setData] = useState<SingleAnimeData[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    getPopularAnime().then((res) => setData(res.data)).catch(err => setError('getPopularAnime error'))
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
        <h2 className="anime-PopularAnime-tite">Popular anime</h2>
        <div  className="anime-PopularAnime-inner-wrapper"  onWheel={(e) => xScroll(e)}>
            { data.length > 0
                ? data.map(anime => <PopularAnimeCard key={`PopularAnimeCard${key++}`} {...anime}/>)
                : <div>Loading popularAnime ...</div>
            
            }

        </div>
    
    </div>


  );
}
