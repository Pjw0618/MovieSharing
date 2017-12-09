import React from 'react';
import { Button } from 'react-bootstrap';
var Top10Body = [];
var Top10List;
//testing data
var pic1 = "http://cdn.playbuzz.com/cdn/db6a5640-13e7-43b9-83fa-749193b62498/bb0b96c2-8330-453e-8ab2-471199af2391.jpg";
for (var i = 1; i < 10; i++){
    Top10Body.push(
    <div className="col-lg-4 col-sm-6" key={i}>
        <a className="portfolio-box" href={pic1}>
            <img className="img-fluid" src={pic1} alt="" />
            <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                <div className="project-category text-faded">
                    Top {i+1}
                </div>
                <div className="project-name">
                    Movie Name
                </div>
                </div>
            </div>
        </a>
    </div>)
}

class Top10 extends React.Component {
    render() {
        return (
            <section className="p-0" id="Top10">
                <div className="container-fluid p-0">
                    <div className="row no-gutters popup-gallery">
                    {Top10Body}
                    </div>
                </div>
            </section>
        )
    }
}
export default Top10;