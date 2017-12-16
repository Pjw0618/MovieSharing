import React from 'react';
var FormData = require('form-data');

class Wish extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: localStorage.getItem('userid'),
            wishList: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/user/getUserByDbId/'+this.state.userId)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .catch((e) => {
            console.log(e);
        })
        .then((message) => {
            fetch('http://localhost:3001/movie/getMoviesByIdList/'+JSON.stringify(message.wishList))
            .then((response) => {
                return response.json();
            })
            .catch((e) => {
                console.log(e);
            })
            .then((message) => {
                this.setState({
                    wishList: message
                })
            })
        })
        console.log(this.state.wishList)
    }

    // componentDidMount() {
    //     fetch('http://localhost:3001/user/getUserByDbId/' + this.state.userId)
    //         .then((response) => {
    //             console.log(response);
    //             return response.json();
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         })
    //         .then((message) => {
    
    //             let promises = [];
    //             message.wishList.forEach(element => {
    //                 promises.push(fetch('http://localhost:3001/movie/getMovieById/' + element))
    //             });
    //             Promise.all(promises).then((responses) => {
    //                 Promise.all(responses).then((values) => {
    //                     values.forEach((result)=>{
    //                         this.state.wishList.push(result);
    //                     })
    //                 })
    //             })
    //         })
    //         console.log(this.state.wishList.length)
    //     }    

    render() {
        return (
            <section className="p-0" id="WishList">
                {/* <div className="container-fluid p-0">
                    <div className="row no-gutters popup-gallery">
                        <h2 className="namestyle">Wish List</h2>
                        <div className="card-group">
                            <ul className="wishList">
                                {this.state.wishList.map((x) => {
                                    <li><a href={`/MovieDetail/`+x._id}>{x.name}</a></li>
                                })}
                                {this.state.wishList.length}
                            </ul>
                        </div>
                    </div>
                </div> */}
            </section>
        )
    }
}
export default Wish;
