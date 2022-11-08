import { useNavigate } from 'react-router-dom'
interface SingleAnimeData {
  animeId: string
  animeTitle: string
  animeImg: string
  releasedDate: string
  animeUrl: string
}
interface Props {
  animeData: SingleAnimeData
  xScroll: (e: React.WheelEvent, className: string) => void
}

export function GenresAnimeCard(props: Props) {
  const navigateTo = useNavigate()

  return (
    <div
      className="anime-GenresAnimeCard-outer-wrapper"
      id={props.animeData.animeId}
    >
      <div
        className="anime-GenresAnimeCard-inner-wrapper"
        onClick={() => navigateTo(`/anime/detail/${props.animeData.animeId}`)}
      >
        <img
          onWheel={(e) =>
            props.xScroll(e, '.anime-Genres-animes-box-inner-wrapper'.trim())
          }
          className="anime-GenresAnimeCard-image"
          src={props.animeData.animeImg}
          alt="anime image"
        />
        <h2 className="anime-GenresAnimeCard-title">
          {props.animeData.animeTitle}
        </h2>
      </div>
    </div>
  )
}
