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

  return (
    <div className="anime-PopularAnime-outer-wrapper">
        <h2 className="anime-PopularAnime-tite">Popular anime</h2>
        <div className="anime-PopularAnime-inner-wrapper">
            { data.length > 0
                ? data.map(anime => <PopularAnimeCard key={`PopularAnimeCard${key++}`} {...anime}/>)
                : <div>Loading popularAnime ...</div>
            
            }

        </div>
    
    </div>


  );
}
