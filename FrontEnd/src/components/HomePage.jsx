import React from 'react';
import { Button } from 'react-bootstrap';
import TopBar from './TopBar.jsx';
import MastTop from './MastTop.jsx';
import '../style/css/creative.min.css';
// import '../style/js/creative.min.js';

class HomePage extends React.Component {
    render() {
        return (
            <div>
    		    <TopBar />
                <MastTop />
    	    </div>
        )
    }
}
export default HomePage;