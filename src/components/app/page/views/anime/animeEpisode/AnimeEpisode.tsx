import { useState, useEffect, lazy, Suspense} from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { AnimeEpisodeLoading } from './AnimeEpisodeLoading'
import {
  getAnimeEpisode,
  getAnimeDetailById,
} from '../../../../../../api/apiReaquest/apiRequest'
// import { Episodes } from '../animeDetail/Episodes'
const Episodes = lazy(() => import(`../animeDetail/Episodes`).then(res => ({default: res.Episodes})))

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
        setEpisodeLink(res[1].data.Referer)
        // const scrollToEl = document.querySelector('.anime-AnimeEpisode-outer-wrapper') as HTMLElement;
        // window.scrollTo(0, scrollToEl.offsetTop)
      })
  }, [params])

  // request and getting data from the episode view

  return (
    <div className="anime-AnimeEpisode-outer-wrapper">
      <div className="anime-AnimeEpisode-inner-wrapper">
        <div className="anime-AnimeEpisode-streaming-outer-wrapper">
          <div className="anime-AnimeEpisode-streaming-inner-wrapper">
            <div className="anime-AnimeEpisode-iframe-outer-wrapper">
              <div className="anime-AnimeEpisode-iframe-top-wrapper">
                <div
                  className="anime-AnimeEpisode-go-to-detail-page"
                  onClick={(e) => (navigateTo(`/anime/detail/${params.animeId}`), window.scrollTo(0, 0))}
                >
                  Back ot anime detail
                </div>
                <div className="anime-AnimeEpisode-current-straming-episode">
                  Episode {location.state.episodeNum}
                </div>
              </div>
              <div className="anime-AnimeEpisode-iframe-inner-wrapper">
                {episodeLink ? (
                  <iframe
                    className="vid"
                    src={episodeLink}
                    allowFullScreen
                  ></iframe>
                ) : (
                  <AnimeEpisodeLoading />
                )}
              </div>
              {params.animeId && data  ? (
                <Episodes
                  {...{
                    animeId: params.animeId,
                    animeTitle: data.animeTitle,
                    episodesList: data && data.episodesList,
                    currentEpisode: location.state.episodeNum
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
