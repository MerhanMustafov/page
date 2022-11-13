import {useNavigate} from 'react-router-dom'

interface MovieData {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  vide: boolean
  vote_average: number
  vote_count: number
}

interface MoviePopularState {
  currentPage: number
  movies: MovieData[]
  totalPages: number | null
}

interface Props {
    currentPage: number
    totalPages: number | null
    movieType: string
    section: string
}

export function MoviePaginate(props: Props){
    let key = 1
    const navigateTo = useNavigate()
    

    const pages = props.totalPages && props.totalPages > 100 
    ? (n: number) => {return Array.from(Array(n)).map((_, i) => ++i).slice(0, 100)}
    : (n: number) => {return Array.from(Array(n)).map((_, i) => ++i)}

    function getPageNum(e: React.MouseEvent): number{
        return Number((e.target as HTMLElement).id.split('-')[1])
    }

    return (
        <div className="movie-MoviePaginate-outer-wrapper">
            <div className="movie-MoviePaginate-inner-wrapper">
                {props.totalPages && pages.length > 0
                && pages(props.totalPages).map((page: number, i) => 
                //  props.setCurrentPage((d: MoviePopularState) => ({...d, currentPage: Number((e.target as HTMLElement).id.split('-')[1]) }))
                <div onClick={(e) => navigateTo(`/movie/${props.section}/${props.movieType}/${getPageNum(e)}`)}
                key={`MoviePaginate-${key++}`} id={`MoviePaginate-${page}`} className={`movie-MoviePaginate-page ${page === props.currentPage && 'movie-MoviePaginate-current'}`}>{page}</div> )
                }
            </div>
        </div>
    );

}