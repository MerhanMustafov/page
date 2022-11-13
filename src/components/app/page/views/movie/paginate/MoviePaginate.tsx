import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

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
    totalPages: number 
    movieType: string
    section: string
}

export function MoviePaginate(props: Props){
    const params = useParams()
    const navigateTo = useNavigate()
    let key = 1
    const [currentPage, setCurrentPage] = useState<number>(Number(1))
    const [visiblePages, setVisiblePages] = useState<number[]>([])
    const [lastPage, setLastPage] = useState<number>(0)
    
    useEffect(() => {
        let firstVisiblePageIndex: number;
        let lastVisiblePageIndex: number;
        if(currentPage > 10){
            firstVisiblePageIndex = currentPage - 10
            lastVisiblePageIndex = currentPage + 10
        }else{
            firstVisiblePageIndex = 1
            lastVisiblePageIndex = currentPage + 10
        }
        const pages = (n: number) => {return Array.from(Array(n)).map((_, i) => ++i).slice(firstVisiblePageIndex, lastVisiblePageIndex)}
        if(props.totalPages && props.totalPages < 500){
            setVisiblePages(pages(props.totalPages))
            setLastPage(props.totalPages)
        }else{
            setVisiblePages(pages(500));
            setLastPage(500)

        }

    }, [params])

    function getPageNum(e: React.MouseEvent): number{
        return Number((e.target as HTMLElement).id.split('-')[1])
    }

    function onPageClick(e: React.MouseEvent){
        const pageNum = getPageNum(e)
        setCurrentPage(pageNum)
        navigateTo(`/movie/${props.section}/${props.movieType}/${pageNum}`)
        const ellToScrollTo = (document.querySelector('.current-clicked-section') as HTMLElement)
        window.scrollTo(0, ellToScrollTo.offsetTop - 10)
    }

    return (
        <div className="movie-MoviePaginate-outer-wrapper">
            <div className="movie-MoviePaginate-inner-wrapper">

               <div onClick={(e) => onPageClick(e)}id={`MoviePaginate-1`} className={`movie-MoviePaginate-page ${currentPage === 1 && 'movie-MoviePaginate-current'}`}>1</div> 
                
                
                {visiblePages.length > 0 
                && visiblePages.map((page: number, i) => 
                <div onClick={(e) => onPageClick(e)}
                key={`MoviePaginate-${key++}`} id={`MoviePaginate-${page}`} className={`movie-MoviePaginate-page ${page === currentPage && 'movie-MoviePaginate-current'}`}>{page}</div> ).slice(0,  visiblePages.length -1)
                }
                {lastPage > 0
                &&
                <div onClick={(e) => onPageClick(e)}id={`MoviePaginate-${lastPage}`} className={`movie-MoviePaginate-page ${currentPage === lastPage && 'movie-MoviePaginate-current'}`}>{lastPage}</div>

                }
            </div>
        </div>
    );

}