const {more,findAllPassage} = require('./business/PassageService');

const express = require('express');

const app = express();
const port = 3000;

let incr = 0;

app.get('/passage/more', async (req, res) => {
    res.json(await more());
});

app.get('/passage', async (req, res) => {
    res.json(await findAllPassage());
});

app.get('/reset', (req, res) => {
    incr = 0;
    res.json(incr);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
