import { PopularAnime } from './popularAnime/PopularAnime'
import { TopAiring } from './topAiring/TopAiring'
import { Genres } from './genres/Genres'
export function AnimeHome() {
  return (
    <div className="anime-AnimeHome-outer-wrapper">
        <div className="anime-AnimeHome-inner-wrapper">
            <PopularAnime></PopularAnime>
            <TopAiring></TopAiring>
            <Genres></Genres>

        </div>
    </div>
  )
}
