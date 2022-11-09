import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
interface Props {
  episodeId: string
  episodeNum: string
  animeId: string | undefined
}
export function Episode(props: Props) {
  const navigateTo = useNavigate()

  function episodeCssStyleModify(e: React.MouseEvent) {
    console.log(e.target)
    const existing = document.querySelector(
      '.current-episode-clicked',
    ) as HTMLElement
    existing && existing.classList.remove('current-episode-clicked')

    ;(document.getElementById(props.episodeId) as HTMLElement).classList.add('current-episode-clicked')
  }

  function episodeClickHandler(e: React.MouseEvent) {
    episodeCssStyleModify(e)
    navigateTo(`/anime/episode/${props.animeId}/${props.episodeId}`, {state: {episodeId: props.episodeId}})
  }
  return (
    <div className="anime-Episode-outer-wrapper" onClick={(e) => episodeClickHandler(e)} id={props.episodeId}>
      <div className="anime-Episode-inner-wrapper">
        <div
        //   onClick={(e) => episodeClickHandler(e)}
          className="anime-Episode-number"
        //   id={props.episodeId}
        >
          {props.episodeNum}
        </div>
      </div>
    </div>
  )
}
