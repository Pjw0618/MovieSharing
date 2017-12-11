import React from 'react';
import Register from './Register.jsx';
import RetrievePass from './RetrievePassword.jsx';
import TopBar from './TopBar.jsx';
import '../style/css/Login.css';
var clear = {
    clear: 'both'
}

class LogIn extends React.Component {
    render() {
        return (
            <div className="login-card">
                <TopBar/>
                {/* Login form */}
                <form id="login-form" className="col-lg-12">
                    {/* Logo */}
                    <div className="col-lg-12 logo-kapsul">
                        <img width="100" className="logo" src="https://selimdoyranli.com/cdn/material-form/img/logo.png" alt="Logo" />
                    </div>

                    <div style={clear}></div>
                    <div className="group">
                        <input type="text" required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label><i className="material-icons input-ikon">person_outline</i><span className="span-input">User Name</span></label>
                    </div>

                    <div className="group">
                        <input type="password" required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label><i className="material-icons input-sifre-ikon">lock</i><span className="span-input">Password</span></label>
                    </div>
                    <a href="javascript:void(0);" className="giris-yap-buton">Log In</a>

                    <div className="forgot-and-create tab-menu">
                        <a className="retrieve-link" href="javascript:void('retrieve-link');">Forgot password ?</a>
                        <a className="register-link" href="javascript:void('register-link');">Register</a>
                    </div>
                </form>
                <Register />
                <RetrievePass />
    	    </div>
        )
    }
}
export default LogIn;