import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getAnimeEpisode,getAnimeDetailById} from '../../../../../../api/apiReaquest/apiRequest'

export function AnimeEpisode(){
    const params = useParams()
    const [episodeLink, setEpisodeLink] = useState<string | null>(null)
    console.log(params)
    
    useEffect(() => {
        params.animeId && params.episodeId &&
        Promise.all([
            getAnimeDetailById(params.animeId),
            getAnimeEpisode(params.episodeId),
        ]).then(res => {
            setEpisodeLink(res[1].data.Referer)
        })

    }, [])

     // request and getting data from the episode view
    


    console.log(params)
    return (
        <div className="anime-Episode-streaming-wrapper">
            <div>ANIME EP VIEW</div>
                    {episodeLink && 
                        <iframe className="vid" width="560" height="315" src={episodeLink}  allowFullScreen></iframe>
                    
                    }
                </div>
    );
}