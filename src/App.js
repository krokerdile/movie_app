import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from "./Movie.js"

// const -> 상수
// const movieTitle = [
//   'Harry Potter',
//   'Bugs',
//   'Toy Story',
//   'About Time'
// ]

// const moviePoster =[
//   'https://static-www.quotidianopiemontese.it/wp-content/2018/10/15125833/harry-potter-653x367.jpg',
//   'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-rjh0mf_17e758bd.jpeg?region=0%2C0%2C1000%2C1409',
//   'https://ichef.bbci.co.uk/news/660/cpsprodpb/C3D3/production/_107513105_toy-story-4_disney.jpg',
//   'https://www.indiewire.com/wp-content/uploads/2013/08/about-time-1.jpg'
// ]

class App extends Component{
  state = {

  }
  componentWillMount(){
    console.log('will mount')
  }
  componentDidMount(){
    // setTimeout(()=>{
    //   this.setState(
    //     {
    //       movies :[
    //         {
    //           title: 'Harry Potter',
    //           poster: 'https://static-www.quotidianopiemontese.it/wp-content/2018/10/15125833/harry-potter-653x367.jpg'
    //         },
    //         {
    //           title: 'Bugs',
    //           poster: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-rjh0mf_17e758bd.jpeg?region=0%2C0%2C1000%2C1409',
    //         },
    //         {
    //           title: 'Toy Story',
    //           poster: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/C3D3/production/_107513105_toy-story-4_disney.jpg',
    //         },
    //         {
    //           title: 'About Time',
    //           poster: 'https://www.indiewire.com/wp-content/uploads/2013/08/about-time-1.jpg'
    //         },
    //       ]
    //     }
    //   )
    // },2000)
    
    // console.log("나는 에이젝스 한테 패치를 맡기고 내 작업을 계속하지!")
    this._getMovie()
  }
  _getMovie = async() => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () =>{
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _renderMovies =()=>{
    const movies = this.state.movies.map((movie,index)=>{
      return <Movie 
        title={movie.title}
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres}
        synopsis={movie.synopsis}/>
    })
    return movies
  }

  // rendering 함수
  render(){
    return(
      <div className="App">
        {/* call movie component */}
        {/* <Movie title={movieTitle[0]} poster={moviePoster[0]}/>  */}
        {/* <Movie title={movieTitle[1]} poster={moviePoster[1]}/> */}
        {/* <Movie title={movieTitle[2]} poster={moviePoster[2]}/> */}
        {/* <Movie title={movieTitle[3]} poster={moviePoster[3]}/> */}
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    )
  }
}


export default App;



// function App() {
//   return (
//     <div className="App">
//       <h1> like lion! </h1>
//     </div>
//   );
// }