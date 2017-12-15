import React from 'react';
import { Button, ButtonToolbar, FormGroup, Form} from 'react-bootstrap';
import { Link, IndexLink } from 'react-router-dom';
import Searching from './Searching.jsx';
import Category from './Categories.jsx';
import Auth from '../module/Auth';

const Categories = [
    "Horror",
    "Animation",
    "Comedy",
    "Action",
    "Drama",
    "Western",
    "Fiction",
    "Romantic"
]

var loggedIn = Auth.isUserAuthenticated();//logged in or not
var userName = localStorage.getItem("userinfo").name;
var curPage = window.location.pathname;
var userAccount;

if(loggedIn) {
    userAccount = 
    <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to="/UserAccount">{userName}</Link>
    </li>
}
else {
    userAccount = 
    <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to="/Login" onClick={window.location.reload}>Log In</Link>
    </li>
}

class TopBar extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light fixed-top' id="mainNav">
    		    <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to="/" onClick={window.location.reload}>Movist</Link>
                    <Category categoryList={Categories}/>
                    <Button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <Searching />
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="#Top10" onClick={window.location.reload}>Week's Top Ten</Link>
                        </li>         
                        {userAccount}
                    </ul>
                    </div>
                </div>
    	    </nav>
        )
    }
}

export default TopBar;