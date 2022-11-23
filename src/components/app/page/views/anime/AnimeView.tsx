import {lazy, Suspense} from 'react'
import { NavigationAnime } from './navigationAnime/NavigationAnime'
import { AnimeHome } from './animeHome/AnimeHome'
import { AnimeDetail } from './animeDetail/AnimeDetail'
import {AnimeType} from '../anime/animeType/AnimeType';
import { useParams } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
// import { AnimeEpisode } from './animeEpisode/AnimeEpisode'
const AnimeEpisode = lazy(() => import(`./animeEpisode/AnimeEpisode`).then(res => ({default: res.AnimeEpisode})))


export function AnimeView() {

  return (
    <div className="anime-AnimeView-wrapper">
      <NavigationAnime  />
        <Routes>
          <Route path="/" element={<AnimeHome />} />
          <Route path="/:animeType/:currentPage" element={<AnimeType />} />
          <Route path="/detail/:animeId" element={<AnimeDetail />} />
          <Route
            path="/episode/:animeId/:episodeId/:currentPage"
            element={
            <Suspense fallback={<div>Loading ...</div>}>
                <AnimeEpisode />

            </Suspense>
            }
          />
        </Routes>
    </div>
  )
}
