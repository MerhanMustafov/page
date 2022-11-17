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
    movieType?: string
    section?: string
}

export function Paginate(props: Props){
    const params = useParams()
    const navigateTo = useNavigate()
    let key = 1
    const [currentPage, setCurrentPage] = useState<number>(Number(params.currentPage))
    const [visiblePages, setVisiblePages] = useState<number[]>([])
    const [lastPage, setLastPage] = useState<number>(0)
    useEffect(() => {
        setLastPage(0)
        setVisiblePages([])
            setLastPage(0)
        let firstVisiblePageIndex: number;
        let lastVisiblePageIndex: number;
        if(Number(params.currentPage) > 10){
            firstVisiblePageIndex = Number(params.currentPage) - 10
            lastVisiblePageIndex = Number(params.currentPage) + 10
        }else{
            firstVisiblePageIndex = 1
            lastVisiblePageIndex = Number(params.currentPage) + 10
        }

        const pages = (n: number) => {return Array.from(Array(n)).map((_, i) => ++i).slice(firstVisiblePageIndex, lastVisiblePageIndex)}
        
            setVisiblePages(pages(props.totalPages))
            setLastPage(props.totalPages)

    }, [params])

    function getPageNum(e: React.MouseEvent): number{
        return Number((e.target as HTMLElement).id.split('-')[1])
    }

    function onPageClick(e: React.MouseEvent){
        const pageNum = getPageNum(e)
        setCurrentPage(pageNum)
        if(params.animeType){
            navigateTo(`/anime/${params.animeType}/${pageNum}`)
        }else if(params.movieType){
            navigateTo(`/movie/${props.section}/${params.movieType}/${pageNum}`)
            scrollTo('.current-clicked-section')

        }
    }

    return (
        <div className="Paginate-outer-wrapper">
            <div className="Paginate-inner-wrapper">

               <div onClick={(e) => onPageClick(e)}id={`Paginate-1`} className={`Paginate-page ${Number(params.currentPage) === 1 && 'Paginate-current'}`}>1</div> 
                
                {visiblePages.length > 0 &&
                visiblePages.map((page: number, i) => 
                <div onClick={(e) => onPageClick(e)}
                key={`Paginate-${key++}`} id={`Paginate-${page}`} className={`Paginate-page ${page === Number(params.currentPage) && 'Paginate-current'}`}>{page}</div> ).slice(0,  visiblePages.length -1)
                }
                {lastPage > 0
                &&
                <div onClick={(e) => onPageClick(e)}id={`Paginate-${lastPage}`} className={`Paginate-page ${Number(params.currentPage) === lastPage && 'Paginate-current'}`}>{props.totalPages}</div>

                }
            </div>
        </div>
    );

}

function scrollTo(identifier: string){
    const ellToScrollTo = (document.querySelector(identifier) as HTMLElement)
        window.scrollTo(0, ellToScrollTo.offsetTop - 10)
}