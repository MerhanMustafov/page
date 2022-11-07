import {Link} from 'react-router-dom' 
export function GuestNavigation(){
    return (
        <div className="page-GuestNavigation-outer-wrapper">

        <div className="page-GuestNavigation-inner-wrapper">
            <Link className="page-GuestNavigation-home-btn" to="/">Home</Link>
            <Link className="page-GuestNavigation-anime-btn" to="/anime">Anime</Link>
        </div>
        </div>
    );
}