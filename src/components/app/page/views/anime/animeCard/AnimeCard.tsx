import {useNavigate, Link} from 'react-router-dom'
interface Props {
  animeId: string
  animeTitle: string
  animeImg: string
  releasedDate: string
  animeUrl: string
}
export function AnimeCard(props: Props) {
    const navigateTo = useNavigate()

    const animeClick = () => {
        navigateTo(`/anime/detail/${props.animeId}`)
        // window.scrollTo(0, 0)

    }
  return (
    <div className="anime-AnimeCard-outer-wrapper" id={props.animeId} data-testid={props.animeId}>
      <div role="anime-AnimeCard-inner-wrapper" className="anime-AnimeCard-inner-wrapper" onClick={() => animeClick()}>
        <img className="anime-AnimeCard-image" src={props.animeImg} alt="anime image" />
        <h2 className="anime-AnimeCard-title">
          {props.animeTitle}
        </h2>
      </div>
        <Link role={`goto_detail`} to={`/anime/detail/${props.animeId}`}>goto</Link>
    </div>
  )
}
