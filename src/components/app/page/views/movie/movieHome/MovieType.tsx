import { useParams, useNavigate } from 'react-router-dom'
interface Props {
  movieType: string
  setMovieType: (i: string) => void
}

export function MovieType(props: Props) {
  const navigateTo = useNavigate()
  const params = useParams()
  function onTypeClick(type: string) {
    props.setMovieType(type)
    if (params) {
      const section = params['*']?.split('/')[0]
      const currentPage = params['*']?.split('/')[2]
      if (section !== 'upcoming'.trim()) {
        navigateTo(`/movie/${section}/${type}/1`)
      }
    }
  }
  return (
    <div className="movie-MovieType-outer-wrapper">
      <div className="movie-MovieType-inner-wrapper">
        <label
          htmlFor="movie"
          style={{ color: 'orange' }}
          onClick={() => onTypeClick('movie'.trim())}
        >
          {' '}
          movie
        </label>
        <input
          type="radio"
          id="movie"
          name="type"
          value="movie"
          defaultChecked
          onClick={(e) => onTypeClick('movie'.trim())}
        />
        <label
          htmlFor="tv"
          style={{ color: 'orange' }}
          onClick={() => onTypeClick('tv'.trim())}
        >
          {' '}
          tv show
        </label>
        <input
          type="radio"
          id="tv"
          name="type"
          value="tv"
          onClick={() => onTypeClick('tv'.trim())}
        />
      </div>
    </div>
  )
}
