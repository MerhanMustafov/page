import {Component} from 'react';


export class MovieHome extends Component{
    constructor(props: any) {
        super(props);

        this.state = {}
    }

    componentDidMount(): void {}
    componentDidUpdate(): void {}


    render(){
        return(
            <div className="movie-MovieHome-outer-wrapper">
                <div className="movie-MovieHome-inner-wrapper">
                    <div>Movie Home Component</div>
                </div>

            </div>
        );
    }
}