import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
interface Props {
  episodesList: { episodeId: string; episodeNum: string }[]
  imagesPerPage: number
  setCurrentPage: (n: number) => void
}

export function AnimeEpisodePages(props: Props) {
  let key_two = 111
  let numberStartRange = 0
  let page = 0
  let howManyRanges = Array.from(
    Array(
      Math.ceil(props.episodesList.length / props.imagesPerPage) + 1,
    ).keys(),
  )
    const params = useParams()
  
  function onPageClick(e: React.MouseEvent) {
    const existing = document.querySelectorAll(
      '.current-page-clicked',
    ) as NodeListOf<Element>
    existing.length > 0 && [...existing].map((el) => el.classList.remove('current-page-clicked'))
    const classOfTheElement = (e.target as HTMLElement).classList[1]
    const elements = document.querySelectorAll(`.${classOfTheElement}`);
    [...elements].map((el) => el.classList.add('current-page-clicked'))
    props.setCurrentPage(Number((e.target as HTMLElement).id))

  }
  return (
    <div className="anime-Episodes-page-navigation-wrapper">
      {howManyRanges.map(
        (x, index) =>
          index !== 0 && (
            <div
              key={`Episodes${key_two++}`}
              id={`${1 + numberStartRange}`}
              className={`anime-Episodes-page-range p-range-${++page}`}
              onClick={(e) => {
                onPageClick(e)
              }}
            >
              {`[${1 + numberStartRange++ * props.imagesPerPage} - ${
                props.imagesPerPage * x
              }]`}
            </div>
          ),
      )}
    </div>
  )
}
