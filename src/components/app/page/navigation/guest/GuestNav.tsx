import { Link } from 'react-router-dom'
import { Time } from './Time'
export function GuestNavigation() {
  return (
    <div className="page-GuestNavigation-outer-wrapper">
      <div className="page-GuestNavigation-inner-wrapper">
        <div className="page-GuestNavigation-btns-wrapper">
          <Link className="page-GuestNavigation-home-btn" to="/">
            Home
          </Link>
          <Link className="page-GuestNavigation-anime-btn" to="/anime">
            Anime
          </Link>
          <Link className="page-GuestNavigation-movie-btn" to="/movie">
            Movie
          </Link>
        </div>
        <div className="page-GuestNavigation-time-wrapper">
          <Time />
        </div>
      </div>
    </div>
  )
}
