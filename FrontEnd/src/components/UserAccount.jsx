import React from 'react';
import TopBar from './TopBar.jsx';
import BasicInfo from './BasicInfo.jsx';
import UserLists from './UserLists';
import '../style/css/UserAccount.css';

class UserAccount extends React.Component {
    render() {
        return (
            <div>           
                <div>
                    <TopBar />
                    <BasicInfo />
                    <UserLists />
                </div>
            </div>
        )
    }
}
export default UserAccount;