import React from 'react';
import { Button } from 'react-bootstrap';

class GitHubRepo extends React.Component {
    render() {
        return (
            <section className="bg-dark text-white">
                <div className="container text-center">
                    <h2 className="mb-4">Codes are available via GitHub!</h2>
                    <a className="btn btn-light btn-xl sr-button" href="https://github.com/Pjw0618/MovieSharing">Visit Now!</a>
                </div>
            </section>
        )
    }
}
export default GitHubRepo;