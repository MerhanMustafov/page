import {Link} from 'react-router-dom' 
export function NavigationAnime(){
    return(
        <div className="anime-NavigationAnime-outer-wrapper">
            <div className="anime-NavigationAnime-innner-wrapper">
                <Link to="/anime">Home</Link>
            </div>

        </div>
    );
}