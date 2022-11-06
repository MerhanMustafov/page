import { useEffect, useState } from 'react'
import { getTopAiring } from '../../../../../../api/apiReaquest/apiRequest'
interface TopAiringData {
  animeId: string
  animeTitle: string
  animeImg: string
  latestEp: string
  animeUrl: string
  genres: string[]
}
export function TopAiring() {
  const [data, setData] = useState<TopAiringData[]>([])

  useEffect(() => {
    getTopAiring().then(res => setData(res.data))
  }, [])
  return (
    <div className="topAiringWrapper">
        <h2 className="topAiringSectionTitle">Top airing</h2>
        <div className="topAiringInnerWrapper">
            {data.length > 0 
            ?
            data.map(anime => 
                <div className="topAiringCardWrapper">
                    <img src={anime.animeImg} alt="anime image" />
                    <h2 className="topAiringTitle">{anime.animeTitle}</h2>

                    {anime.genres.length > 0
                    ?
                    anime.genres.map(g => <div className="genre">{g}</div> )
                    : null
                    }

                </div>
            )
            
            : <div>Loading ... TopAiring  </div> }
        </div>
    </div>
  );
}
