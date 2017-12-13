import React from 'react';
import '../style/css/AddComment.css';

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: this.props.movie,
            rating: "",
            content: ""
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        // event.preventDefault();
    }

    render() {
        return (
            <div className="modal fade product_view" id="product_view">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <a href="#" data-dismiss="modal" className="className pull-right"><i class="material-icons">clear</i></a>
                        <h3 className="modal-title">Comment And Rate</h3>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-6 product_img">
                                <img src={this.state.movie.poster} className="img-responsive"/>
                            </div>
                            <div className="col-md-6 product_content">
                                <h4><span>{this.state.movie.name}</span></h4>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row lead">
                                        {/* <div id="stars-existing" className="starrr" data-rating='4'></div> */}
                                            <br/>
                                        </div>
                                        <input name="rating" id="count-existing" placeholder="Rating" value={this.state.rating} onChange={this.handleInput}  />
                                    <textarea name="content" rows="4" cols="50" placeholder="Comment" value={this.state.content} onChange={this.handleInput}/>
                                    <div className="space-ten"></div>
                                    <div className="btn-ground">
                                        <button type="submit" className="btn btn-primary">SUBMIT</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default AddComment;