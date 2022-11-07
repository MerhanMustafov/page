import {Link} from 'react-router-dom' 

interface Props{
    input: string
    setInput: (i: string) => void
}


export function NavigationAnimeHomeBtn(props: Props){
    return (
        <div className="anime-NavigationAnimeHomeBtn-outer-wrapper">
            <div className="anime-NavigationAnimeHomeBtn-innner-wrapper">
                {/* onClick={() => props.setReload(true)} */}

                <Link to="/anime" onClick={() => props.setInput('')}>Home</Link>
            </div>

            </div>
    );
}