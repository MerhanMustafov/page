import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {getAnimeDetailById} from "../../../../../../api/apiReaquest/apiRequest" 

interface AnimeDetailData {
    animeTitle: string
    animeImg: string
    type: string
    status: string
    synopsis: string
    genres: string[]
    episodesList: {episodeId: string, episodeNum: string}[]
}

export function AnimeDetail(){
    const params = useParams()
    const [data, setData] = useState<AnimeDetailData>()

    useEffect(() => {
        params.animeId && getAnimeDetailById(params.animeId).then(res => {setData(res.data)})
    }, [])
    return (
        <div className="anime-detail-outer-wrapper">
            <div className="anime-detail-inner-wrapper">
                <img className="anime-detail-image" src={data?.animeImg} alt="anime image" />
                <h2 className="anime-detail-title">{data?.animeTitle}</h2>
                <div className="anime-detail-status">{data?.status}</div>
                <div className="anime-detail-synopsis">{data?.synopsis }</div>
                <div className="anime-detail-episodes-count">{data?.episodesList.length}</div>
            </div>
        </div>
    );
}