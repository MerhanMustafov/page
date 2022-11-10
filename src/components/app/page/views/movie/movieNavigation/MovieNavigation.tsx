import {Component} from 'react'
import { Link } from 'react-router-dom'; 

export class MovieNavigation extends Component {
    constructor(props: any){
        super(props);
        this.state = {}
    }

    componentDidMount(): void {
        
    }
    componentDidUpdate(): void {

    }

    render(){
        return (
            <div className="movie-MovieNavigation-outer-wrapper">
                <div className="movie-MovieNavigation-inner-wrapper">
                    <div className="movie-MovieNavigation-buttons-wrapper">
                        <Link className="movie-MovieNavigation-home-btn" to="/movie">Home</Link>
                    </div>
                </div>
            </div>
        );
    }
}