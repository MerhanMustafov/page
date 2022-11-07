// NavigationAnimeSearchDropdownBox
import {useNavigate} from 'react-router-dom'
interface AnimeSearchData {
  animeId: string
  animeTitle: string
  animeUrl: string
  animeImg: string
  status: string
}
interface Props {
    animeData: AnimeSearchData
    input: string
    setInput: (i: string ) => void
}
export function NavigationAnimeSearchDropdownBox(props: Props){
    const navigateTo = useNavigate()

    function clickHandler(e: React.MouseEvent){
        props.setInput('');
        navigateTo(`/anime/detail/${props.animeData.animeId}`);

    }
    return (
        <div className="anime-NavigationAnimeSearchDropdownBox-outer-wrapper" onClick={(e) => {clickHandler(e)}}>
            <div className="anime-NavigationAnimeSearchDropdownBox-inner-wrapper">
                <img className="anime-NavigationAnimeSearchDropdownBox-img" src={props.animeData.animeImg} alt=" anime image" />
                <div className="anime-NavigationAnimeSearchDropdownBox-title">
                    {props.animeData.animeTitle}
                </div>

            </div>

        </div>
    );
}