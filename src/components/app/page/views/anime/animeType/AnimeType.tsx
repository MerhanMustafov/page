import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  getPopularAnime,
  getTopAiring,
} from '../../../../../../api/apiReaquest/apiRequest'
// import {PopularAnimeCard} from '../../anime/animeHome/popularAnime/PopularAnimeCard'
import { AnimeCard } from '../animeCard/AnimeCard'
import { Paginate } from '../../paginate/Paginate'

interface SingleAnimeData {
  animeId: string
  animeTitle: string
  animeImg: string
  releasedDate: string
  animeUrl: string
}

export function AnimeType() {
  let key = 1
  const params = useParams()
  const [data, setData] = useState<SingleAnimeData[]>([])
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    if (params && params.animeType && params.currentPage) {
      setData([])
        setTotalPages(0)
        setCurrentPage(Number(params.currentPage))
      if (params.animeType === 'popular'.trim()) {
        getPopularAnime(Number(params.currentPage))
          .then((res) => setData(res.data))
          .catch((err) => setError('getPopularAnime error'))
        setTotalPages(500)
      } else if (params.animeType === 'top-airing'.trim()) {
        getTopAiring(Number(params.currentPage))
          .then((res) => setData(res.data))
          .catch((err) => setError('getPopularAnime error'))
        setTotalPages(26)
      }
    }
  }, [params])

  return (
    <div className="anime-AnimeType-outer-wrapper">
      <h2 className="anime-AnimeType-tite">Popular anime</h2>
      <div className="anime-AnimeType-inner-wrapper">
        {data.length > 0 ? (
          data.map((anime) => (
            <AnimeCard key={`PopularAnimeCard${key++}`} {...anime} />
          ))
        ) : (
          <div className="anime-home-loading">Loading ...</div>
        )}
      </div>
      {currentPage > 0 && totalPages > 0 && (
        <Paginate {...{ currentPage, totalPages }} />
      )}
    </div>
  )
}
