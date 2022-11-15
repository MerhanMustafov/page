import { NavigationAnime } from './navigationAnime/NavigationAnime'
import { AnimeHome } from './animeHome/AnimeHome'
import { AnimeDetail } from './animeDetail/AnimeDetail'
import { AnimeEpisode } from './animeEpisode/AnimeEpisode'
import {AnimeType} from '../anime/animeType/AnimeType';
import { useParams } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'


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
            element={<AnimeEpisode />}
          />
        </Routes>
    </div>
  )
}
