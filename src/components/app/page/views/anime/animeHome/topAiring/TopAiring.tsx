import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
    const navigateTo = useNavigate()
  const [data, setData] = useState<TopAiringData[]>([])

  useEffect(() => {
    getTopAiring(1).then(res => setData(res.data))
  }, [])

  function xScroll(e: React.WheelEvent){
    const elToScroll = document.querySelector('.anime-TopAiring-inner-wrapper') as HTMLElement
    if(e.deltaY === 100){
        // +
        elToScroll.scrollLeft += 150
    }else if(e.deltaY === -100){
        // -
        elToScroll.scrollLeft -= 150
    }
  }
  return (
    <div className="anime-TopAiring-outer-wrapper">
        <h2 onClick={() => navigateTo(`/anime/top-airing/1`)} className="anime-TopAiring-title">Top airing</h2>
    <div onWheel={(e) => xScroll(e)} className="anime-TopAiring-inner-wrapper">
            {data.length > 0 
            ?
            data.map(anime => <TopAiringCard key={`TopAiringCard${key++}`} {...anime} /> )
            
            : <div className="anime-home-loading">Loading ...</div> }
        </div>
    </div>
  );
}
