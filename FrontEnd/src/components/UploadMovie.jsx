import React from 'react';
import TopBar from './TopBar';
import '../style/css/UploadMovie.css';

class UploadMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName:"",
            category: "",
            releaseYear: "",
            directors: "",
            starring: "",
            screenplay: "",
            description: "",
            screenshot: "",
            screenshots: []
        };
    
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addScreenshots = this.addScreenshots.bind(this);
    }

    handleInput(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    
    addScreenshots(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        var newScreenshots = this.state.screenshots;
        newScreenshots.push(value);

        this.setState({screenshots:newScreenshots});
    }
    //waiting for the login api
    handleSubmit(event) {

        event.preventDefault();
    }

    render(){
        return (
            <div className="uploadMovie-card">
                <TopBar />
                
                <form id="uploadMovie-form" className="col-lg-12" onSubmit={this.handleSubmit}>
                    <div className="col-lg-12 share-gif-kapsul">
                            <img width="100" className="share-gif" src="https://media.giphy.com/media/3o7rc0qU6m5hneMsuc/giphy.gif" alt="Logo" />
                    </div>

                    <div className="upload-group">
                        <input name="movieName" type="text" value={this.state.movieName} onChange={this.handleInput} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label><i className="material-icons input-ikon">theaters</i><span className="span-input">Movie Name</span></label>
                    </div>

                    <div className="upload-group">
                        <input name="category" type="text" value={this.state.category} onChange={this.handleInput} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label><i className="material-icons input-ikon">view_list</i><span className="span-input">Category</span></label>
                    </div>

                    <div className="upload-group">
                        <input name="releaseYear" type="text" value={this.state.releaseYear} onChange={this.handleInput} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label><i className="material-icons input-ikon">date_range</i><span className="span-input">Release Year</span></label>
                    </div>

                    <div className="upload-group">
                        <input name="directors" type="text" value={this.state.directors} onChange={this.handleInput} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label><i className="material-icons input-ikon">videocam</i><span className="span-input">Directed By</span></label>
                    </div>
                    <br/>

                    <div className="upload-group">
                        <input name="starring" type="text" value={this.state.starring} onChange={this.handleInput} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label><i className="material-icons input-ikon"><i className="material-icons">movie_filter</i></i><span className="span-input">Starring</span></label>
                    </div>

                    <div className="upload-group">
                        <input name="screenplay" type="text" value={this.state.screenplay} onChange={this.handleInput} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label><i className="material-icons input-ikon">assignment</i><span className="span-input">Screenplay By</span></label>
                    </div>
                    <br/>

                    <div className="upload-group">
                        <input name="description" type="text" value={this.state.description} onChange={this.handleInput} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label><i className="material-icons input-ikon">description</i><span className="span-input">Brief Description</span></label>
                    </div>
                    <br/>
                    <input type="file" name="screenshot" id="files" className="inputfile" value={this.state.screenshot} onChange={this.addScreenshots} multiple="multiple" />
                    <label htmlFor="files"><i className="material-icons input-ikon">file_upload</i><span className="span-input">Add screenshot</span></label>
                    <output id="result" />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default UploadMovie;