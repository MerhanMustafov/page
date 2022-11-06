import {NavigationAnime} from './navigationAnime/NavigationAnime'
import {AnimeHome} from './animeHome/AnimeHome' 
import {AnimeDetail} from './animeDetail/AnimeDetail'
import {useParams} from 'react-router-dom'
import { Routes, Route} from 'react-router-dom'

export function AnimeView() {
    return (
        <>
         {/* This navigation will lead to one of the routes below */}
        <NavigationAnime></NavigationAnime>
        <Routes>
            <Route path="/" element={<AnimeHome /> }/>
        <Route path="/detail/:animeId" element={<AnimeDetail />} />
        </Routes>
        </>

    );
}