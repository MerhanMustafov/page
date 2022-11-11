import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import {
  getMovieDetailById,
  getMovieTrailerById,
} from '../../../../../../api/movieApi/movieApi'

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
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[]
  status: string
  tagline: string
  title: string
  vote_average: number
  vote_count: number
}

interface MovieTrailer {
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
}

export function MovieHomeDetails() {
  const [movieData, setMovieData] = useState<SingleMovieDetail | null>(null)
  const [trailerData, setTrailerData] = useState<MovieTrailer[]>([])
  const [showTrailers, setShowTrailers] = useState<boolean>(false)
  const params = useParams()
  const location = useLocation()

  useEffect(() => {
    const [id, title, type] = [
      Number(params.movieId),
      params.movieTitle,
      location.state.movieType,
    ]
    Promise.all([
      getMovieDetailById(type, id),
      getMovieTrailerById(type, id),
    ]).then(
      (res) => (
        setMovieData(res[0].data),
        setTrailerData(
          res[1].data.results.filter(
            (tr: MovieTrailer) => tr.type === 'Trailer'.trim(),
          ),
        )
      ),
    )
  }, [params])

  return (
    <>
      {movieData ? (
        <div className="movie-MovieHomeDetails-movie-detail-outer-wrapper">
          <div className="movie-MovieHomeDetails-movie-detail-inner-wrapper">
            <div className="movie-MovieHomeDetails-movie-detail-title">
              {movieData.name ||
                movieData.original_title ||
                movieData.original_name}
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
            {trailerData.length > 0 && (
              <div className="movie-MovieHomeDetails-trailers-wrapper">
                {/* <div
                  onClick={() =>
                    showTrailers
                      ? setShowTrailers(false)
                      : setShowTrailers(true)
                  }
                  className="movie-MovieHomeDetails-show-hide-btn"
                >
                  {showTrailers ? 'hide' : 'show'}
                </div> */}
                {/* {showTrailers && ( */}
                  <div className="movie-MovieHomeDetails-movie-trailers-wrapper">
                    {trailerData.map((data) => (
                      <iframe
                        className="movie-MovieHomeDetails-movie-detail-video"
                        src={`https://www.youtube.com/embed/${data.key}`}
                        allowFullScreen
                      ></iframe>
                    ))}
                  </div>
                {/* )} */}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>LOADING ...</div>
      )}
    </>
  )
}
