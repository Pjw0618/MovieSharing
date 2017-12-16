# MovieSharing

## Introduction

This is a movie sharing website, allowing users to post movies they like, make comments and share movies to other users.

## Core Features

User signup and login
Post movies on the website
Make comments and rating
Mark a movie watched, or wishing
See top rated movies
Search in all movie using keyword(s)
View movies by category
Search movies in a specified category
Share movies to other users(with a share message)
etc.

## How to run

### Environment

You need to have [MongoDB](https://www.mongodb.com), [Elasticsearch](https://www.elastic.co/products/elasticsearch), [ImageMagick](https://www.imagemagick.org/script/index.php) and [Redis](https://redis.io/) installed.

Run the services needed(MongoDB, Elasticsearch and Redis) before going next step.

### Start the website

#### Data Worker

Under ./Worker

```bash
node worker.js
```

#### API Server

Under ./APIServer

```bash
node app.js
```

#### Front End Server

Under ./FrontEnd

```bash
npm start
```

#### To seed some initial data

Under ./Worker

```bash
node seed.js
```

