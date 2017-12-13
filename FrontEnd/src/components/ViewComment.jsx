import React from 'react';
import '../style/css/Comment.css';

//temp
var comment = {
    userId: "userId",
    movieId: "movieId",
    username: "username",
    content: "content",
    rating: "rating",
    date: "date"
};

class ViewComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieId: this.props.movieId,
            comments: [comment]
        };
    }

    // componentDidMount() {
    //     fetch('/movie/getMovieById/?id=' + this.state.movieId)
    //     .then(results => {
    //         return results.json();
    //     }).then(data => {
    //         alert(data.results);
    //     })
    // }

    render() {
        return (
            <div id="app" className="comments">
                <div className="poster-kapsul">
                    {/* <img className="poster" src={movie.poster} alt="Poster" /> */}
                    {/* <input className="giris-yap-buton" type="submit" value="SUBMIT" id={this.state.displayForm} /> */}
                    {/* <a className="giris-yap-buton" href={`../AddComment/` + this.state.movieId} id={this.state.displayCongrats}>ADD COMMENT</a> */}
                    <a className="giris-yap-buton" data-toggle="modal" data-target="#product_view" id={this.state.displayCongrats}>ADD COMMENT</a>
                    
                </div>
                {this.state.comments.map((x) => 
                    <article>
                        <img id="profile-photo" src="https://en.gravatar.com/userimage/18343163/3fd908393aedf6423ec12cacec9a1f50.jpg?size=200" />
                        <h4><a href="#">{x.username}</a></h4>
                        <time>{x.date}</time>
                        <like></like>
                        <div>{x.rating}</div>
                        <p>{x.content}</p>
                    </article>
                )}
            </div>
        )
    }
}

export default ViewComment;