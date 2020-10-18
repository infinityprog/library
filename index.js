const {more} = require('./business/PassageService');

const express = require('express');

const app = express();
const port = 3000;

let incr = 0;

app.get('/more', async (req, res) => {
    res.json(await more());
});

app.get('/moins', (req, res) => {
    res.json(--incr);
});

app.get('/reset', (req, res) => {
    incr = 0;
    res.json(incr);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
