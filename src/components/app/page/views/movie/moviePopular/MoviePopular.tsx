import { useEffect, useState} from 'react'; 
import { useParams } from 'react-router-dom'; 
import {MovieCard} from '../movieCard/MovieCard';
import {getPopular} from '../../../../../../api/movieApi/movieApi';

interface MovieData {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[]
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    vide: boolean,
    vote_average: number,
    vote_count: number
}

interface Data{
    page: number
    results: MovieData[]
    total_pages: number
    total_results: number

}
export function MoviePopular(){
    let key = 1
    const [data, setData] = useState<Data | null>()
    const params = useParams()
    
    useEffect(() => {
        if(params.type){
            getPopular(params.type, 1)
            .then(res => setData(res.data))
        }
    }, [params])
    return (

        <div className="movie-MoviePopular-outer-wrapper">
            <div className="movie-MoviePopular-title">Popular </div>
            <div className="movie-MoviePopular-inner-wrapper">
                {
                    data && data.results.length > 0
                    ? data.results.map(movie => <MovieCard key={`MovieCard${key++}`} {...movie}/>)
                    : <div>Loading ...</div>
                }
                    
            </div>

        </div>
    );
}