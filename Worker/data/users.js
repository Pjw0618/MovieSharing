Skip to content
Help save net neutrality! A free, open internet is once again at stake—and we need your help.
Learn more  Dismiss
This repository
Search
Pull requests
Issues
Marketplace
Explore
 @yqdu
 Sign out
 Watch 1
  Star 0  Fork 3 boling77/MovieSharing
forked from Pjw0618/MovieSharing
 Code  Pull requests 1  Projects 0  Wiki  Insights
Branch: YunanDai Find file Copy pathMovieSharing/Worker/data/users.js
c8bab61  an hour ago
@boling77 boling77 user-route
1 contributor
RawBlameHistory     
Executable File  191 lines (176 sloc)  6.79 KB
const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
const uuid = require('node-uuid');
const bcrypt = require("brcypt-nodejs");
const movies = require('./movies');
let exportedMethods = {
    getAllUsers() {
        return users().then((usersCollection)=>{
            return usersCollection.find({}).toArray();
        })
        },
           
       
    getUserByDbId(id) {
        return users().then((usersCollection)=>{
            return usersCollection.findOne({_id: id}).then((user)=>{
                if(!user) throw "Can not find user";
                return user;
            })
        })
        },
        
       
    getUserByEmail(email) {
        return users().then((usersCollection)=>{
            return usersCollection.findOne({email: email}).then((user)=>{
                if(!user) throw "Can not find user";
                return user;
            })
        })
        },

        getUserByUsername(username) {
            return users().then((usersCollection)=>{
                return usersCollection.findOne({username: username}).then((user)=>{
                    if(!user) throw "Can not find user";
                    return user;
                })
            })
            },
    // used in app.js
    getUserByIDPassport(id, cb){
        return users().then((usersCollection)=>{
            return usersCollection.findOne({_id: id}).then((user)=>{
                if(!user) cb(new Error('user '+ id + 'does not exist!'));
                return cb(null, user);
            })
        })
    }, 
    // used in app.js
    getUserByEmailPassport(email, cb){
        return users().then((usersCollection)=>{
            return usersCollection.findOne({email: email}).then((user)=>{
                if(!user) cb(new Error('user '+ id + 'does not exist!'));
                return cb(null, user);
            })
        })
    },   
    addUser(user) {
            return users().then((usersCollection)=>{
                let newUser = {
                    _id: uuid.v4(),
                    username: username,
                    email: user.email, //decodeURIComponent?
                    watchedList: user.watchedList,
                    wishList: user.wishList,
                    saltedPassword: bcrypt.hashSync(user.password),
                }
                return usersCollection.findOne({email: user.email}).then((u)=>{
                    if(u) throw "Email already exists";
                    else{
                        return usersCollection.findOne({_id: user._id}).then((u)=>{
                            if(u) throw "userId already exists"
                            else{
                                return usersCollection.insertOne(newUser).then((result)=>{
                                    return result.insertedId;
                                }).then((newId)=>{
                                    return this.getUserByDbId(newId);
                                })
                            }
                        })
                    }
                })
            })
             
        },
        
       
    removeUser(id) {
        return users().then((usersCollection)=>{
            return usersCollection.deleteOne({_id: id}).then((deleteInfo)=>{
                if(deleteInfo.deletedCount === 0){
                    throw 'can not delete user with id of ${id}'
                }
                return id;
            }).catch((e)=>{
                console.log("remove error", e);
            })
        })

        },
        
    updateUser(id, updateU) {
        if(!id || !updateU || id === undefined || updateU === undefined){
            return Promise.reject("The update information is not valid");
        }
        return users().then((usersCollection)=>{
            let updateData = {};
            if(updateU.username){
                updateData.username = updateU.username;
            }
           
            if(updateU._id){
                updateData._id = updateU._id;
            }
            if(updateU.email){
                updateData.email = updateU.email;
            }
            if(updateU.saltedPassword){
                updateData.saltedPassword = bycrpt.hashSync(updateU.saltedPassword);
            }
            if(updateU.watchedList){
                updateData.watchedList = updateU.watchedList;
            }
            if(updateU.wishList){
                updateData.wishList = updateU.wishList;
            }
            let updateCommand = {
                $set: updateData
            };
            return usersCollection.updateOne({_id: id}, updateCommand).then(()=>{
                return this.getUserByDbId(id);
            }).catch((error)=>{
                console.log("update error", error);
            })

        })
        },
    //update watchedTimes in movies
    addToWatchedList(id, movie) {
        return users().then((usersCollection)=>{
            return usersCollection.findOne({_id: id}).then((user)=>{
                if(!user) throw "user not found";
                let updateData = {watchedList: user.watchedList.push(movie)};
                let updateCommand = {$set: updateData}
                return usersCollection.updateOne({_id: id}, updateCommand).then(()=>{
                    movies.updateWatchedUsers(movie, id);
                    return this.getUserByDbId(id);
                })
            })
        })
        },

    //updating wishing in movies
    addToWishList(id) {
        return users().then((usersCollection)=>{
            return usersCollection.findOne({_id: id}).then((user)=>{
                if(!user) throw "user not found";
                let updateData = {wishList: user.wishList.push(movie)};
                let updateCommand = {$set: updateData}
                return usersCollection.updateOne({_id: id}, updateCommand).then(()=>{
                    movies.updateWishingUsers(movie, id);
                    return this.getUserByDbId(id);
                })
            })
        })
        },

    //updating wishing in movies
    removeFromWishList(id, movie) {
        return users().then((usersCollection)=>{
            return usersCollection.findOne({_id: id}).then((user)=>{
                if(!user) throw 'user not found';
                let newWishList = [];
                for(let i = 0; i < user.wishList.length; i++){
                    if(user.wishList[i] === movie){
                        continue;
                    }
                    newWishList.push(user.wishList[i]);
                }
                let updateData = {wishList: newWishList};
                let updateCommand = {$set: updateData}
                return usersCollection.updateOne({_id: id}, updateCommand).then(()=>{
                    movies.removeWishingUsers(movie, id);
                    return this.getUserByDbId(id);
                })
            })
        })
        }
    
}
© 2017 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About