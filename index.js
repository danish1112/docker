const express = require("express");

const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./config");

const app = express();

const port = process.env.PORT || 3000;

const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}`

mongoose.connect(MONGO_URL).then(() => {
    console.log("mongo connected successfully");
}).catch((err) => {
    console.log("error in connecting mongodb", err);
})

app.get('/', (req, res) => {
    res.send('<h1>response is from docker</h1>')
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})