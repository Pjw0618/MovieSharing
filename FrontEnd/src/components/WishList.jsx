import React from 'react';

var WishBody = [];
var WishList;
//testing data
var pic1 = "http://cdn.playbuzz.com/cdn/db6a5640-13e7-43b9-83fa-749193b62498/bb0b96c2-8330-453e-8ab2-471199af2391.jpg";
for (var i = 0; i < 10; i++){
    WishBody.push(
    <div className="col-lg-6 col-sm-6" key={i}> 
        <a className="card" href={pic1}>
            <img className="img-fluid" src={pic1} alt="" />
            <div className="card-title">Movie Name</div>
        </a>        
    </div>)
}


class Wish extends React.Component {
    render() {
        return (
            <section className="p-0" id="WishList">
                <div className="container-fluid p-0">
                    <div className="row no-gutters popup-gallery">
                        <h2 className="namestyle">Wish Movies</h2>
                        <div className="card-group">
                            {WishBody}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Wish;
