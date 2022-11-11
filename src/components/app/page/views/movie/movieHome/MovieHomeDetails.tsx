import {Component} from 'react'


// interface State {
//   input: string
//   movieType: string
//   moviesData: MovieData[]
//   error: string
//   currentMovieId: number | null
//   currentMovieDetailData: SingleMovieDetail | null
//   currentMovieTrailers: MovieTrailer[]
//   currentMovieTitle: string | null
//   createMovieTitleQueryString: (input: string) => string
  
// }


export class MovieHomeDetails extends Component{
    constructor(props: any) {
        super(props);

        this.state = {}
    }


    componentDidMount(): void {
        console.log('INNNNNNNNNNNN')

    }
    componentDidUpdate(): void {}

    render(){
        return(
         <div>afte Navigate</div>
     
        );
    }
}


            // {this.state.currentMovieDetailData && (
//  <div className="movie-MovieHomeSearch-movie-detail-outer-wrapper">
//             <div className="movie-MovieHomeSearch-movie-detail-inner-wrapper">
//               <div className="movie-MovieHomeSearch-movie-detail-title">
//                 {this.state.currentMovieDetailData.name ||
//                   this.state.currentMovieDetailData.original_title ||
//                   this.state.currentMovieDetailData.original_name}
//               </div>
//               <img
//                 src={
//                   this.state.currentMovieDetailData.backdrop_path
//                     ? `https://image.tmdb.org/t/p/w500/${this.state.currentMovieDetailData.backdrop_path}`
//                     : `https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png`
//                 }
//                 alt="movie image"
//                 className="movie-MovieHomeSearch-movie-detail-image"
//               />
//               <div className="movie-MovieHomeSearch-movie-detail-overview">
//                 {this.state.currentMovieDetailData.overview}
//               </div>
//               {/* <iframe className="movie-MovieHomeSearch-movie-detail-video" src={`https://www.youtube.com/embed/${this.state.currentMovieTrailers[0].key}`} allowFullScreen></iframe> */}
//               {this.state.currentMovieTrailers &&
//                 this.state.currentMovieTrailers.map((data) => (
//                   <iframe
//                     className="movie-MovieHomeSearch-movie-detail-video"
//                     src={`https://www.youtube.com/embed/${data.key}`}
//                     allowFullScreen
//                   ></iframe>
//                 ))}
//             </div>
//           </div>
   // )}