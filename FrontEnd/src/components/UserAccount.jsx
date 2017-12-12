import React from 'react';
import TopBar from './TopBar.jsx';
import BasicInfo from './BasicInfo.jsx';
import Watched from './WatchedList.jsx';
import Wish from './WishList.jsx';
import Contact from './Contact.jsx';
import GitHubRepo from './GitHubRepo.jsx';
import '../style/css/UserAccount.css';

class UserAccount extends React.Component {
    render() {
        return (
            <div>           
                <div>
                    <TopBar />
                    <BasicInfo />
                </div>

                <div className="container">     
                    <div className="row">      
                        <div className="col-lg-6 col-sm-12">
                            <Watched />
                        </div>                   
                        <div className="col-lg-6 col-sm-12">
                            <Wish />
                        </div>
                    </div>
                </div>
                <div>
                    <Contact />
                    <GitHubRepo />
                </div>
            
            </div>
        )
    }
}
export default UserAccount;