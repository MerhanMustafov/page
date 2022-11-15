
import {NavigationAnimeSearch} from './NavigationAnimeSearch'
import {NavigationAnimeHomeBtn} from './NavigationAnimeHomeBtn'
import {useState} from 'react'
import { Link} from 'react-router-dom'


export function NavigationAnime(){
    const [input, setInput] = useState<string>('')

    return(
        <div className="anime-NavigationAnime-outer-wrapper">
            <div className="anime-NavigationAnime-inner-wrapper">
                <div className="anime-NavigationAnime-buttons-wrapper">
                    {/* <NavigationAnimeHomeBtn {...{input, setInput}}/> */}
                    <Link className="anime-NavigationAnime-home-btn ani-nav-btn" to="/anime" onClick={() => setInput('')}>Home</Link>
                    <Link className='anime-NavigationAnime-popular-btn ani-nav-btn' to={`/anime/popular/1`} onClick={() => setInput('')}>Popular</Link>
                    <Link className='anime-NavigationAnime-top-airing-btn ani-nav-btn' to={`/anime/top-airing/1`} onClick={() => setInput('')}>Top airing</Link>

                </div>
                <div className="anime-NavigationAnime-search-wrapper">
                    <NavigationAnimeSearch {...{input, setInput}} />

                </div>
            
            </div>

        </div>
    );
}