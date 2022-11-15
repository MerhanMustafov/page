import {useNavigate} from 'react-router-dom'
interface Props {
  animeId: string
  animeTitle: string
  animeImg: string
  releasedDate: string
  animeUrl: string
}
export function AnimeCard(props: Props) {
    const navigateTo = useNavigate()
    
  return (
    <div className="anime-AnimeCard-outer-wrapper" id={props.animeId}>
      <div className="anime-AnimeCard-inner-wrapper" onClick={() => navigateTo(`/anime/detail/${props.animeId}`)}>
        <img className="anime-AnimeCard-image" src={props.animeImg} alt="anime image" />
        <h2 className="anime-AnimeCard-title">
          {props.animeTitle}
        </h2>
      </div>
    </div>
  )
}
