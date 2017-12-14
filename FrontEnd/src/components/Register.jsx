import React from 'react';
import Request from 'superagent';
// var FormData = require('form-data');
import fetch from 'isomorphic-fetch';

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

    //waiting for the register api
    handleSubmit(event) {
        event.preventDefault();
        alert("submit");
        // var data = new FormData();
        // console.log(this.state.username);
        // console.log(this.state.password)
        // console.log(this.state.email)
        // data.append('username', this.state.username);
        // data.append('password', this.state.password);
        // data.append('email', this.state.email);
        // Request.post("http://localhost:3001/user/signup")

        // .send(data).then((response) => {
        //     console.log(response);
        // })
        fetch('http://localhost:3001/user/signup', {
            method: 'POST',
            mode: "no-cors",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
              }),
            body: JSON.stringify(this.state)
          }).then(function(res) {
              return res.json();
          }).then(function(json) {
              alert(json);
          });
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

                <input className="kayit-ol-buton" type="submit" value="Register" />
                <a className="login-link" href="javascript:void('login-link');">Already have an account ? Log In.</a>
            </form>
        )
    }
}
export default Register;