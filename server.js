
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

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

app.listen(port, () => console.log(`app listening on port ${port}!`));
