import React from 'react';
import TopBar from './TopBar';
import fetch from 'isomorphic-fetch';
import '../style/css/MovieList.css';

var movie = {
    name: "Movie Name",
    poster: "",
    id: "movieId"
}
class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [movie]
        };
    
        // this.handleInput = this.handleInput.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        var curPage = window.location.pathname.split('/');
        if(curPage[1] === "MovieByKey") {
            //search movie by keyword
            var keyword = curPage[2];
            fetch("http://localhost:3001/movie/searchKeyword/" + keyword)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .catch((e) => {
                console.log(e);
            })
            .then((message) => {
                console.log(message);
                this.setState({
                    movieList: message
                })
            })
        }
        else if(curPage[1] === "MovieByCategory") {
            var category = curPage[2];
            if(!curPage[3]) {
                //get movies by category
                fetch("http://localhost:3001/movie/searchByCategory/" + category)
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .catch((e) => {
                    console.log(e);
                })
                .then((message) => {
                    console.log(message);
                    this.setState({
                        movieList: message
                    })
                })
            }
            else {
                //search by key in category
                var keyInCategory = curPage[3]
                fetch("http://localhost:3001/movie/searchInCategory/" + category + "/" + keyInCategory)
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .catch((e) => {
                    console.log(e);
                })
                .then((message) => {
                    console.log(message);
                    this.setState({
                        movieList: message
                    })
                })
            }
        }
    }

    render() {
        return (
            <div>
                <TopBar/>
                <div className="header">
                    <div className="header-title"></div>
                </div>
        
                <div className="content">
                    <div className="gal">
                        {this.state.movieList.map((x) => <a key={x.id} href={`/MovieDetail/`+x.id}><img src={x.poster} alt={x.name} /></a>)}
                        {/* <a href="#"><img src="https://preview.ibb.co/i0PmHk/1.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/mWpE3Q/2.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/i0PmHk/1.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/mysOxk/3.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/i0PmHk/1.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/mWpE3Q/2.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/i0PmHk/1.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/mysOxk/3.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/i0PmHk/1.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/i0PmHk/1.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/i0PmHk/1.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/i0PmHk/1.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/i0PmHk/1.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/i0PmHk/1.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/i0PmHk/1.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/mysOxk/3.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/mysOxk/3.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/i0PmHk/1.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/i0PmHk/1.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/i0PmHk/1.jpg" alt=""/></a>
                        <a href="#"><img src="https://preview.ibb.co/mWpE3Q/2.jpg" alt=""/></a>    */}
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieList;