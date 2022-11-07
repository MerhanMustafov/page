import {NavigationAnime} from './navigationAnime/NavigationAnime'
import {AnimeHome} from './animeHome/AnimeHome' 
import {AnimeDetail} from './animeDetail/AnimeDetail'
import {AnimeEpisode} from './animeEpisode/AnimeEpisode'
import {useParams} from 'react-router-dom'
import { Routes, Route} from 'react-router-dom'

import {useState, useEffect} from 'react'

export function AnimeView() {
    const [input, setInput] = useState<string>('')

    // useEffect(() => {
    //     setReload(false) 
    // }, [reload === true])
    return (
        <>
         {/* This navigation will lead to one of the routes below */}
        <NavigationAnime {...{input, setInput}}/>
        <Routes>
            <Route path="/" element={<AnimeHome /> }/>
        <Route path="/detail/:animeId" element={<AnimeDetail />} />
        <Route path="/episode/:animeId/:episodeId" element={<AnimeEpisode />} />
        </Routes>
        </>

    );
}