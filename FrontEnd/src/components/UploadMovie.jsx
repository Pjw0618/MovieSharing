import React from 'react';
import TopBar from './TopBar';
import '../style/css/UploadMovie.css';

class UploadMovie extends React.Component {
    render(){
        return (
            <div className="uploadMovie-card">
                <TopBar />
                
                <form id="uploadMovie-form" className="col-lg-12">
                    <div className="col-lg-12 share-gif-kapsul">
                            <img width="100" className="share-gif" src="https://media.giphy.com/media/3o7rc0qU6m5hneMsuc/giphy.gif" alt="Logo" />
                            {/* <div className="shareMovie-title share-gif">Share your favorite movie</div> */}
                    </div>
                    <div className="upload-group">
                        <input name="movieName" type="text" required/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label><i className="material-icons input-ikon">theaters</i><span className="span-input">Movie Name</span></label>
                    </div>

                    <div className="upload-group">
                        <input name="comment" type="text" required/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label><i className="material-icons input-ikon">comment</i><span className="span-input">Comment</span></label>
                    </div>

                    <div className="upload-group">
                        <input name="screenShot" type="file" required/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        {/* <label><i className="material-icons input-ikon">comment</i><span className="span-input">Comment</span></label> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default UploadMovie;