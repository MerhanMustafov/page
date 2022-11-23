import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
interface Props {
  episodeId: string
  animeTitle: string
  episodeNum: string
  animeId: string | undefined
  currentEpisode?: string
  currentPage: number
}
export function Episode(props: Props) {
  const navigateTo = useNavigate()

  function episodeClickHandler(e: React.MouseEvent) {
    navigateTo(
      `/anime/episode/${props.animeId}/${props.episodeId}/${props.currentPage}`,
      { state: { episodeNum: props.episodeNum } },
    )
    const vid = document.querySelector(`.vid`) as HTMLElement
    vid ? window.scrollTo(0, vid.offsetTop-50) : window.scrollTo(0, 0)
  }
  return (
    <div
      className={`anime-Episode-outer-wrapper ${
        props.currentEpisode === props.episodeNum && 'current-episode-clicked'
      }`}
      onClick={(e) => episodeClickHandler(e)}
      id={props.episodeId}
    >
      <div className="anime-Episode-inner-wrapper">
        <div className="anime-Episode-number">
          {props.animeTitle} <span>[episode: {props.episodeNum} ]</span>
        </div>
      </div>
    </div>
  )
}
