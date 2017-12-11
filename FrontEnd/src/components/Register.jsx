import React from 'react';

var clear = {
    clear: 'both'
}

class Register extends React.Component {
    render() {
        return (
            <form id="register-form" className="col-lg-12">
                <div className="col-lg-12 logo-kapsul">
                    <img width="100" className="logo" src="https://selimdoyranli.com/cdn/material-form/img/logo.png" alt="Logo" />
                </div>
        
                <div style={clear}></div>
                <div className="group">
                    <input type="text" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label><i className="material-icons input-ikon">person_outline</i><span className="span-input">User name</span></label>
                </div>
                <div className="group">
                    <input type="text" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label><i className="material-icons input-ikon">mail_outline</i><span className="span-input">E-Mail</span></label>
                </div>
                <div className="group">
                    <input type="password" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label><i className="material-icons input-sifre-ikon">lock</i><span className="span-input">Password</span></label>
                </div>
                <div className="group">
                    <input type="password" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label><i className="material-icons input-sifre-ikon">lock</i><span className="span-input">Password Again</span></label>
                </div>
                <a href="javascript:void(0);" className="kayit-ol-buton">Register</a>
                <a className="login-link" href="javascript:void('login-link');">Already have an account ? Log In.</a>
            </form>
        )
    }
}
export default Register;