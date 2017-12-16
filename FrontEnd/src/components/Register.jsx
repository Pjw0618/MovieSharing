import React from 'react';
import fetch from 'isomorphic-fetch';
import AddPortrait from './AddPortrait';

var clear = {
    clear: 'both'
}

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            email: "",
            password: "",
            confirmPassword: "",
            portrait: ""
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
        if(this.state.confirmPassword != this.state.password) {
            alert("Confirm password doesn't match");
            event.preventDefault();
        }
        else {
            fetch('http://localhost:3001/user/signup', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                  }),
                body: JSON.stringify(this.state)
              }).then(function(res) {
                  return res.json();
              }).then(function(json) {
                  alert("Register successfully");
            });
        }
    }

    render() {
        return (
            <form id="register-form" className="col-lg-12" onSubmit={this.handleSubmit}>
                <div className="col-lg-12 logo-kapsul">
                    <img width="100" className="logo" src="https://selimdoyranli.com/cdn/material-form/img/logo.png" alt="Logo" />
                </div>
        
                <div style={clear}></div>
                <div className="group">
                    <input name="username" value={this.state.username} onChange={this.handleInput} type="text" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label><i className="material-icons input-ikon">person_outline</i><span className="span-input">User name</span></label>
                </div>
                <div className="group">
                    <input name="email" type="text" value={this.state.email} onChange={this.handleInput} required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label><i className="material-icons input-ikon">mail_outline</i><span className="span-input">E-Mail</span></label>
                </div>
                <div className="group">
                    <input name="password" type="password" value={this.state.password} onChange={this.handleInput} required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label><i className="material-icons input-sifre-ikon">lock</i><span className="span-input">Password</span></label>
                </div>
                <div className="group">
                    <input name="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.handleInput} required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label><i className="material-icons input-sifre-ikon">lock</i><span className="span-input">Password Again</span></label>
                </div>
                <div className="poster-kapsul">
                    <a className="giris-yap-buton" data-toggle="modal" data-target="#addPortrait">Upload Portrait</a>
                    <input className="kayit-ol-buton" type="submit" value="Register" />
                </div>
                <a className="login-link" href="javascript:void('login-link');">Already have an account ? Log In.</a>
                <AddPortrait/>
            </form>
        )
    }
}
export default Register;