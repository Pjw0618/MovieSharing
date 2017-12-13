import React from 'react';
import TopBar from './TopBar';
import '../style/css/MovieDetail.css'

//getmovieByid
var movie = {
    name: "Movie name",
    year: "release year",
    poster: "https://media1.popsugar-assets.com/files/thumbor/8wedSPI4RyNdIbYuQr9w9zy0sLA/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8/i/Beauty-Beast-2017-Movie-Posters.jpg",
    cast: ["cast1", "cast2", "cast3"],
    directors: ["d1", "d2"],
    screenplay: ["s1"],
    screenshots: [],
    description: "This is a bull shit description"
};

class MovieDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieId: this.props.match.params.movieId
        };
    }
    render() {
        return (
            <div>
                <TopBar/>
                <div className="movieDetail-card">
                    <div className="movieDetailCard">
                        <div className="poster-kapsul">
                            <img className="poster" src={movie.poster} alt="Poster" />
                            {/* <input className="giris-yap-buton" type="submit" value="SUBMIT" id={this.state.displayForm} /> */}
                            <a className="giris-yap-buton" href="../UploadMovie" id={this.state.displayCongrats}>UPDATE</a>
                        </div>

                        <div className="col-lg-12">
                            <div className="movieDetail-group">
                                <div className="movieName">{movie.name}</div>
                                <div className="releaseYear">{movie.year}</div>
                                <div className="staff">
                                    <ul id="tree3">
                                        <li key="cast"><i className="material-icons">face</i><a href="#">CAST</a>
                                            <ul>
                                                {movie.cast.map((x)=> <li key={x}>{x}</li>)}
                                            </ul>
                                        </li>
                                        <li key="crew"><i className="material-icons">supervisor_account</i>CREW
                                            <ul>
                                                <li key="directors">DIRECTORS
                                                    <ul><ul>{movie.directors.map((x)=> <li key={x}>{x}</li>)}</ul></ul>
                                                </li>
                                                <li key="screenplay">SCREENPLAY
                                                    <ul>{movie.screenplay.map((x)=> <li key={x}>{x}</li>)}</ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="description">
                                    <div>
                                        {movie.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.movieId}
                </div>
                <div className="comment-card"></div>
    	    </div>
        )
    }
}
export default MovieDetail;