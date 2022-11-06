import { useEffect, useState } from 'react'
import { getPopularAnime } from '../../../../../../api/apiReaquest/apiRequest'
import {PopularAnimeCard} from './PopularAnimeCard'

interface SingleAnimeData {
  animeId: string
  animeTitle: string
  animeImg: string
  releasedDate: string
  animeUrl: string
}

export function PopularAnime() {
  const [data, setData] = useState<SingleAnimeData[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    getPopularAnime().then((res) => setData(res.data)).catch(err => setError('getPopularAnime error'))
  }, [])

  return (
    <div className="popularAnimeWrapper">
        <h2 className="popularAnimeSectionTitle">Popular anime</h2>
        <div className="popularAnimeInnerWrapper">
            { data.length > 0
                ? data.map(anime => <PopularAnimeCard {...anime}/>)
                : <div>Loading popularAnime ...</div>
            
            }

        </div>
    
    </div>


  );
}
