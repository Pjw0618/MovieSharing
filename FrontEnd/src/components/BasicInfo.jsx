import React from 'react';
import ProfilePhoto from './ProfilePhoto.jsx';

class BasicInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userId: localStorage.getItem('userid'),
            user: {
                username: localStorage.getItem('username'),
                email: ""
            }
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/user/getUserByDbId/'+this.state.userId)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .catch((e) => {
            console.log(e);
        })
        .then((message) => {
            console.log(message);
            this.setState({
                user: {
                    username: message.username,
                    email: message.email
                }
            })
        })
    }

    render() {
        return (
            <div className="basicInfo">
                <div className="row">
                    <div className="photo col-lg-3 col-md-3 hidden-sm hidden-xs">
                        <ProfilePhoto />
                    </div>
                    <div className="nameInfo col-lg-9 col-md-9 col-sm-12 col-xs-12">                        
                        <h2 className="row">
                            <div className="boldInput">Dashboard</div>
                        </h2>
                        <div className="conter">
                            <h1 className="bold">{this.state.user.username}</h1>
                            <div>{this.state.user.email}</div>
                        </div>   
                    </div>
                </div>
            </div>
        )
    }
}
export default BasicInfo;