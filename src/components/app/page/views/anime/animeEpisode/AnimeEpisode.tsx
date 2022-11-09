import { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { Episodes } from '../animeDetail/Episodes'
import { AnimeEpisodeLoading } from './AnimeEpisodeLoading'
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
  const location = useLocation()
  console.log(location, 'AnimeEpisode   view')
  const navigateTo = useNavigate()

  const [episodeLink, setEpisodeLink] = useState<string | null>(null)
  const [data, setData] = useState<AnimeDetailData | null>(null)

  useEffect(() => {
    // setData(null)
    setEpisodeLink(null)
    params.animeId &&
      params.episodeId &&
      Promise.all([
        getAnimeDetailById(params.animeId),
        getAnimeEpisode(params.episodeId),
      ]).then((res) => {
        setData(res[0].data)
        setEpisodeLink(res[1].data.Referer);
        (document.getElementById(location.state.episodeId) as HTMLElement).classList.add('current-episode-clicked')
      })
  }, [params])

  // request and getting data from the episode view

  return (
    <div className="anime-AnimeEpisode-outer-wrapper">
      <div className="anime-AnimeEpisode-inner-wrapper">
        <div className="anime-AnimeEpisode-streaming-outer-wrapper">
          <div className="anime-AnimeEpisode-streaming-inner-wrapper">
            <div className="anime-AnimeEpisode-iframe-outer-wrapper">
              <div
                className="anime-AnimeEpisode-go-to-detail-page"
                onClick={(e) => navigateTo(`/anime/detail/${params.animeId}`)}
              >
                Back to detail page
              </div>
              <div className="anime-AnimeEpisode-iframe-inner-wrapper">
                {episodeLink ? (
                  <iframe
                    className="vid"
                    //   width="560"
                    //   height="315"
                    src={episodeLink}
                    allowFullScreen
                  ></iframe>
                ) : (
                  <AnimeEpisodeLoading />
                )}
              </div>
              {params.animeId && data && data.episodesList?.length > 0 ? (
                <Episodes
                  {...{
                    animeId: params.animeId,
                    episodesList: data.episodesList,
                  }}
                />
              ) : null}
              {/* <div className="anime-AnimeEpisode-previouse-next-btns-wrapper">
                <div className="anime-AnimeEpisode-previouse">Previouse</div>
                <div onClick={(e) => navigateTo(`/anime/episode/${props.animeId}/${props.episodeId}`)} className="anime-AnimeEpisode-next">Next</div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="anime-AnimeEpisode-detail-outer-wrapper">
          <div className="anime-AnimeEpisode-detail-inner-wrapper">
            <div className="anime-AnimeEpisode-imaga-area-wrapper">
              <div className="anime-AnimeEpisode-title">{data?.animeTitle}</div>

              <img
                className="anime-AnimeEpisode-image"
                src={data?.animeImg}
                alt="anime image"
              />
              <div className="anime-AnimeEpisode-status">{data?.status}</div>
              <div className="anime-AnimeEpisode-ep-count">
                Episodes - {data?.episodesList.length}
              </div>
            </div>
            <div className="anime-AnimeEpisode-synopsis">{data?.synopsis}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
