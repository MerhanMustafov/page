
import {NavigationAnimeSearch} from './NavigationAnimeSearch'
import {NavigationAnimeHomeBtn} from './NavigationAnimeHomeBtn'


interface Props{
    input: string
    setInput: (i: string) => void
}

export function NavigationAnime(props: Props){

    return(
        <div className="anime-NavigationAnime-outer-wrapper">
            <div className="anime-NavigationAnime-inner-wrapper">
                
            
            <NavigationAnimeHomeBtn {...{input: props.input, setInput: props.setInput}}/>
            <NavigationAnimeSearch {...{input: props.input, setInput: props.setInput}} />
            </div>

        </div>
    );
}