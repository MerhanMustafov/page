import { SetStateAction, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieCard } from '../movieCard/MovieCard'
import { getTopRated } from '../../../../../../api/movieApi/movieApi'
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

interface MoviePopularTopRated{
  currentPage: number
  movies: MovieData[]
  totalPages: number 
  section: string
}

interface Props {
    movieType: string
}
export function MovieTopRated(props: Props) {
  let key = 1
  const [data, setData] = useState<MoviePopularTopRated>({
    currentPage: 1,
    movies: [],
    totalPages: 0,
    section: 'topRated'.trim()
  })
  // const [currentPage, setCurrentPage] = useState<number>(1)
  // const [totalPages, setTotalPages] = useState<number>()
  const params = useParams()

  useEffect(() => {
    if (params.type && params.currentPage) {
      getTopRated(params.type, Number(params.currentPage)).then((res) =>
        setData((prevState: MoviePopularTopRated) => ({ ...prevState,
          currentPage: Number(params.currentPage),
          movies: res.data.results,
          totalPages: res.data.total_pages,
        })),
      )
    }
  }, [params.type, params.currentPage])
  return (
    <div className="movie-MovieTopRated-outer-wrapper movie-section-top">
      {/* <div className="movie-MovieTopRated-title">Top Rated {props.movieType} </div> */}
      <div className="movie-MovieTopRated-inner-wrapper">
        {data.movies.length > 0 ? (
          data.movies.map((movie) => (
            <MovieCard key={`MovieCard${key++}`}  {...{...movie, section: data.section, movieType: props.movieType}} />
          ))
        ) : (
          <div>Loading ...</div>
        )}
      </div>
      {data.totalPages > 0
      && <MoviePaginate {...{...data, movieType: props.movieType, section:data.section}}/> 
      
      }
    </div>
  )
}
