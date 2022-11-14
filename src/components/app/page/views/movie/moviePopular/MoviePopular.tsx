import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieCard } from '../movieCard/MovieCard'
import { getPopular } from '../../../../../../api/movieApi/movieApi'
import {MoviePaginate} from '../paginate/MoviePaginate';
interface MovieData {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  vide: boolean
  vote_average: number
  vote_count: number
}

interface MoviePopularState {
  currentPage: number
  movies: MovieData[]
  totalPages: number
  section: string
}

interface Props {
    movieType: string
}
export function MoviePopular(props: Props) {
  let key = 1
  const [data, setData] = useState<MoviePopularState>({
    currentPage: 1,
    movies: [],
    totalPages: 0,
    section: 'popular'.trim()
  })
  // const [currentPage, setCurrentPage] = useState<number>(1)
  // const [totalPages, setTotalPages] = useState<number>()
  const params = useParams()

  useEffect(() => {
    if (params.type && params.currentPage) {
      getPopular(params.type, Number(params.currentPage)).then((res) =>
        setData((prevState: MoviePopularState) => ({ ...prevState,
          currentPage: Number(params.currentPage),
          movies: res.data.results,
          totalPages: res.data.total_pages,
        })),
      )
    }
  }, [params])
  return (
    <div className="movie-MoviePopular-outer-wrapper movie-section-top">
      {/* <div className="movie-MoviePopular-title">Popular {props.movieType}</div> */}
      <div className="movie-MoviePopular-inner-wrapper">
        {data.movies.length > 0 ? (
          data.movies.map((movie) => (
            <MovieCard key={`MovieCard${key++}`} {...{...movie, section: data.section, movieType: props.movieType}} />
          ))
        ) : (
          <div>Loading ...</div>
        )}
      </div>
      {data.totalPages > 0
      && <MoviePaginate {...{...data, movieType: props.movieType, section: data.section}}/> 
      
      }
    </div>
  )
}
