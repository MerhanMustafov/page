import {NavigationAnime} from './navigationAnime/NavigationAnime'
import {PopularAnime} from './popularAnime/PopularAnime'
import {TopAiring} from './topAiring/TopAiring'
import {Genres} from './genres/Genres'
import {useParams} from 'react-router-dom'

export function AnimeView() {
    return (
        <>
        <NavigationAnime></NavigationAnime>
        <div className="animeViewWrapper">
        <PopularAnime></PopularAnime>
        <TopAiring></TopAiring>
        <Genres></Genres>

        </div>
        </>

    );
}