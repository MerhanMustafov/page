

interface Props {
    movieType: string
    setMovieType: (i: string) => void
}

export function MovieType(props: Props){
    return (
        <div className="movie-MovieType-outer-wrapper">
        <div className="movie-MovieType-inner-wrapper">

            <label
        htmlFor="movie"
        style={{ color: 'orange' }}
        onClick={() => props.setMovieType('movie'.trim())}
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
        onClick={() => props.setMovieType('movie'.trim())}
      />
      <label
        htmlFor="tv"
        style={{ color: 'orange' }}
        onClick={() => props.setMovieType('tv'.trim())}
      >
        {' '}
        tv show
      </label>
      <input
        type="radio"
        id="tv"
        name="type"
        value="tv"
        onClick={() => props.setMovieType('tv'.trim())}
      />
        </div>

        </div>
    );
}