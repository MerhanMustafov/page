import { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { getMovieTrailerById } from '../../../../../../api/movieApi/movieApi'

interface MovieTrailer {
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
}

export function MovieHomeDetailVideos() {
  const [trailers, setTrailers] = useState<[]>([])
  const params = useParams()

  useEffect(() => {
    if (params.movieType && params.movieId) {
    // (document.querySelector('.grow') as HTMLElement)?.classList.remove('grow')
      getMovieTrailerById(
        params.movieType,
        Number(params.movieId),
      ).then((res) =>
        setTrailers(
          res.data.results.map(
            (vid: MovieTrailer) => `https://www.youtube.com/embed/${vid.key}`,
          ),
        ),
      )
    }
  }, [params])
  function expandClick(e: React.MouseEvent) {
    const existing = document.querySelector('.grow') as HTMLElement
    existing && existing.classList.remove('grow')

    const videoWrapper = (e.target as HTMLElement).parentElement
    if (videoWrapper) {
            videoWrapper.classList.add('grow')
      const elToScrollTo = document.querySelector(
        '.movie-MovieHomeDetailVideos-inner-wrapper',
      ) as HTMLElement
      window.scrollTo(0, elToScrollTo.offsetTop)
    }
  }
  return (
    <div className="movie-MovieHomeDetailVideos-outer-wrapper">
      {trailers.length > 0 ? (
        <div className="movie-MovieHomeDetailVideos-inner-wrapper">
          {trailers.length > 0 &&
            trailers.map(
              (vid, i) => (
                <div
                  className={`movie-MovieHomeDetails-movie-detail-video-wrapper`}
                    key={vid}
                >
                  <iframe
                    
                    className="movie-MovieHomeDetails-movie-detail-video"
                    src={vid}
                    allowFullScreen
                    
                  ></iframe>
                  <div onClick={(e) => expandClick(e)} className={`movie-MovieHomeDetails-movie-detail-expands`}>
                    Expand
                  </div>
                </div>
              ),
            )}
        </div>
      ) : null}
    </div>
  )
}
