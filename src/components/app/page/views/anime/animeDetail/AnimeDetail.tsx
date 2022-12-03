import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAnimeDetailById } from '../../../../../../api/apiReaquest/apiRequest'
import { Episodes } from './Episodes'
interface AnimeDetailData {
  animeTitle: string
  animeImg: string
  type: string
  status: string
  synopsis: string
  genres: string[]
  episodesList: { episodeId: string; episodeNum: string }[]
}

export function AnimeDetail() {
  const params = useParams()
  const [data, setData] = useState<AnimeDetailData>()

  useEffect(() => {
    if (params.animeId) {
      getAnimeDetailById(params.animeId).then((res) => {
        setData(res.data)
      })
    } 
  }, [params])
  return (
    <div className="anime-AnimeDetail-outer-wrapper">
      <div className="anime-AnimeDetail-inner-wrapper">
        <div className="anime-AnimeDetail-infoBox">
          <div className="anime-AnimeDetail-image-wrapper">
            <img
              className="anime-AnimeDetail-image"
              src={data?.animeImg}
              alt="anime image"
            />
            <div className="anime-AnimeDetail-status">{data?.status}</div>
            <div role="episodes" className="anime-AnimeDetail-episodes-count">
              Episodes {data?.episodesList.length}
            </div>
          </div>
          <h2 className="anime-AnimeDetail-title">{data?.animeTitle}</h2>
          <div className="anime-AnimeDetail-synopsis">{data?.synopsis}</div>
        </div>
        {data && data?.episodesList.length > 0 && (
          <Episodes {...data} animeId={params.animeId} />
        )}
        {/* <Genres /> */}
      </div>
    </div>
  )
}
