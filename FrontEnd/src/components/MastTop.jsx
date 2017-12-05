import React from 'react';
import { Button } from 'react-bootstrap';

class MastTop extends React.Component {
    render() {
        return (
            <header className="masthead text-center text-white d-flex">
                <div className="container my-auto">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h1 className="text-uppercase">
                            <strong>Share favodite movies in Movist</strong>
                            </h1>
                            <hr />
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <p className="text-faded mb-5">Start Movist can help you find out more movies you like! Just search and enjoy!</p>
                            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default MastTop;