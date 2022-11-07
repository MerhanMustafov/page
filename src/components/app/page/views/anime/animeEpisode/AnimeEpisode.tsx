import { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import {
  getAnimeEpisode,
  getAnimeDetailById,
} from '../../../../../../api/apiReaquest/apiRequest'

interface AnimeDetailData {
  animeTitle: string
  animeImg: string
  type: string
  status: string
  synopsis: string
  genres: string[]
  episodesList: { episodeId: string; episodeNum: string }[]
}

export function AnimeEpisode() {
  const params = useParams()
  const navigateTo = useNavigate()

  const [episodeLink, setEpisodeLink] = useState<string | null>(null)
  const [data, setData] = useState<AnimeDetailData | null>(null)
  console.log(data)

  useEffect(() => {
    params.animeId &&
      params.episodeId &&
      Promise.all([
        getAnimeDetailById(params.animeId),
        getAnimeEpisode(params.episodeId),
      ]).then((res) => {
        setData(res[0].data)
        setEpisodeLink(res[1].data.Referer)
      })
  }, [])

  // request and getting data from the episode view

  console.log(params)
  return (
    <div className="anime-AnimeEpisode-outer-wrapper">
      <div className="anime-AnimeEpisode-inner-wrapper">
        <div className="anime-AnimeEpisode-status">{data?.animeTitle}</div>
        <img
          className="anime-AnimeEpisode-image"
          src={data?.animeImg}
          alt="anime image"
        />
        <div className="anime-AnimeEpisode-synopsis">{data?.synopsis}</div>
        <div className="anime-AnimeEpisode-status">{data?.status}</div>
        <div className="anime-AnimeEpisode-streaming-outer-wrapper">
          <div className="anime-AnimeEpisode-streaming-inner-wrapper">
            <div className="anime-AnimeEpisode-iframe-outer-wrapper">
              <div
                className="anime-AnimeEpisode-go-to-detail-page"
                onClick={(e) => navigateTo(-1)}
              >
                Back to detail page
              </div>
              <div className="anime-AnimeEpisode-iframe-inner-wrapper">
                {episodeLink && (
                  <iframe
                    className="vid"
                    //   width="560"
                    //   height="315"
                    src={episodeLink}
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
