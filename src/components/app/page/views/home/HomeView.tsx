import logo_gogoanime from '../../../../images/logo/logo-gogoanime.jpg';
import  logo_svg from '../../../../images/logo/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg';
import {Link} from 'react-router-dom' 
export function HomeView(){
    return (
        <div className="home-HomeView-outer-wrapper">
            <div className="home-HomeView-inner-wrapper">
                {/* Anime  */}
                    <div className="home-HomeView-anime-wrapper">


                       <Link to="/anime" className="home-HomeView-anime-link">ANIME</Link> 

                    <div className="home-HomeView-gogoanime-wrapper">
                        <a href="http://gogoanime.ar/" target="_blank">
                            <div>gogoanime: </div>
                            <img src={logo_gogoanime} alt="img" />
                            

                        </a>
                    </div>
                
                    </div>
                

                {/* Anime  */}
                
                
                {/* Movie */}

                <div className="home-HomeView-movie-wrapper">
                    <Link to="/movie" className="home-HomeView-movie-link">MOVIE</Link> 
                     <div className="home-HomeView-tmdb-wrapper">
                        <a href="https://www.themoviedb.org/" target="_blank">
                            <div>tmdb: </div>
                            <img src={logo_svg} alt="img" />
                            

                        </a>
                    </div>
                </div>


                {/* Movie  */}


                






            </div>

        </div>
    );
}