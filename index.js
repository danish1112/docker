const express = require("express");
const session = require("express-session");
const cors = require("cors")
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT, REDIS_URL, SESSION_SECRET, REDIS_PORT } = require("./config");

const redis = require("redis");

const RedisStore = require("connect-redis").default;
const redisClient = redis.createClient({
    url: `redis://${REDIS_URL}:${REDIS_PORT}`
});
redisClient.connect().catch(console.error);

const mongoose = require("mongoose");
const postRoute = require("./routes/postRoute");
const userRoute = require("./routes/userRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}`

mongoose.connect(MONGO_URL).then(() => {
    console.log("mongo connected successfully");
}).catch((err) => {
    console.log("error in connecting mongodb", err);
});

app.enable("trust proxy");
app.use(cors())

app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: SESSION_SECRET,
    cookie: {
        secure: false,
        resave: false,
        saveUninitialized: false,
        httpOnly: true,
        maxAge: 30000,
    }
}));

app.get('/api/v1', (req, res) => {
    res.send('<h1>response is from docker...</h1>');
    console.log("hello docker");
});

app.use("/api/v1/posts", postRoute);
app.use("/api/v1/users", userRoute);

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})