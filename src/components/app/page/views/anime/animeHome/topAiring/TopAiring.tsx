import { useEffect, useState } from 'react'
import { getTopAiring } from '../../../../../../../api/apiReaquest/apiRequest'
import {TopAiringCard} from './TopAiringCard'
interface TopAiringData {
  animeId: string
  animeTitle: string
  animeImg: string
  latestEp: string
  animeUrl: string
  genres: string[]
}
export function TopAiring() {
    let key = 1
  const [data, setData] = useState<TopAiringData[]>([])

  useEffect(() => {
    getTopAiring().then(res => setData(res.data))
  }, [])
  return (
    <div className="anime-TopAiring-outer-wrapper">
        <h2 className="anime-TopAiring-title">Top airing</h2>
        <div className="anime-TopAiring-inner-wrapper">
            {data.length > 0 
            ?
            data.map(anime => <TopAiringCard key={`TopAiringCard${key++}`} {...anime} /> )
            
            : <div>Loading ... TopAiring  </div> }
        </div>
    </div>
  );
}
