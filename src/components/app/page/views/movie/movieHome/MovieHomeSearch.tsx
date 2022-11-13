import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {getMoviesByTitle} from '../../../../../../api/movieApi/movieApi'
interface MovieData {
  // "adult": false,
  backdrop_path: string
  // "genre_ids": [
  // 10749,
  // 18
  // ],
  id: number
  original_language: string
  original_title: string
  original_name: string
  overview: string
  popularity: number
  // poster_path: "/dxWHyMY4HoXH8LiEhYlga2OtK5B.jpg",
  release_date: string
  title: string
  // "video": false,
  vote_average: number
  vote_count: number
}
interface Props {
    movieType: string
    setMovieType: (i: string) => void
}

export function MovieHomeSearch(props: Props) {
  let key = 1
  const [input, setInput] = useState<string>('')
  
  const [dropDownMovies, setDropDownMovies] = useState<MovieData[]>([])
  const [movieId, setMovieId] = useState<number | null>(null)
  const [movieTitle, setMovieTitle] = useState<string | null>(null)
  const [error, setError] = useState<string>('')
  const navigateTo = useNavigate()
  const params = useParams()

  function onSearchClick(e: React.MouseEvent) {
    setMovieTitle(generateMovieTitleQueryFormat(input))
    getMoviesByTitle(props.movieType, generateMovieTitleQueryFormat(input))
      .then((res) => setDropDownMovies(res.data.results) )
      .catch((err) => setError('NO SUCH MOVIE'))
  }

  function onMovieClick(e: React.MouseEvent){
    const movie_id = (e.target as HTMLElement).id;
    setInput('');
        setDropDownMovies([]);
    navigateTo(`/movie/${(e.target as HTMLElement).id}/${props.movieType}`, { replace: false,preventScrollReset: true })
    
  }

  return (
    <div className="movie-MovieHomeSearch-search-outer-wrapper">
    
      
      <div className="movie-MovieHomeSearch-search-inner-wrapper">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          id="movie-MovieHomeSearch-search-by-name"
          placeholder="search movie or tv show"
        />
        <i
          onClick={(e) => input.length > 0 && onSearchClick(e)}
          className="fa-solid fa-magnifying-glass movie-MovieHomeSearch-search-icon"
        ></i>
      </div>
      {dropDownMovies.length > 0 ? (
        <div className="movie-MovieHomeSearch-search-dropdown-outer-wrapper">
          <div className="movie-MovieHomeSearch-search-dropdown-inner-wrapper">
            <div
              onClick={(e) => {
                setInput('')
                setDropDownMovies([])
              }}
              className="movie-MovieHomeSearch-search-dropdown-clear"
            >
              Clear
            </div>
            {dropDownMovies.map((data) => (
              <div
                onClick={(e) => onMovieClick(e)}
                key={`movie-MovieHomeSearch-search-dropdown${key++}`}
                id={`${data.id}`}
                className="movie-MovieHomeSearch-movie-box-wrapper"
              >
                <img
                  src={
                    data.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`
                      : `https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png`
                  }
                  alt="movie image"
                  className="movie-MovieHomeSearch-movie-image"
                  id={`${data.id}`}
                />
                <div
                  id={`${data.id}`}
                  className="movie-MovieHomeSearch-movie-info-outer-wrapper"
                >
                  <div
                    id={`${data.id}`}
                    className="movie-MovieHomeSearch-movie-info-inner-wrapper"
                  >
                    <div
                      id={`${data.id}`}
                      className="movie-MovieHomeSearch-movie-title"
                    >
                      {data.original_title
                        ? data.original_title
                        : data.original_name}
                    </div>
                    <div
                      id={`${data.id}`}
                      title={data.overview}
                      className="movie-MovieHomeSearch-movie-overview"
                    >
                      {data.overview}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        error.length > 0 && (
          <div style={{ color: 'white', position: 'absolute' }}>{error}</div>
        )
      )}
    </div>
  )
}

function generateMovieTitleQueryFormat(input: string): string {
  return input
    .split(' ')
    .filter((word) => word.length > 0)
    .map((word) => word.trim().toLocaleLowerCase())
    .join('+')
}
