import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
interface Props  {
    episodeId: string, 
    episodeNum: string
    animeId: string | undefined
}
export function Episode(props: Props){
    const navigateTo = useNavigate()


   
    return (
        <div className="anime-Episode-outer-wrapper" id={props.episodeId}>
            <div className="anime-Episode-inner-wrapper">
                {/* <div>{props.episodeId}</div> */}
                <div onClick={(e) => navigateTo(`/anime/episode/${props.animeId}/${props.episodeId}`)} className="anime-Episode-number" id={props.episodeId}>{props.episodeNum}</div>
                
            </div>
        </div>
    );
}