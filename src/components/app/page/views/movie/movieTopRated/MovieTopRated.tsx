import { SetStateAction, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieCard } from '../movieCard/MovieCard'
import { getTopRated } from '../../../../../../api/movieApi/movieApi'
import {Paginate} from '../../paginate/Paginate';
// import {MoviePaginate} from '../paginate/MoviePaginate';
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
  const params = useParams()

  useEffect(() => {
    if (params.movieType && params.currentPage) {
      getTopRated(params.movieType, Number(params.currentPage)).then((res) =>
        setData((prevState: MoviePopularTopRated) => ({ ...prevState,
          currentPage: Number(params.currentPage),
          movies: res.data.results,
          totalPages: res.data.total_pages > 500 ? 500 : res.data.total_pages,
        })),
      )
    }
  }, [params])
  return (
    <div className="movie-MovieTopRated-outer-wrapper movie-section-top">
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
      && <Paginate {...{...data, movieType: props.movieType, section:data.section}}/> 
      }
    </div>
  )
}
