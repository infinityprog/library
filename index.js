const PassageService = require('./business/PassageService');

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const passageService = new PassageService();

app.use(express.static('public'));

app.get('/passage/more', async (req, res) => {
    res.json(await passageService.more());
});

app.get('/passage/week', async (req, res) => {
    res.json(await passageService.week());
});

app.get('/passage/month', async (req, res) => {
    res.json(await passageService.month());
});

app.get('/passage/year', async (req, res) => {
    res.json(await passageService.year());
});

app.get('/passage', async (req, res) => {
    res.json(await passageService.findAll());
});

app.get('/', async (req, res) => {
    res.render( "./public/index.html");
});

app.listen(port, () => console.log(`run library api on port ${port}!`))
