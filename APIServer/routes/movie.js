const express = require('express');
const router = express.Router();
const redis = require("redis");
const redisConnection = require("../redis/redis-connection");
const nrpSender = require("../redis/nrp-sender-shim")
const multer = require('multer');
const upload = multer({ dest: "./uploads" });

router.post("/", upload.single('poster'), async (req, res) => {
    let info = req.body;
    console.log(req.file)
    info.poster = "../APIServer/" + req.file.path;

    let response = await nrpSender.sendMessage({

        redis: redisConnection,
        eventName: "movie-post",
        data: {

            message: info
        },
        expectsResponse: false
    });
    redisConnection.on("post-from-back-movie:request:*", (message, channel) => {

        res.json(message.data.message);
    })

})

router.get("/getAllMovie", async (req, res) => {
    let response = await nrpSender.sendMessage({

        redis: redisConnection,
        eventName: "movie-getAllMovie",
        data: {

            message: "get all movies"
        },
        expectsResponse: false
    });
    redisConnection.on("getAllMovie-from-back-movie:request:*", (message, channel) => {

        res.json(message.data.message);
    })

});

router.get("/getTopTen", async (req, res) => {
    let response = await nrpSender.sendMessage({

        redis: redisConnection,
        eventName: "movie-getTopTen",
        data: {

            message: "Top Ten"
        },
        expectsResponse: false
    });
    redisConnection.on("getTopTen-from-back-movie:request:*", (message, channel) => {

        res.json(message.data.message);
    })

});

router.get("/getMovieById/:id", async (req, res) => {
    let response = await nrpSender.sendMessage({

        redis: redisConnection,
        eventName: "movie-getMovieById",
        data: {

            message: req.params.id
        },
        expectsResponse: false
    });
    redisConnection.on("getMovieById-from-back-movie:request:*", (message, channel) => {

        res.json(message.data.message);
    })

});

router.put("/", async (req, res) => {
    let response = await nrpSender.sendMessage({

        redis: redisConnection,
        eventName: "movie-put",
        data: {

            message: req.body
        },
        expectsResponse: false
    });

    redisConnection.on("put-from-back-movie:request:*", (message, channel) => {

        res.json(message.data.message);
    })
});

router.get("/searchKeyword/:keyword", async (req, res) => {
    let response = await nrpSender.sendMessage({

        redis: redisConnection,
        eventName: "movie-searchKeyword",
        data: {

            message: req.params.keyword
        },
        expectsResponse: false
    });
    redisConnection.on("searchKeyword-from-back-movie:request:*", (message, channel) => {

        res.json(message.data.message);
    })

});
router.get("/searchByCategory/:category", async (req, res) => {
    let response = await nrpSender.sendMessage({

        redis: redisConnection,
        eventName: "movie-searchByCategory",
        data: {

            message: req.params.category
        },
        expectsResponse: false
    });
    redisConnection.on("searchByCategory-from-back-movie:request:*", (message, channel) => {

        res.json(message.data.message);
    })

});

router.get("/searchInCategory/:category/:keyword", async (req, res) => {
    let response = await nrpSender.sendMessage({

        redis: redisConnection,
        eventName: "movie-searchInCategory",
        data: {
            message: {
                category: req.params.category,
                keyword: req.params.keyword
            }
        },
        expectsResponse: false
    });
    redisConnection.on("searchInCategory-from-back-movie:request:*", (message, channel) => {

        res.json(message.data.message);
    })

});

router.post("/screenshot/:movieId", upload.array('screenshot'), async (req, res) => {
    let movieId = req.params.movieId;
    let screenshots = [];
    if (req.files) {
        req.files.forEach((file) => {
            screenshots.push("../APIServer/" + file.path);
        })
    }
    let response = await nrpSender.sendMessage({

        redis: redisConnection,
        eventName: "movie-postScreenshot",
        data: {

            message: { movieId: movieId, screenshots: screenshots }
        },
        expectsResponse: false
    });
    redisConnection.on("postScreenshot-from-back-movie:request:*", (message, channel) => {

        res.json(message.data.message);
    })

})

module.exports = router;

