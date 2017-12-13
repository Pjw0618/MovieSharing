const express = require('express');
const router = express.Router();
const redis = require("redis");
const redisConnection = require("../redis/redis-connection");
const nrpSender = require("../redis/nrp-sender-shim")

router.get("/getAllUser", async (req, res) => {
    let response = await nrpSender.sendMessage({
        
        redis: redisConnection,
        eventName: "user-getAllUser",
        data: {
            
            message: req.params.id
        },
        expectsResponse: false
    });
    redisConnection.on("getAllUser-from-back-user:request:*", (message, channel)=>{
        
        res.json(message.data.message);
    })
    
});
router.get("/getUserByDbId/:id", async (req, res) => {
    let response = await nrpSender.sendMessage({
        
        redis: redisConnection,
        eventName: "user-getUserByDbId",
        data: {
            
            message: req.params.id
        },
        expectsResponse: false
    });
    redisConnection.on("getUserByDbId-from-back-user:request:*", (message, channel)=>{
        
        res.json(message.data.message);
    })
    
});
router.put("/:id", async (req, res) => {
    let response = await nrpSender.sendMessage({
        
        redis: redisConnection,
        eventName: "user-put",
        data: {
            
            message: req.params.id
        },
        expectsResponse: false
    });
    redisConnection.on("put-from-back-user:request:*", (message, channel)=>{
        
        res.json(message.data.message);
    })
    
});
router.delete("/:id", async (req, res) => {
    let response = await nrpSender.sendMessage({
        
        redis: redisConnection,
        eventName: "user-delete",
        data: {
            
            message: req.params.id
        },
        expectsResponse: false
    });
    redisConnection.on("delete-from-back-user:request:*", (message, channel)=>{
        
        res.json(message.data.message);
    })
    
});
//login
router.post('/', passport.authenticate('local-login', {
    successRedirect: '/user', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));
//sign up
router.post('/', passport.authenticate('local-signup', {
    successRedirect: '/user/editprofile', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));
