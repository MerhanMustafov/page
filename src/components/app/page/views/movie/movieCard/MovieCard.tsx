import {useNavigate} from 'react-router-dom'
interface MovieData {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title?: string
  original_name?: string
  overview: string
  popularity: number
  poster_path: string
  release_date?: string
  first_air_date?: string
  title: string
  vide: boolean
  vote_average: number
  vote_count: number

  section?: string
  movieType: string
}

export function MovieCard(props: MovieData) {
    const navigateTo = useNavigate()

     function getMovieId(e: React.MouseEvent): number{
        return Number((e.target as HTMLElement).id.split('-')[1])
    }
  return (
    <div className="movie-MovieCard-outer-wrapper">
      <div className="movie-MovieCard-inner-wrapper">
        <div
          className="movie-MovieCard-image-wrapper"
          style={{
            backgroundImage: props.backdrop_path
              ? `url(https://image.tmdb.org/t/p/w500/${props.backdrop_path})`
              : `url(https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png)`,
          }}
        >
          <div className="movie-MovieCard-rate">
            {' '}
            <span className="rate">{props.vote_average}</span>/10{' '}
          </div>
        </div>

        <div className="movie-MovieCard-info-wrapper">
          <div onClick={() => navigateTo(`/movie/${props.id}/${props.movieType}`)} className="movie-MovieCard-title" id={`MovieCard-${props.id}`}>
            {props.original_title || props.original_name}
          </div>

          {/* <div className="movie-MovieCard-genres-wrapper">

            <div className="movie-MovieCard-genre">Drama</div>
            <div className="movie-MovieCard-genre">Documentary</div>
            <div className="movie-MovieCard-genre">Adventure</div>
          </div> */}

          <div className="movie-MovieCard-date">
            {props.section && props.section === 'upcoming'.trim() 
            ? 'release data: '
            : 'released: '
            }
             {props.first_air_date || props.release_date}
          </div>
        </div>
      </div>
    </div>
  )
}
