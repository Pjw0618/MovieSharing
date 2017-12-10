import React from 'react';
var clear = {
    clear: 'both'
}

class RetrievePass extends React.Component {
    render() {
        return (
            <form id="retrieve-form" className="col-lg-12">
                <div className="col-lg-12 logo-kapsul">
                    <img width="100" className="logo" src="https://selimdoyranli.com/cdn/material-form/img/logo.png" alt="Logo" />
                </div>

                <div style={clear}></div>
                <div className="group">
                    <input type="text" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label><i className="material-icons input-ikon">mail_outline</i><span className="span-input">E-Mail</span></label>
                </div>
                <a href="javascript:void(0);" className="sifre-hatirlat-buton">Retrieve Password</a>
                <a className="login-link" href="javascript:void('login-link');">Got the password ? Log In</a>
            </form>
        )
    }
}
export default RetrievePass;