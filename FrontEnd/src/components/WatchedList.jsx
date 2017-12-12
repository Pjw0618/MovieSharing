import React from 'react';

var WatchedBody = [];
var WatchedList;
//testing data
var pic1 = "http://cdn.playbuzz.com/cdn/db6a5640-13e7-43b9-83fa-749193b62498/bb0b96c2-8330-453e-8ab2-471199af2391.jpg";
for (var i = 0; i < 10; i++){
    WatchedBody.push(
    <div className="col-lg-6 col-sm-6" key={i}> 
        <a className="card" href={pic1}>
            <img className="img-fluid" src={pic1} alt="" />
            <div className="card-title watched">Movie Name</div>
        </a>        
    </div>)
}

class Watched extends React.Component {
    render() {
        return (
            <section className="p-0" id="WatchedList">
                <div className="container-fluid p-0">
                    <div className="row no-gutters popup-gallery">
                        <h2 className="namestyle watched">Watched Movies</h2>
                        <div className="card-group">
                            {WatchedBody}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Watched;
