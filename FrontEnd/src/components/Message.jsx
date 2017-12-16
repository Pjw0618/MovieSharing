import React from 'react';
import request from 'superagent';
import '../style/css/message.css';

class MessageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            senderId: localStorage.getItem("userid"),
            receiverName: "",
            receiverId: "",
            message: ""
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSend(event) {
        //get user id by user name
        fetch("http://localhost:3001/user/getUserByUsername/"+this.state.receiverName)
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
                receiverId: message._id
            })
        })

        //send message
        var sendMessage = {
            "senderId": this.state.senderId,
            "receiverId": this.state.receiverId,
            "movieId": "",
            "message": this.state.message
        }
        request.post("http://localhost:3001/sharemessage/")
        .send(sendMessage)
        .end((err, resp) =>{
            if (resp.body.success == false) 
            { 
              console.log("internal error:");
              console.error(err);
              console.error(resp);
            }
            else{
              console.log(resp);
            }
        })
    }
    render() {
        return (
            <div>
            <div className="round hollow text-center">
                <a href="#" className="open-btn" id="addClass"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
            </div>
            <div className="popup-box chat-popup" id="qnimate">
                <div className="popup-head">
                    <input name="receiverName" className="receiverName" type="text" placeholder="Receiver"
                    value={this.state.receiverName} onChange={this.handleInput} required />
                    <div className="popup-head-right pull-right">
                        <button data-widget="remove" id="removeClass" className="chat-header-button pull-right" type="button"><i className="glyphicon glyphicon-off"></i></button>
                    </div>
                </div>
                <div className="popup-messages">
                    <div className="direct-chat-messages">
                    </div>
                </div>
                <div className="popup-messages-footer">
                    <textarea id="status_message" placeholder="Type a message..." rows="10" cols="40" name="message"></textarea>
                    <div className="btn-footer">
                        <button className="bg_none">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default MessageCard;