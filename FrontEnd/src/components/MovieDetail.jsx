import React from 'react';
import TopBar from './TopBar';
import ViewComment from './ViewComment';
import AddComment from './AddComment';
import fetch from 'isomorphic-fetch';
import Auth from '../module/Auth';
import request from 'superagent';
import '../style/css/MovieDetail.css'

class MovieDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieId: this.props.match.params.movieId,
            movie: {
                category: "message.category",
                commentNum: "message.commentNum",
                description: "message.description",
                directors: [],
                name: "message.name",
                poster: "message.poster",
                rating: "message.score",
                screenshots: "message.screenShots",
                starring: [],
                watchedUsers: [],
                wishingUsers: [],
                screenplay: [],
                year: "message.year"
            }
        };

        this.markWatched = this.markWatched.bind(this);
        this.addWishList = this.addWishList.bind(this);
    }

    async componentWillMount() {
        var movieId = window.location.pathname.split('/')[2];
        fetch("http://localhost:3001/movie/getMovieById/" + movieId)
        .then((response) => {
            return response.json();
        })
        .catch((e) => {
            console.log(e);
        })
        .then((message) => {
            this.setState({
                movieId: movieId,
                movie: {
                    category: message.category,
                    commentNum: message.commentNum,
                    description: message.description,
                    directors: message.directors,
                    name: message.name,
                    poster: message.poster,
                    rating: message.score,
                    screenshots: message.screenShots,
                    starring: message.stars,
                    watchedUsers: message.watchedUsers,
                    wishingUsers: message.wishingUsers,
                    screenplay: message.writers,
                    year: message.year
                }
            })
        })
    }

    markWatched(event) {
        request.put('http://localhost:3001/user/watchedList/'+localStorage.getItem("userid")+"/"+this.state.movieId)
        .send({"id": localStorage.getItem("userid"), "movie": this.state.movieId})
        .end((err, resp) =>{
            if (resp.body.success == false) 
            { 
              console.log("internal error:");
              console.error(err);
              console.error(resp.body.message);
            }
        });
    }

    addWishList(event) {
        request.put('http://localhost:3001/user/wishList/'+localStorage.getItem("userid")+"/"+this.state.movieId)
        .send({"id": localStorage.getItem("userid"), "movie": this.state.movieId})
        .end((err, resp) =>{
            if (resp.body.success == false) 
            { 
              console.log("internal error:");
              console.error(err);
              console.error(resp.body.message);
            }
        });
    }

    render() {
        return (
            <div>
                <TopBar/>
                <div className="movieDetail-card">
                    <div className="movieDetailCard">
                        <div className="poster-kapsul">
                            <img className="poster" src={`../processedposters/`+this.state.movie.poster} alt={this.state.movie.name} />
                            <a className="giris-yap-buton" href="../UploadMovie" id={this.state.displayCongrats}>UPDATE</a>
                        </div>

                        <div className="col-lg-12">
                            <div className="movieDetail-group">
                                <div className="movieName">{this.state.movie.name}</div>
                                <div className="releaseYear">{this.state.movie.year}</div>
                                <div className="aveRating">
                                    {this.state.movie.rating}
                                </div>
                                <div className="staff">
                                    <ul id="tree3">
                                        <li key="cast"><i className="material-icons">face</i><a href="#">CAST</a>
                                            <ul>
                                                {this.state.movie.starring.map((x)=> <li key={x}>{x}</li>)}
                                            </ul>
                                        </li>
                                        <li key="crew"><i className="material-icons">supervisor_account</i>CREW
                                            <ul>
                                                <li key="directors">DIRECTORS
                                                    <ul><ul>{this.state.movie.directors.map((x)=> <li key={x}>{x}</li>)}</ul></ul>
                                                </li>
                                                <li key="screenplay">SCRIPTED BY
                                                    <ul>{this.state.movie.screenplay.map((x)=> <li key={x}>{x}</li>)}</ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="description">
                                    <div>
                                        {this.state.movie.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="behavIcons">
                                <button type="button" class = "btn btn-primary" onClick={this.markWatched}>Mark As Wached</button>
                                <button type="button" class = "btn btn-success" onClick={this.addWishList}>Add To WatchList</button>                                
                            </div>
                        </div>
                    </div>
                    
                <div className="comment-card">
                <ViewComment movieId={this.state.movieId} movie={this.state.movie}/>
                </div>
                <AddComment movie={this.state.movie} />
    	    </div>
        )
    }
}
export default MovieDetail;