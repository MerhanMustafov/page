import { Component } from 'react'
import {
  getMoviesByTitle,
  getMovieDetailById,
  getMovieTrailerById,
} from '../../../../../../api/movieApi/movieApi'
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

interface State {
  input: string
  movieType: string
  moviesData: MovieData[]
  error: string
  currentMovieId: number | null
  currentMovieDetailData: SingleMovieDetail | null
  currentMovieTrailers: MovieTrailer[]
}

export class MovieHomeSearch extends Component<{}, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      input: '',
      movieType: 'movie'.trim(),
      moviesData: [],
      error: '',
      currentMovieId: null,
      currentMovieDetailData: null,
      currentMovieTrailers: [],
    }
  }

  componentDidMount(): void {}
  componentDidUpdate({}, prevState: State): void {
    if (prevState.currentMovieId !== this.state.currentMovieId) {
      Promise.all([
        getMovieDetailById(
          this.state.movieType,
          Number(this.state.currentMovieId),
        ),
        getMovieTrailerById(
          this.state.movieType,
          Number(this.state.currentMovieId),
        ),
      ]).then((res) =>
        this.setState({
          currentMovieDetailData: res[0].data,
          currentMovieTrailers: res[1].data.results.filter(
            (d: MovieTrailer) => d.type === 'Trailer'.trim(),
          ),
          error: '',
          moviesData: [],
          input: '',
        }),
      )
    }
  }

  render() {
    let key = 1
    const onSearchClick = (e: React.MouseEvent) => {
      let { input, movieType } = this.state
      const movieTitle = input
        .split(' ')
        .filter((w) => w.length > 0)
        .map((w) => w.trim().toLocaleLowerCase())
        .join('+')
      getMoviesByTitle(movieType, movieTitle)
        .then((res) => {
          if (res.data.results.length <= 0) {
            this.setState({ moviesData: res.data.results })
            throw new Error('No Results')
          }
          this.setState({ error: '' })
          this.setState({ moviesData: res.data.results })
        })
        .catch(
          (err) => (
            this.setState({ error: err.message }),
            setTimeout(() => {
              this.setState({ error: '' })
            }, 2000)
          ),
        )
    }

    const onMovieClick = (e: React.MouseEvent) => {
      this.setState({ currentMovieId: Number((e.target as HTMLElement).id) })
    }
    return (
      <>
        <div className="movie-MovieHomeSearch-search-outer-wrapper">
          <label
            htmlFor="movie"
            style={{ color: 'orange' }}
            onClick={() => this.setState({ movieType: 'movie'.trim() })}
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
            onClick={() => this.setState({ movieType: 'movie'.trim() })}
          />
          <label
            htmlFor="tv"
            style={{ color: 'orange' }}
            onClick={() => this.setState({ movieType: 'tv'.trim() })}
          >
            {' '}
            tv show
          </label>
          <input
            type="radio"
            id="tv"
            name="type"
            value="tv"
            onClick={() => this.setState({ movieType: 'tv'.trim() })}
          />
          <div className="movie-MovieHomeSearch-search-inner-wrapper">
            <input
              onChange={(e) => this.setState({ input: e.target.value })}
              value={this.state.input}
              type="text"
              id="movie-MovieHomeSearch-search-by-name"
              placeholder="search movie or tv show"
            />
            <i
              onClick={(e) => this.state.input.length > 0 && onSearchClick(e)}
              className="fa-solid fa-magnifying-glass movie-MovieHomeSearch-search-icon"
            ></i>
          </div>
          {this.state.moviesData.length > 0 ? (
            <div className="movie-MovieHomeSearch-search-dropdown-outer-wrapper">
              <div className="movie-MovieHomeSearch-search-dropdown-inner-wrapper">
                <div
                  onClick={(e) => this.setState({ input: '', moviesData: [] })}
                  className="movie-MovieHomeSearch-search-dropdown-clear"
                >
                  Clear
                </div>
                {this.state.moviesData.map((data) => (
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
            this.state.error.length > 0 && (
              <div style={{ color: 'white', position: 'absolute' }}>
                NO SUCH MOVIE
              </div>
            )
          )}
        </div>
        {this.state.currentMovieDetailData && (
          <div className="movie-MovieHomeSearch-movie-detail-outer-wrapper">
            <div className="movie-MovieHomeSearch-movie-detail-inner-wrapper">
              <div className="movie-MovieHomeSearch-movie-detail-title">
                {this.state.currentMovieDetailData.name ||
                  this.state.currentMovieDetailData.original_title ||
                  this.state.currentMovieDetailData.original_name}
              </div>
              <img
                src={
                  this.state.currentMovieDetailData.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500/${this.state.currentMovieDetailData.backdrop_path}`
                    : `https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png`
                }
                alt="movie image"
                className="movie-MovieHomeSearch-movie-detail-image"
              />
              <div className="movie-MovieHomeSearch-movie-detail-overview">
                {this.state.currentMovieDetailData.overview}
              </div>
              {/* <iframe className="movie-MovieHomeSearch-movie-detail-video" src={`https://www.youtube.com/embed/${this.state.currentMovieTrailers[0].key}`} allowFullScreen></iframe> */}
              {this.state.currentMovieTrailers &&
                this.state.currentMovieTrailers.map((data) => (
                  <iframe
                    className="movie-MovieHomeSearch-movie-detail-video"
                    src={`https://www.youtube.com/embed/${data.key}`}
                    allowFullScreen
                  ></iframe>
                ))}
              {/* <iframe width="894" height="501" src={`https://www.youtube.com/embed/${this.state.currentMovieTrailers[0].key}`} title="Top 10 Funniest Friends Moments (In My Opinion)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            </div>
          </div>
        )}
      </>
    )
  }
}
