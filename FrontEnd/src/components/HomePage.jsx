import React from 'react';
import { Button } from 'react-bootstrap';
import TopBar from './TopBar.jsx';
import MastTop from './MastTop.jsx';
import Top10 from './Top10.jsx';
import About from './About.jsx';

import '../style/css/creative.min.css';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <TopBar />
                <MastTop />
                <Top10 />
                <About />
    	    </div>
        )
    }
}

export default HomePage;