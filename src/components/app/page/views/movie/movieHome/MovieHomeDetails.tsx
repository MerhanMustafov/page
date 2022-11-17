import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Routes, Route } from 'react-router-dom';
// import {MovieHomeDetailVideos} from './MovieHomeDetailVideos'
import {getMovieDetailById} from '../../../../../../api/movieApi/movieApi';
const MovieHomeDetailVideos = React.lazy(() => import('./MovieHomeDetailVideos').then(({MovieHomeDetailVideos})=> ({default: MovieHomeDetailVideos})));

interface SingleMovieDetail {
  adult: boolean
  backdrop_path: string
  genres: { id: number; name: string }[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  name: string
  original_title: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  first_air_date: string
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[]
  status: string
  tagline: string
  title: string
  vote_average: number
  vote_count: number
  number_of_episodes: string
  number_of_seasons: string
  next_episode_to_air: {
    air_date: string
    episode_number: number
    id: 4008054
    name: string
  }
}

interface MovieTrailer {
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
}

type Show = {
    videos: boolean
}
export function MovieHomeDetails() {
  let key = 1
  const params = useParams()
  const [movieData, setMovieData] = useState<SingleMovieDetail | null>(null)
  const [show, setShow] = useState<Show>({videos: false})

  useEffect(() => {
    setShow((prev: Show) => ({...prev, videos: false}))
    if(params.movieType && params.movieId){
        getMovieDetailById(params.movieType, Number(params.movieId)).then(res => setMovieData(res.data))
    }

  }, [params])

  return (
    <>
      {movieData ? (
        <div className="movie-MovieHomeDetails-movie-detail-outer-wrapper">
          <div className="movie-MovieHomeDetails-movie-detail-inner-wrapper">
            <div className="movie-MovieHomeDetails-movie-detail-title">
          

              {movieData.name ||
                movieData.original_title ||
                movieData.original_name}{' '}
              <span className="movie-MovieHomeDetails-movie-detail-language">
                [{movieData.original_language}]
              </span>
            </div>

            <img
              src={
                movieData.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`
                  : `https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png`
              }
              alt="movie image"
              className="movie-MovieHomeDetails-movie-detail-image"
            />

            <div className="movie-MovieHomeDetails-movie-detail-overview">
              {movieData.overview}
            </div>

            <div className="movie-MovieHomeDetails-movie-detail-info-wrapper">
              <div className="movie-MovieHomeDetails-movie-detail-release-date">
                {params.movieType === 'movie'.trim() ? 'released:' : 'since:'}{' '}
                {movieData.release_date || movieData.first_air_date}
              </div>
              {movieData.number_of_seasons && movieData.number_of_episodes && (
                <div className="movie-MovieHomeDetails-movie-detail-SE-wrapper">
                  <div className="movie-MovieHomeDetails-movie-detail-seasons">
                    S{movieData.number_of_seasons}
                  </div>
                  <div className="movie-MovieHomeDetails-movie-detail-episodes">
                    /E{movieData.number_of_episodes}
                  </div>
                </div>
              )}

              <div className="movie-MovieHomeDetails-movie-detail-geners-wrapper">
                {movieData.genres.length > 0 &&
                  movieData.genres.map((g) => (
                    <div
                    key={`movie-MovieHomeDetails-movie-detail-geners${key++}`}
                      className="movie-MovieHomeDetails-movie-detail-gener"
                      id={`${g.id}`}
                    >
                      {g.name}
                    </div>
                  ))}
              </div>

              {movieData.next_episode_to_air ? (
                <div className="movie-MovieHomeDetails-movie-detail-status-wrapper">
                  <div className="movie-MovieHomeDetails-movie-detail-status">
                    next ep. on: {movieData.next_episode_to_air.air_date}
                  </div>
                  {movieData.next_episode_to_air.name && (
                    <div className="movie-MovieHomeDetails-movie-detail-next-episode-name">
                      {movieData.next_episode_to_air.name}
                    </div>
                  )}
                </div>
              ) : (
                <div className="movie-MovieHomeDetails-movie-detail-status-wrapper">
                  <div className="movie-MovieHomeDetails-movie-detail-status">
                    status: {'finished'}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
    
      ) : (
        <div>LOADING ...</div>
      )}

        <div onClick={() => show.videos ? setShow((prev: Show) => ({...prev, videos: false})) : setShow((prev: Show) => ({...prev, videos: true}))} className="movie-MovieHomeDetails-display-videos">{show.videos === true ? 'hide' : 'show'} videos</div>
        {show.videos === true 
        &&
      <Suspense fallback={ <div>Loading ...</div>}>
        {/* <MovieHomeDetailVideos/> */}
        <Routes>
            <Route path="/" element={<MovieHomeDetailVideos />} />
        </Routes>

      </Suspense>
        
        }
      
    </>
  )
}
