import React from 'react';
import { Button } from 'react-bootstrap';
import '../style/css/Searching.css';

class Searching extends React.Component {
    render() {
        return (            
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                    <form action="#" method="#" role="search">
                        <div className="input-group">
                        <input className="form-control" placeholder="" name="srch-term" id="ed-srch-term" type="text" />
                        <div className="input-group-btn">
                            <button type="submit" id="searchbtn">search</button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Searching;