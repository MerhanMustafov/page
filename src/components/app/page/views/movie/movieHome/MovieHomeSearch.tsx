import { Component } from 'react'
import { getMoviesByTitle } from '../../../../../../api/movieApi/movieApi'
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

interface State {
  input: string
  movieType: string
  moviesData: MovieData[]
  error: string
}

export class MovieHomeSearch extends Component<{}, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      input: '',
      movieType: 'movie'.trim(),
      moviesData: [],
      error: '',
    }
  }

  componentDidMount(): void {}
  componentDidUpdate(): void {}

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
            if(res.data.results.length <= 0){
                this.setState({ moviesData: res.data.results })
                throw new Error("No Results");
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
        // console.log((e.target as HTMLElement).id)
    } 
    return (
      <div className="movie-MovieHomeSearch-search-outer-wrapper">
        <label htmlFor="movie" style={{ color: 'red' }}>
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
        <label htmlFor="tv" style={{ color: 'red' }}>
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
          />
          <i
            onClick={(e) => this.state.input.length > 0 && onSearchClick(e)}
            className="fa-solid fa-magnifying-glass movie-MovieHomeSearch-search-icon"
          ></i>
        </div>
        {this.state.moviesData.length > 0 ? (
          <div className="movie-MovieHomeSearch-search-dropdown-outer-wrapper">
            <div className="movie-MovieHomeSearch-search-dropdown-inner-wrapper">
                {this.state.moviesData.map((data) => (
                <div onClick={(e) => onMovieClick(e)} key={`movie-MovieHomeSearch-search-dropdown${key++}`} id={`${data.id}`} className="movie-MovieHomeSearch-movie-box-wrapper">
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
                  <div id={`${data.id}`} className="movie-MovieHomeSearch-movie-title">
                    {data.original_title
                      ? data.original_title
                      : data.original_name}
                  </div>
                </div>
              ))}
                
              
            </div>
          </div>
        ) : this.state.error.length > 0 && <div style={{color: 'white', position: 'absolute'}}>NO SUCH MOVIE</div>}


        
      </div>
    )
  }
}
