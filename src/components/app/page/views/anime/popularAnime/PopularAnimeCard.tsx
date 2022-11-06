interface Props  {
  animeId: string
  animeTitle: string
  animeImg: string
  releasedDate: string
  animeUrl: string
}
export function PopularAnimeCard(props: Props){
        return (
            <div className="popularAnimeCardWrapper">
                <div className="popularAnimeCardInnerWrapper">
                    <img src={props.animeImg} alt="anime image" />
                    <h2>{props.animeTitle}</h2>

                </div>
            </div>
        );
}