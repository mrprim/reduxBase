"use strict";
const express = require('express');
const router = express.Router();
const app = express();
const listenPort = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const server = require('http').Server(app);

setupRoutes();
listen();

function setupRoutes() {
    app.use(bodyParser.json());
    app.use(express.static('./static'));
    app.use(basicErrorHandling);
}

function basicErrorHandling(err, req, res, next) {
    if (err.stack) {
        console.error(err.stack);
        res.status(500).send('Unfortunately an error has occurred.');
    } else {
        res.status(400).json({
            error: err
        });
    }
}

function listen() {
    server.listen(listenPort);
    console.log('Listening on port ' + listenPort);
}
