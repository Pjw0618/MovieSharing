import React from 'react';
import ProfilePhoto from './ProfilePhoto.jsx';

class BasicInfo extends React.Component {
    render() {
        return (
            <section id="basicinfo">
                <div className="container">
                    <div className="row">
                        <div className="photo col-lg-3 col-md-3 hidden-sm hidden-xs">
                            <ProfilePhoto />
                        </div>
                        <div className="nameInfo col-lg-9 col-md-9 col-sm-12 col-xs-12">                        
                            <h2 className="row">
                                <input type="text" readonly="value" value="My basic profile" className="boldInput">  
                                </input>
                            </h2>
                            <div class="conter"><h1 className="bold">Your Name</h1>  
                                <br></br>                               
                                <form>
                                    <h5>First name:</h5>
                                    <input type="text" readonly="value" value="firstname111" className="firstname name"></input>
                                    <br></br>
                                    <br></br>
                                    <h5>Last name:</h5>
                                    <input type="text" readonly="value" value="lastname111"className="lasttname name"></input>
                                </form>                              
                            </div>   
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default BasicInfo;