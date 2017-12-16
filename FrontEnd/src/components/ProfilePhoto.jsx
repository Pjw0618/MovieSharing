import React from 'react';


class ProfilePhoto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div id="profilephoto">
                <div className="card card-default">
                    <div className="card-body">
                        <div align="center">
                            <div >
                                <img className="img-thumbnail img-responsive" src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png" width="300px" height="300px"></img>
                            </div>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProfilePhoto;