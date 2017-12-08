const mongoCollections = require("../config/mongoCollections");
const movies = mongoCollections.movies;
//keep consistent in ES
//advanced searching using ../elasticsearch
const es = require("../elasticsearch");
const im = require("../imagemagick");
const uuid = require('node-uuid');

let exportedMethods = {
    getAllMovies() {
        return movies().then((movieCollection) => {
            return movieCollection.find({}).toArray();
        });
    },

    getMovieById(id) {
        return movies().then((movieCollection) => {
            return movieCollection.findOne({ name = movie.name }).then((movie) => {
                if (!movie) {
                    throw "Movie not found!";
                }
                return movie;
            })
        });
    },

    addMovie(movie) {
        return movies().then((movieCollection) => {
            //data from front end includes name, year, directors, stars, writers, description, poster and category
            // xss process in API server
            let newMovie = {
                _id = uuid.v4(),
                name = movie.name,
                year = movie.year,
                score = undefined,
                watchedUsers =[],
                wishingUsers =[],
                directors = movie.directors,
                stars = movie.stars,
                writers = movie.writers,
                description = movie.description,
                poster = im.processPoster(movie.poster),
                screenShots =[],
                category = movie.category
            };
            return movieCollection.findOne({
                name = movie.name
            }).then((movie) => {
                if (book) {
                    throw "This movie already exists!";
                } else {
                    return movieCollection.insertOne(newMovie).then((insertInfo) => {
                        return insertInfo.insertedId;
                    }).then((newId) => {
                        //todo: consistent in ES
                        //only stores basic informations in ES
                        return this.getMovieById(newId).then((insertedMovie) => {
                            let id = insertedMovie._id;
                            let copy = {
                                name = insertedMovie.name,
                                year = insertedMovie.year,
                                directors = insertedMovie.directors,
                                stars = insertedMovie.stars,
                                writers = insertedMovie.writers,
                                description = insertedMovie.description,
                                category = insertedMovie.category
                            }
                            es.addMovie(id, copy);
                            return insertedMovie;
                        }).then((insertedMovie) => {
                            return insertedMovie;
                        }).catch((e) => {
                            throw "Error inserting into ES!"
                        })
                    }).catch((e) => {
                        throw "Error inserting into MongoDB!"
                    })
                }
            })
        });
    },

    /*
    removeMovie() {

    },
    */

    // call es.addMovie to update in ES
    updateMovieInfo(updateMovie) {

    },
    
    // search given keyword in all movie
    searchInMovie(keyword) {

    },

    // search for given category
    searchByCategory(category) {

    },

    // search for keyword in given category
    searchInCategory(category, keyword) {

    },

    addScreenShotToMovie() {

    },

    updateScore() {

    },

    updateWatchedUsers() {

    },

    updateWishingUsers() {

    },



}

module.exports = exportedMethods;