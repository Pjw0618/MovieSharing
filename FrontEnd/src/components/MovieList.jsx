import React from 'react';
import TopBar from './TopBar';
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

    //function to get result
    componentDidMount() {
        //fetch
    }

    render() {
        return (
            <div>
                <TopBar/>
                <div className="header">
                    <div className="header-title"></div>
                </div>
        
                <div className="content">
                    <div class="gal">
                        {/* {this.state.movieList.map((x) => <a key={x.id} href={`/MovieDetail/`+x.id}><img src={x.poster} alt={x.name} /></a>)} */}
                        <a href="#"><img src="https://preview.ibb.co/i0PmHk/1.jpg" alt=""/></a>
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
                        <a href="#"><img src="https://preview.ibb.co/mWpE3Q/2.jpg" alt=""/></a>   
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieList;