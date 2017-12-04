const mongoCollections = require("../config/mongoCollections");
const movies = mongoCollections.movies;
//keep consistent in ES
//advanced searching using ../elasticsearch
const es = require("../elasticsearch");
const im = require("../imagemagick");
const uuid = require('node-uuid');

let exportedMethods = {
    getAllMovies() {

    },

    getMovieById(id) {

    },

    getMoviesByDirector() {

    },

    getMoviesByStar() {

    },

    getMoviesByWriter() {

    },

    addMovie(movie) {
        return movies().then((movieCollection) =>{
            //data from front end includes name, year, directors, stars, writers, description, poster and category
            // xss process in API server
            let newMovie = {
                _id = uuid.v4(),
                name = movie.name,
                year = movie.year,
                score = undefined,
                watchedUsers = [],
                wishingUsers = [],
                directors = movie.directors,
                stars = movie.stars,
                writers = movie.writers,
                description = movie.description,
                poster = im.processPoster(movie.poster),
                screenShots = [],
                category = movie.category
            };
            return movieCollection.findOne({
                name = movie.name
            }).then((movie) =>{
                if(book){
                    throw "This movie already exists!";
                } else{
                    return movieCollection.insertOne(newMovie).then((insertInfo) =>{
                        return insertInfo.insertedId;
                    }).then((newId) =>{
                        //todo: consistent in ES
                        //only stores basic informations in ES
                        return this.getMovieById(newId).then((insertedMovie) =>{
                            let copy = {
                                uuid = insertedMovie._id,
                                name = insertedMovie.name,
                                year = insertedMovie.year,
                                directors = insertedMovie.directors,
                                stars = insertedMovie.stars,
                                writers = insertedMovie.writers,
                                description = insertedMovie.description,
                                category = insertedMovie.category
                            }
                            es.addMovie
                        })
                    })
                }
            })
        });
    },

    removeMovie() {

    },

    updateMovieInfo() {

    },

    addScreenShotToMovie() {

    },

    updateScore() {

    },

    updateWatchedTimes() {

    }

}

module.exports = exportedMethods;