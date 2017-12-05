const client = require("../config/elasticsearch");

let exportedMethods = {
    //this function also allow update when given id already exists
    addMovie(movie) {
        client.index({
            index: 'moviesharing',
            type: 'movie',
            id: movie.uuid,
            body: movie
        }, function (error, response) {
            console.log(response);
        });
    }

    



}

module.exports = exportedMethods;