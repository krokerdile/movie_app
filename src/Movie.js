import React, {Component} from 'react';
import './Movie.css';
import propTypes from 'prop-types';
import LineEllipsis from 'react-line-ellipsis';

// class Movie extends Component{
//     static propTypes ={
//         title: propTypes.string.isRequired,
//         poster: propTypes.string.isRequired
//     }
//     render(){
//         console.log(this.props);
//         return(
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <MoviePoster poster={this.props.poster}/>
//             </div>
//         )
//     }
// }

// class MoviePoster extends Component{
//     static propTypes={
//         poster: propTypes.string.isRequired
//     }
    
//     render(){
//         return(
//             <div>
//                 <img src={this.props.poster} alt="" width="300"/>
//             </div>
//         )
//     }
// }

function Movie({title,poster,genres,synopsis}){
    return(
        <div className="Movie">
            <div className="Movie_Column">
                <MoviePoster poster={poster} />
            </div>
            <div className="Movie_column">
                <h1>{title}</h1>
                <div className="Movie_genres">
                    {genres.map((genre,index) => <MovieGenres genre={genre} key={index}/>)}
                </div>
                <div>
                    <LineEllipsis
                        text={synopsis}
                        maxLine='20'
                        ellipsis='..'
                        trimRight
                        basedOn='letters'
                    />
                    {synopsis}
                </div>
            </div>
        </div>
    )
}

Movie.propTypes ={
    title : propTypes.string.isRequired,
    poster : propTypes.string.isRequired,
    genres: propTypes.string.isRequired,
    synopsis : propTypes.string.isRequired
}

function MoviePoster({poster}){
    return(
        <img src={poster} alt="Movie Poster" width="300"/>
    )
}

MovieGenres.propTypes ={
    genre : propTypes.string.isRequired
}

function MovieGenres({genre}){
    return(
        <span className="Movie_Genre">
            {genre}
        </span>
    )
}


export default Movie //다른 js 파일에서 movie 컴포넌트를 사용할 수 있도록 export 해줌