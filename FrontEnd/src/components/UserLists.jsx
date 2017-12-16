import React from 'react';
import Watched from './WatchedList';
import Wish from './WishList';

class UserLists extends React.Component {
    render() {
        return (
            <div class="panel with-nav-tabs panel-default">
            <div class="panel-heading">
                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#tab1default" data-toggle="tab">Wish List</a></li>
                        <li><a href="#tab2default" data-toggle="tab">Watched List</a></li>
                    </ul>
            </div>
            <div class="panel-body">
                <div class="tab-content">
                    <div class="tab-pane fade in active" id="tab1default">
                        <Wish />
                    </div>
                    <div class="tab-pane fade" id="tab2default">
                        <Watched />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default UserLists;