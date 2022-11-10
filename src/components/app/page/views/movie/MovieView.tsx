import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {MovieNavigation} from './movieNavigation/MovieNavigation';
import {MovieHome} from './movieHome/MovieHome'
export class MovieView extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      componentName: '',
      componentSecName: '',
      loading: false
    }
  }
  componentDidMount() {
    this.setState({componentName: 'MovieView on MOUNT', componentSecName: 'MV ON MOUNT'})
  }


  componentDidUpdate(): void {
    console.log(this.state, 'ON----UPDATE componentDidUpdate 2')
  }


  render() {

   
    return (
      
        <div className="movie-MovieView-wrapper">
            <MovieNavigation />
            <Routes>
                <Route path="/" element={<MovieHome />}/>
            </Routes>
        </div>

    )
  }
}
