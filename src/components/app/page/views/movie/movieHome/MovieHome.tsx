import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { MovieHomeSearch } from './MovieHomeSearch'
import { MovieHomeDetails } from './MovieHomeDetails'
import {MovieType} from './MovieType'
import {MoviePopular} from '../moviePopular/MoviePopular'
import {MovieTopRated} from '../movieTopRated/MovieTopRated'
import {MovieUpcoming } from '../movieUpcoming/MovieUpcoming' 
export function MovieHome() {
    const [movieType, setMovieType] = useState<string>('movie'.trim())
  return (
    <div className="movie-MovieHome-outer-wrapper">
      <div className="movie-MovieHome-inner-wrapper">
        <div className="movie-MovieHome-content-outer-wrapper">
          <div className="movie-MovieHome-content-inner-wrapper">
            <div className="movie-MovieHome-content-navigation-wrapper">
              <Link
                className="movie-MovieHome-popular-movies movie-MovieHome-btn"
                to={`/movie/popular/${movieType}/1`}
              >
                Popular {movieType}
              </Link>
              <Link
                className="movie-MovieHome-toprated-movies movie-MovieHome-btn"
                to={`/movie/topRated/${movieType}/1`}
              >
                Top Rated {movieType}
              </Link>
              <Link
                className="movie-MovieHome-upcomming-movies movie-MovieHome-btn"
                to={`/movie/upcoming/${movieType}/1`}
              >
                Upcomming
              </Link>
            </div>
            <MovieType {...{movieType, setMovieType}}/>
            <MovieHomeSearch {...{movieType, setMovieType}}/>
            <Routes>
                <Route path="/:movieId/:movieType/*" element={<MovieHomeDetails  />}/>
                <Route path="/popular/:type/:currentPage" element={<MoviePopular {...{movieType}}/>}/>
                <Route path="/topRated/:type/:currentPage" element={<MovieTopRated {...{movieType}}/>}/>
                <Route path="/upcoming/:type/:currentPage" element={<MovieUpcoming {...{movieType: 'movie'.trim()}}/>}/>
              </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}
