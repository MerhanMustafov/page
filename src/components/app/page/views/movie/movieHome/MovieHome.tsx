import { Component } from 'react'
import { Link } from 'react-router-dom'
import {MovieHomeSearch} from './MovieHomeSearch'


export class MovieHome extends Component {
  constructor(props: any) {
    super(props)

    
  }

  componentDidMount(): void {}
  componentDidUpdate(): void {}
  

  render() {
    
    return (
      <div className="movie-MovieHome-outer-wrapper">
        <div className="movie-MovieHome-inner-wrapper">
          <div className="movie-MovieHome-content-outer-wrapper">
            <div className="movie-MovieHome-content-inner-wrapper">
              <div className="movie-MovieHome-content-navigation-wrapper">
                <Link
                  className="movie-MovieHome-popular-movies movie-MovieHome-btn"
                  to="/#"
                >
                  Popular
                </Link>
                <Link
                  className="movie-MovieHome-toprated-movies movie-MovieHome-btn"
                  to="/#"
                >
                  Top Rated
                </Link>
                <Link
                  className="movie-MovieHome-upcomming-movies movie-MovieHome-btn"
                  to="/#"
                >
                  Upcomming
                </Link>
              </div>
              <MovieHomeSearch />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
