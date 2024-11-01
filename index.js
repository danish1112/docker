const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>response is from docker compose</h1>')
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})