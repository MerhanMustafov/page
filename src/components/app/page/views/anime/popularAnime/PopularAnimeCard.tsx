import { hover } from '@testing-library/user-event/dist/hover'

interface Props {
  animeId: string
  animeTitle: string
  animeImg: string
  releasedDate: string
  animeUrl: string
}
export function PopularAnimeCard(props: Props) {
  return (
    <div className="popularAnimeCardWrapper">
      <div className="popularAnimeCardInnerWrapper">
        <img src={props.animeImg} alt="anime image" />
        <h2 style={props.animeTitle.length > 20 ? { fontSize: '11px' } : {}}>
          {props.animeTitle}
        </h2>
      </div>
    </div>
  )
}
