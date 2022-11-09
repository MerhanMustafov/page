import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { Episode } from './Episode'
interface Props {
  animeId: string | undefined
  episodesList: { episodeId: string; episodeNum: string }[]
  currentEpisode?: string
}
export function Episodes(props: Props) {
  let key = 1
  let key_two = 111
  let numberStartRange = 0
  const params = useParams()

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
    .slice(indexOfFirstEpisode, indexOfLastEpisode);


    useEffect(() => {
        if(params.currentPage){
            setCurrentPage(Number(params.currentPage));
             const existing = document.querySelector('.current-page-clicked') as HTMLElement;
            existing && existing.classList.remove('current-page-clicked');
            (document.getElementById(params.currentPage) as HTMLElement).classList.add('current-page-clicked')
        }
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
              <div key={`Episodes${key_two++}`} className={`anime-Episodes-page-range `} id={`${1 + numberStartRange}`} onClick={(e) => {onPageClick(e)}}>
                {`[${1 + numberStartRange++ * imagesPerPage} - ${
                  imagesPerPage * x
                }]`}
              </div>
            ),
        )}
      </div>
      {loading 
      ? <div>Loading ...</div>
      :
      <div className="anime-Episodes-inner-wrapper">
        {currentEpisodes.length > 0 &&
          currentEpisodes.map((episode) => (
            <Episode
              key={`Episode${key++}`}
              {...episode}
              animeId={props.animeId}
              currentEpisode={props.currentEpisode}
              currentPage={currentPage}
            />
          ))}
      </div>
      }
      
    </div>
  )
}


