
import {NavigationAnimeSearch} from './NavigationAnimeSearch'
import {NavigationAnimeHomeBtn} from './NavigationAnimeHomeBtn'
import {useState} from 'react'


export function NavigationAnime(){
    const [input, setInput] = useState<string>('')

    return(
        <div className="anime-NavigationAnime-outer-wrapper">
            <div className="anime-NavigationAnime-inner-wrapper">
                <div className="anime-NavigationAnime-buttons-wrapper">
                    <NavigationAnimeHomeBtn {...{input, setInput}}/>

                </div>
                <div className="anime-NavigationAnime-search-wrapper">
                    <NavigationAnimeSearch {...{input, setInput}} />

                </div>
            
            </div>

        </div>
    );
}