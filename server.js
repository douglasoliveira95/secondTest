"use strict"

const express = require('express')
const app = express();

const port = 8080;
const hostname = 'localhost'

app.listen(port, onStart());

function onStart() {
    console.log(`Server started at http://${hostname}:${port}`)
}