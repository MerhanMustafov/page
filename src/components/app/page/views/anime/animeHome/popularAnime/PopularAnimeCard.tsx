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
  return (
    <div className="anime-PopularAnimeCard-outer-wrapper" id={props.animeId}>
      <div className="anime-PopularAnimeCard-inner-wrapper" onClick={() => navigateTo(`/anime/detail/${props.animeId}`)}>
        <img className="anime-PopularAnimeCard-image" src={props.animeImg} alt="anime image" />
        <h2 className="anime-PopularAnimeCard-title">
          {props.animeTitle}
        </h2>
      </div>
    </div>
  )
}
