import { useState, useEffect } from 'react'
import { Episode } from './Episode'
interface Props {
  animeId: string | undefined
  episodesList: { episodeId: string; episodeNum: string }[]
}
export function Episodes(props: Props) {
  let key = 1
  let key_two = 111
  let numberStartRange = 0

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [imagesPerPage, setImagesPerPage] = useState<number>(70)
  const [loading, setLoading] = useState<boolean>(false)

  let howManyRanges = Array.from(
    Array(Math.ceil(props.episodesList.length / imagesPerPage) + 1).keys(),
  )

  const indexOfLastEpisode = currentPage * imagesPerPage
  const indexOfFirstEpisode = indexOfLastEpisode - imagesPerPage
  const currentEpisodes = [...props.episodesList]
    .reverse()
    .slice(indexOfFirstEpisode, indexOfLastEpisode)


    useEffect(() => {
        // const existing = document.querySelector('.current-page-clicked') as HTMLElement;
        // existing && setCurrentPage(Number(existing.id))

        const el = document.querySelector('.anime-Episodes-page-navigation-wrapper')
        el?.children[0].classList.add('current-page-clicked');
    }, [])

    function onPageClick(e: React.MouseEvent){
        const existing = document.querySelector('.current-page-clicked') as HTMLElement;
         existing && existing.classList.remove('current-page-clicked');
         const element =  e.target as HTMLElement
         element.classList.add('current-page-clicked')
         const current_Page = Number(element.id)
        setCurrentPage(current_Page)
    }
   
  return (
    <div className="anime-Episodes-outer-wrapper">
      <div className="anime-Episodes-page-navigation-wrapper">
        {howManyRanges.map(
          (x, index) =>
            index !== 0 && (
              <div key={`Episodes${key_two++}`} className="anime-Episodes-page-range" id={`${1 + numberStartRange}`} onClick={(e) => {onPageClick(e)}}>
                <span className="open-bracket">[</span>
                {`${1 + numberStartRange++ * imagesPerPage} - ${
                  imagesPerPage * x
                }`}
                <span className="close-bracket">]</span>
              </div>
            ),
        )}
      </div>
      {loading 
      ? <div>Loading ...</div>
      :
      <div className="anime-Episodes-inner-wrapper">
        {currentEpisodes.length > 0 &&
          currentEpisodes.map((epidosed) => (
            <Episode
              key={`Episode${key++}`}
              {...epidosed}
              animeId={props.animeId}
            />
          ))}
      </div>
      }
      
    </div>
  )
}


