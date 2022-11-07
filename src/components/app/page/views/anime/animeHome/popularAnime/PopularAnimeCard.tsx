import {useNavigate} from 'react-router-dom'
interface Props {
  animeId: string
  animeTitle: string
  animeImg: string
  releasedDate: string
  animeUrl: string
}
export function PopularAnimeCard(props: Props) {
    const navigateTo = useNavigate()
    
   function xScroll(e: React.WheelEvent){
    const elToScroll = document.querySelector('.anime-PopularAnime-inner-wrapper') as HTMLElement
    if(e.deltaY === 100){
        // +
        elToScroll.scrollLeft += 100
    }else if(e.deltaY === -100){
        // -
        elToScroll.scrollLeft -= 100
    }
  }

  return (
    <div onWheel={(e) => xScroll(e)} className="anime-PopularAnimeCard-outer-wrapper" id={props.animeId}>
      <div className="anime-PopularAnimeCard-inner-wrapper" onClick={() => navigateTo(`/anime/detail/${props.animeId}`)}>
        <img className="anime-PopularAnimeCard-image" src={props.animeImg} alt="anime image" />
        <h2 className="anime-PopularAnimeCard-title">
          {props.animeTitle}
        </h2>
      </div>
    </div>
  )
}
