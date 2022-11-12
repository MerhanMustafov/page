import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { MovieHomeSearch } from './MovieHomeSearch'
import { MovieHomeDetails } from './MovieHomeDetails'
import {MovieType} from './MovieType'
import {MoviePopular} from '../moviePopular/MoviePopular'
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
                to={`/movie/popular/${movieType}`}
              >
                Popular {movieType}
              </Link>
              <Link
                className="movie-MovieHome-toprated-movies movie-MovieHome-btn"
                to="/#"
              >
                Top Rated {movieType}
              </Link>
              <Link
                className="movie-MovieHome-upcomming-movies movie-MovieHome-btn"
                to="/#"
              >
                Upcomming
              </Link>
            </div>
            <MovieType {...{movieType, setMovieType}}/>
            <MovieHomeSearch {...{movieType, setMovieType}}/>
            <Routes>
                <Route path="/:movieId/:movieType/*" element={<MovieHomeDetails />}/>
                <Route path="/popular/:type" element={<MoviePopular />}/>
              </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}
