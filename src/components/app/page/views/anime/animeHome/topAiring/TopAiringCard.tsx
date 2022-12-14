import {useNavigate} from 'react-router-dom'
interface Props {
  animeId: string
  animeTitle: string
  animeImg: string
  latestEp: string
  animeUrl: string
  genres: string[]
}

export function TopAiringCard(props: Props) {
  let key = 1
  const navigateTo = useNavigate()


  function xScroll(e: React.WheelEvent){
    const elToScroll = document.querySelector('.anime-TopAiring-inner-wrapper') as HTMLElement
    if(e.deltaY === 100){
        // +
        elToScroll.scrollLeft += 100
    }else if(e.deltaY === -100){
        // -
        elToScroll.scrollLeft -= 100
    }
  }

  return (
    <div onWheel={(e) => xScroll(e)}className="anime-TopAiringCard-outer-wrapper">
      <div className="anime-TopAiringCard-inner-wrapper" onClick={() => navigateTo(`/anime/detail/${props.animeId}`)}>
        <img className="anime-TopAiringCard-image" src={props.animeImg} alt="anime image" />
        <h2 className="anime-TopAiringCard-title">{props.animeTitle}</h2>

        {/* {props.genres.length > 0
          ? props.genres.map((g) => (
              <div key={`TopAiringCard-genre${key++}`} className="anime-TopAiringCard-genre">
                {g}
              </div>
            ))
          : null} */}
      </div>
    </div>
  )
}
