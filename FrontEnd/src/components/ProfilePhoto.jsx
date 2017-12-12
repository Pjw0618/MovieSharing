import React from 'react';


class ProfilePhoto extends React.Component {
    render() {
        return (
            <div id="profilephoto">
                <div className="card card-default">
                    <h5 className="card-header" align="center">Your photo</h5>
                       
                    <div className="card-body">
                        <div align="center">
                            <div >
                                <img className="img-thumbnail img-responsive" src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png" width="300px" height="300px"></img>
                            </div>
                            <br></br>
                            <div >
                                <button className="btn btn-primary" ><i className="fa fa-upload" aria-hidden="true" ></i> Upload new photo!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProfilePhoto;