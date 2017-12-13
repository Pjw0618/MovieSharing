const express = require('express');
const router = express.Router();
const redis = require("redis");
const redisConnection = require("../redis/redis-connection");
const nrpSender = require("../redis/nrp-sender-shim")
router.post("/",async (req, res) => {
    let info = req.body;
    let response = await nrpSender.sendMessage({
        
        redis: redisConnection,
        eventName: "movie-post",
        data: {
            
            message: info
        },
        expectsResponse: false
    });
    redisConnection.on("post-from-back-movie:request:*", (message, channel)=>{
        
        res.json(message.data.message);
    })
    
})

router.get("/getAllMovie", async (req, res) => {
    let response = await nrpSender.sendMessage({
        
        redis: redisConnection,
        eventName: "movie-getAllMovie",
        data: {
            
            message: req.params.id
        },
        expectsResponse: false
    });
    redisConnection.on("getAllMovie-from-back-movie:request:*", (message, channel)=>{
        
        res.json(message.data.message);
    })
    
});

router.get("/getTopTen", async (req, res) => {
    let response = await nrpSender.sendMessage({
        
        redis: redisConnection,
        eventName: "movie-getAllMovie",
        data: {
            
            message: req.params.id
        },
        expectsResponse: false
    });
    redisConnection.on("getAllMovie-from-back-movie:request:*", (message, channel)=>{
        
        res.json(message.data.message);
    })
    
});