const bcrypt = require("bcrypt-nodejs");
const data = require("./data");
const dbConnection = require("./config/mongoConnection");
const movies = data.movies;
const users = data.users;
const comments = data.comments;
const sharemessages = data.sharemessages;

const uuid = require('node-uuid');
const client = require("./config/elasticsearch");
//const moment = require("moment");

client.deleteByQuery({
    index: 'moviesharing',
    type: 'movie',
    body: {
        query: {
            match_all: {}
        }
    }
}, function (error, response) {
    console.log("ES deleted!")
});
let u1, u2, u3, u4;
let m1;
let m2;
let m3;
let m4;
let m5, m6, m7, m8;
let m9, m10, m11, m12;
let m13, m14, m15, m16;
dbConnection().then((db) => {
    return db.dropDatabase().then(() => {
        return dbConnection;
    }).then((db) => {
        requestBody = {
            username: "john",
            email: "john@email.com", //decodeURIComponent?
            password: "1234"
        }
        return users.addUser(requestBody).then((user) => {
            u1 = user;
        });
    })
        .then((jhon) => {
            requestBody = {
                username: "Amy",
                email: "amy@email.com", //decodeURIComponent?
                password: "1234"
            }
            return users.addUser(requestBody).then((user) => {
                u2 = user;
            });
        })
        .then((Amy) => {
            requestBody = {
                username: "Bob",
                email: "bob@email.com", //decodeURIComponent?
                password: "1234"
            }
            return users.addUser(requestBody).then((user) => {
                u3 = user;
            });
        })
        .then((Bob) => {
            requestBody = {
                username: "Cate",
                email: "cate@email.com", //decodeURIComponent?
                password: "1234"
            }
            return users.addUser(requestBody).then((user) => {
                u4 = user;
            });
        })
        .then((cate) => {
            request = {
                name: "spiderman",
                year: 2002,
                directors: ["Sam Raimi"],
                stars: ["Tobey Maguire", "Kirsten Dunst", "Willem Dafoe"],
                writers: ["Stan Lee", "Steve Ditko"],
                description: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.",
                category: "war",
                poster: "../APIServer/uploads/1.jpg",
                screenShots: ["../APIServer/uploads/1.1.jpg", "../APIServer/uploads/1.2.jpg"]
            }
            return movies.addMovie(request).then((movie) => {
                m1 = movie;
            });
        })
        .then((movie) => {
            request = {
                name: "IronMan",
                year: 2008,
                directors: ["Jon Favreau"],
                stars: ["Robert Downey Jr", "Gwyneth Paltrow", "Terrence Howard"],
                writers: ["Mark Fergus", "Hawk Ostby"],
                description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
                category: "war",
                poster: "../APIServer/uploads/2.jpg",
                screenShots: ["../APIServer/uploads/2.1.jpg", "../APIServer/uploads/2.2.jpg"]
            }
            return movies.addMovie(request).then((movie) => {
                m2 = movie;
            });
        })
        .then((movie) => {
            request = {
                name: "The Avengers",
                year: 2012,
                directors: ["Joss Whedon"],
                stars: ["Robert Downey Jr", "Chris Evans", "Scarlett Johansson"],
                writers: ["Joss Whedon ", "Zak Penn"],
                description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                category: "war",
                poster: "../APIServer/uploads/3.jpg",
                screenShots: ["../APIServer/uploads/3.1.jpg", "../APIServer/uploads/3.2.jpg"]
            }
            return movies.addMovie(request).then((movie) => {
                m3 = movie;
            });
        })
        .then((movie) => {
            request = {
                name: "Thor: Ragnarok",
                year: 2017,
                directors: ["Taika Waititi"],
                stars: ["Chris Hemsworth", "Tom Hiddleston", "Cate Blanchett"],
                writers: ["Eric Pearson", "Craig Kyle"],
                description: "Imprisoned, the almighty Thor finds himself in a lethal gladiatorial contest against the Hulk, his former ally. Thor must fight for survival and race against time to prevent the all-powerful Hela from destroying his home and the Asgardian civilization.",
                category: "war",
                poster: "../APIServer/uploads/4.jpg",
                screenShots: ["../APIServer/uploads/4.1.jpg", "../APIServer/uploads/4.2.jpg"]
            }
            return movies.addMovie(request).then((movie) => {
                m4 = movie;
            });
        })
        .then((movie) => {
            request = {
                name: "Harry Potter and the Sorcerer's Stone",
                year: 2001,
                directors: ["Chris Columbus"],
                stars: ["Daniel Radcliffe", "Rupert Grint", "Richard Harris"],
                writers: ["J.K. Rowling", "Steve Kloves"],
                description: "Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School of Witchcraft and Wizardry.",
                category: "magic",
                poster: "../APIServer/uploads/5.jpg",
                screenShots: ["../APIServer/uploads/5.1.jpg", "../APIServer/uploads/5.2.jpg"]
            }
            return movies.addMovie(request).then((movie) => {
                m5 = movie;
            });
        })
        .then((movie) => {
            request = {
                name: "Harry Potter and the Prisoner of Azkaban",
                year: 2004,
                directors: ["Alfonso Cuarón"],
                stars: ["Daniel Radcliffe", "Rupert Grint", "Richard Harris"],
                writers: ["J.K. Rowling", "Steve Kloves"],
                description: "It's Harry's third year at Hogwarts; not only does he have a new Defense Against the Dark Arts teacher, but there is also trouble brewing. Convicted murderer Sirius Black has escaped the Wizards' Prison and is coming after Harry.",
                category: "magic",
                poster: "../APIServer/uploads/6.jpg",
                screenShots: ["../APIServer/uploads/6.1.jpg", "../APIServer/uploads/6.2.jpg"]
            }
            return movies.addMovie(request).then((movie) => {
                m6 = movie;
            });
        })
        .then((movie) => {
            request = {
                name: "Harry Potter and the Chamber of Secrets ",
                year: 2002,
                directors: ["Alfonso Cuarón"],
                stars: ["Daniel Radcliffe", "Rupert Grint", "Richard Harris"],
                writers: ["J.K. Rowling", "Steve Kloves"],
                description: "Harry ignores warnings not to return to Hogwarts, only to find the school plagued by a series of mysterious attacks and a strange voice haunting him.",
                category: "magic",
                poster: "../APIServer/uploads/7.jpg",
                screenShots: ["../APIServer/uploads/7.1.jpg", "../APIServer/uploads/7.2.jpg"]
            }
            return movies.addMovie(request).then((movie) => {
                m7 = movie;
            });
        })
        .then((movie) => {
            request = {
                name: "Harry Potter and the Half-Blood Prince",
                year: 2009,
                directors: ["Alfonso Cuarón"],
                stars: ["Daniel Radcliffe", "Rupert Grint", "Richard Harris"],
                writers: ["J.K. Rowling", "Steve Kloves"],
                description: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as the property of the Half-Blood Prince and begins to learn more about Lord Voldemort's dark past.",
                category: "magic",
                poster: "../APIServer/uploads/8.jpg",
                screenShots: ["../APIServer/uploads/8.1.jpg", "../APIServer/uploads/8.2.jpg"]
            }
            return movies.addMovie(request).then((movie) => {
                m8 = movie;
            });
        })
        .then((movie) => {
            requestBody = {
                userId: u1._id,
                movieId: m1._id,
                username: u1.username,
                content: "good",
                rating: 4,
                date: "09/09/2017"
            }
            return comments.addComment(requestBody.userId, requestBody.movieId, requestBody.username, requestBody.content, requestBody.rating, requestBody.date);
        })
        .then((comment) => {
            requestBody = {
                userId: u2._id,
                movieId: m2._id,
                username: u2.username,
                content: "nice",
                rating: 4.5,
                date: "09/10/2017"
            }
            return comments.addComment(requestBody.userId, requestBody.movieId, requestBody.username, requestBody.content, requestBody.rating, requestBody.date);
        })
        .then((comment) => {
            requestBody = {
                userId: u3._id,
                movieId: m4._id,
                username: u3.username,
                content: "great",
                rating: 4.4,
                date: "07/09/2017"
            }
            return comments.addComment(requestBody.userId, requestBody.movieId, requestBody.username, requestBody.content, requestBody.rating, requestBody.date);
        })
        .then((comment) => {
            requestBody = {
                userId: u4._id,
                movieId: m6._id,
                username: u4.username,
                content: "not bad",
                rating: 4.8,
                date: "10/09/2017"
            }
            return comments.addComment(requestBody.userId, requestBody.movieId, requestBody.username, requestBody.content, requestBody.rating, requestBody.date);
        })
        .then((comment) => {
            requestBody = {
                senderId: u1._id,
                receiverId: u2._id,
                movieId: m1._id,
                message: "good for share"
            }
            return sharemessages.addMessage(requestBody.senderId, requestBody.receiverId, requestBody.movieId, requestBody.message);
        })
        .then((comment) => {
            requestBody = {
                senderId: u2._id,
                receiverId: u3._id,
                movieId: m3._id,
                message: "good for share"
            }
            return sharemessages.addMessage(requestBody.senderId, requestBody.receiverId, requestBody.movieId, requestBody.message);
        })
        .then((comment) => {
            requestBody = {
                senderId: u3._id,
                receiverId: u1._id,
                movieId: m4._id,
                message: "good for share"
            }
            return sharemessages.addMessage(requestBody.senderId, requestBody.receiverId, requestBody.movieId, requestBody.message);
        })
        .then((comment) => {
            requestBody = {
                senderId: u4._id,
                receiverId: u2._id,
                movieId: m6._id,
                message: "good for share"
            }
            return sharemessages.addMessage(requestBody.senderId, requestBody.receiverId, requestBody.movieId, requestBody.message);
        })
        .then(() => {
            console.log("Done seeding database");
            db.close();
        });
}, (error) => {
    console.error(error);
});
