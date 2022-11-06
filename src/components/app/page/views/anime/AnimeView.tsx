import {PopularAnime} from './popularAnime/PopularAnime'
import {NavigationAnime} from './navigationAnime/NavigationAnime'
import {useParams} from 'react-router-dom'

export function AnimeView() {
    return (
        <>
        <NavigationAnime></NavigationAnime>
        <PopularAnime></PopularAnime>
        </>

    );
}