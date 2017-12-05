import React from 'react';
import { Button, ButtonToolbar} from 'react-bootstrap';
import { Link, IndexLink } from 'react-router-dom';

class TopBar extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light fixed-top' id="mainNav">
    		    <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to="/">Movist</Link>
                    <Button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        {/* Category */}
                        {/* Top 10 */}                        
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/Login">Log In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/UserAccount">User Account</Link>
                        </li>
                    </ul>
                    </div>
                </div>
    	    </nav>
        )
    }
}

export default TopBar;