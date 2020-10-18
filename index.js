const PassageService = require('./business/PassageService');

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const passageService = new PassageService();

let incr = 0;

app.get('/passage/more', async (req, res) => {
    res.json(await passageService.more());
});

app.get('/passage', async (req, res) => {
    res.json(await passageService.findAll());
});

app.get('/reset', (req, res) => {
    incr = 0;
    res.json(incr);
});

app.listen(port, () => console.log(`run library api on port ${port}!`))
