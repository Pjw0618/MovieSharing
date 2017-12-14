import React from 'react';

class MastTop extends React.Component {
    render() {
        return (
            <header className="masthead text-center text-white d-flex">
                <div className="container my-auto">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h1 className="text-uppercase">
                            <strong>Share favorites in Movist</strong>
                            </h1>
                            <hr />
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <p className="text-faded mb-5">Start Movist can help you find out more movies you like! Just join us, post your favorite movies and enjoy!</p>
                            <a className="btn btn-primary btn-xl js-scroll-trigger" href="/UploadMovie">Upload NOW</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default MastTop;