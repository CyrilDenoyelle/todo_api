
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config({
    path: `./config.env`,
});

const {
    HOST,
    PORT,
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DB_NAME
} = process.env;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes');

app.use((req, res, next) => {
    console.log('');
    console.log(`${new Date().toLocaleString()}`);
    console.log(`[${req.method}] ${req.originalUrl}`);
    console.log(`[req.body] ${JSON.stringify(req.body, null, 2)}`);

    next();
});

app.use(routes);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, HOST, async () => {
    console.log(`Server is running on: ${HOST}:${PORT}`);

    mongoose.Promise = global.Promise;
    await mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}`, {
        dbName: MONGO_DB_NAME,
    });
    console.log('Server connected to db');
});
