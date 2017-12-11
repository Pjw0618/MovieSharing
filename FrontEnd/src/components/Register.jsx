import React from 'react';

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
            confirmPassword: ""
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
        // alert('Username: ' + this.state.username + '; Password: ' + this.state.password + '; confirmPass:' + this.state.confirmPassword + "; email: "+this.state.email);
        event.preventDefault();
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