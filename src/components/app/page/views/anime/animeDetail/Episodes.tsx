import { useState } from 'react'
import { Episode } from './Episode'
interface Props {
  episodesList: { episodeId: string; episodeNum: string }[]
}
export function Episodes(props: Props) {
  let key = 1
  let numberStartRange = 0

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [imagesPerPage, setImagesPerPage] = useState<number>(70)

  let howManyRanges = Array.from(
    Array(Math.ceil(props.episodesList.length / imagesPerPage) + 1).keys(),
  )

  const indexOfLastEpisode = currentPage * imagesPerPage
  const indexOfFirstEpisode = indexOfLastEpisode - imagesPerPage
  const currentEpisodes = [...props.episodesList]
    .reverse()
    .slice(indexOfFirstEpisode, indexOfLastEpisode)

  function setPage(e: React.MouseEvent) {
    const page = Number((e.target as HTMLElement).id)
    console.log(page)
    setCurrentPage(page)
  }

  return (
    <div className="anime-Episodes-outer-wrapper">
      <div className="anime-Episodes-page-navigation-wrapper">
        {/* Array.from(Array(10).keys()) */}
        {howManyRanges.map(
          (x, index) =>
            index !== 0 && (
              <div id={`${1 + numberStartRange}`} onClick={(e) => setPage(e)}>
                [
                {`${1 + numberStartRange++ * imagesPerPage} ${
                  imagesPerPage * x
                }`}
                ]
              </div>
            ),
        )}
        {/* <div>[{`${indexOfFirstEpisode} ${indexOfLastEpisode}`}]</div> */}
      </div>
      <div className="anime-Episodes-inner-wrapper">
        {currentEpisodes.length > 0 &&
          currentEpisodes.map((epidose) => (
            <Episode key={`Episode${key++}`} {...epidose} />
          ))}
      </div>
    </div>
  )
}
