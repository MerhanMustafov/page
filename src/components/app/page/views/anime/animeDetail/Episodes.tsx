import { useState, useEffect, lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom'
// import { Episode } from './Episode'
import {AnimeEpisodePages} from '../animeEpisodePages/AnimeEpisodePages'
const Episode = lazy(() =>
  import(`./Episode`).then((res) => ({ default: res.Episode })),
)
interface Props {
  animeId: string | undefined
  animeTitle: string
  episodesList: { episodeId: string; episodeNum: string }[]
  currentEpisode?: string
}
export function Episodes(props: Props) {
  let key = 1
  const params = useParams()

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [imagesPerPage, setImagesPerPage] = useState<number>(70)
  const [loading, setLoading] = useState<boolean>(false)



  const indexOfLastEpisode = currentPage * imagesPerPage
  const indexOfFirstEpisode = indexOfLastEpisode - imagesPerPage
  const currentEpisodes = [...props.episodesList]
    .reverse()
    .slice(indexOfFirstEpisode, indexOfLastEpisode)

  useEffect(() => {
    if (params.currentPage) {
      setCurrentPage(Number(params.currentPage))
        const existing = document.querySelectorAll(
      '.current-page-clicked',
    ) as NodeListOf<Element>
    existing.length > 0 && [...existing].map((el) => el.classList.remove('current-page-clicked'))
    const elements = document.querySelectorAll(`.p-range-${params.currentPage}`);
    [...elements].map((el) => el.classList.add('current-page-clicked'))
   
    }
  }, [])



  return (
    <div className="anime-Episodes-outer-wrapper">
        <AnimeEpisodePages {...{episodesList: props.episodesList, imagesPerPage, setCurrentPage}}/>
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <div className="anime-Episodes-inner-wrapper">
          {currentEpisodes.length > 0 &&
            currentEpisodes.map((episode) => (
              <Suspense
                key={`Episode${key++}`}
                fallback={<div>Loading ...</div>}
              >
                <Episode
                  {...episode}
                  animeId={props.animeId}
                  animeTitle={props.animeTitle}
                  currentEpisode={props.currentEpisode}
                  currentPage={currentPage}
                />
              </Suspense>
            ))}
        </div>
      )}
      <AnimeEpisodePages {...{episodesList: props.episodesList, imagesPerPage, setCurrentPage}}/>
      
    </div>
  )
}
