import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import UserAccount from './components/UserAccount.jsx';
import LogIn from './components/LogIn.jsx';
import UploadMovie from './components/UploadMovie.jsx';

class Routes extends Component {
  render() {
    return (
        <div>
          <Switch >                
            <Route path = { `/Login` } component = { LogIn }/>
            <Route path = { `/UserAccount` } component = { UserAccount }/>                           
            <Route path = {'/UploadMovie'} component = {UploadMovie} />
            <Route exact path = { `/` } component = { HomePage }/> 
          </Switch>
        </div>
    );
  }
}

export default Routes;
