import {Component} from 'react';
import {Link} from 'react-router-dom';


interface State{
    input: string
    movieType: string
}

export class MovieHome extends Component<{}, State>{
    constructor(props: any) {
        super(props);

        this.state = {
            input: '',
            movieType:  'movie'.trim()
        }
    }

    componentDidMount(): void {}
    componentDidUpdate(): void {console.log(this.state.input, 'updated input') }


    render(){
        const onSearchClick = (e: React.MouseEvent) => {
            console.log(this.state.movieType)
        }
        return(
            <div className="movie-MovieHome-outer-wrapper">
                <div className="movie-MovieHome-inner-wrapper">


                    <div className="movie-MovieHome-content-outer-wrapper">
                        <div className="movie-MovieHome-content-inner-wrapper">
                            <div className="movie-MovieHome-content-navigation-wrapper">
                                <Link className="movie-MovieHome-popular-movies movie-MovieHome-btn" to="/#">Popular</Link>
                                <Link className="movie-MovieHome-toprated-movies movie-MovieHome-btn" to="/#">Top Rated</Link>
                                <Link className="movie-MovieHome-upcomming-movies movie-MovieHome-btn" to="/#">Upcomming</Link>
                            </div>
                            <div className="movie-MovieHome-search-outer-wrapper">

                                <label htmlFor="movie" style={{color: 'red'}}> movie</label>
                                <input type="radio" id="movie" name="type" value="movie" defaultChecked onClick={() => this.setState({movieType: 'movie'.trim()})}/>
                                <label htmlFor="tv" style={{color: 'red'}}> tv show</label>
                                <input type="radio" id="tv" name="type" value="tv" onClick={() => this.setState({movieType: 'tv'.trim()})}/>
                                <div className="movie-MovieHome-search-inner-wrapper">
                                    <input onChange={(e) => this.setState({input: e.target.value})} value={this.state.input} type="text" id="movie-MovieHome-search-by-name" />
                                    <i  onClick={(e) => this.state.input.length > 0 && onSearchClick(e)} className="fa-solid fa-magnifying-glass movie-MovieHome-search-icon" ></i>

                                </div>
                                <div className="movie-MovieHome-search-dropdown-outer-wrapper">
                                <div className="movie-MovieHome-search-dropdown-inner-wrapper">
                                    <div className="movie-MovieHome-movie-box-wrapper">
                                        <img src="https://i.ytimg.com/vi/_OnIFiG3nWg/maxresdefault.jpg" alt="movie image" className="movie-MovieHome-movie-image" />
                                        <div className="movie-MovieHome-movie-title">Time Is Up</div>
                                    </div>
                                </div>

                                </div>

                            </div>
                        </div>

                    </div>
                
                
                
                
                </div>


            </div>
        );
    }
}