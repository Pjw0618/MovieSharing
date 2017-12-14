import React from 'react';
import Register from './Register.jsx';
import RetrievePass from './RetrievePassword.jsx';
import TopBar from './TopBar.jsx';
import '../style/css/Login.css';
var clear = {
    clear: 'both'
}

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password: "",
            message: ""
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

    //waiting for the login api
    handleSubmit(event) {
        event.preventDefault();        
        alert(this.state.message);
        window.location.pathname = "/";
    }
      
    render() {
        return (
            <div className="root-login">
                <div className="login-card">
                    <TopBar/>
                    {/* Login form */}
                    <form id="login-form" className="col-lg-12" onSubmit={this.handleSubmit}>
                        {/* Logo */}
                        <div className="col-lg-12 logo-kapsul">
                            <img width="100" className="logo" src="https://selimdoyranli.com/cdn/material-form/img/logo.png" alt="Logo" />
                        </div>

                        <div style={clear}></div>
                        <div className="group">
                            <input name="username" value={this.state.username} type="text" onChange={this.handleInput} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label><i className="material-icons input-ikon">person_outline</i><span className="span-input">User Name</span></label>
                        </div>

                        <div className="group">
                            <input name="password" value={this.state.password} type="password" onChange={this.handleInput} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label><i className="material-icons input-sifre-ikon">lock</i><span className="span-input">Password</span></label>
                        </div>
                        <input className="giris-yap-buton" type="submit" value="Log In" />

                        <div className="forgot-and-create tab-menu">
                            <a className="retrieve-link" href="javascript:void('retrieve-link');">Forgot password ?</a>
                            <a className="register-link" href="javascript:void('register-link');">Register</a>
                        </div>
                    </form>
                    <Register />
                    <RetrievePass />
                </div>
            </div>
            
        )
    }
}
export default LogIn;