const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const corsOptions = {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Accept, Content-Type",
    "Access-Control-Max-Age": "2000"
}
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
let tweetArr = [];
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/../client/public'))

app.get('/getTweet', (req, res) => {
    fs.readFile('tweetData.txt', 'utf8', (err, data) => {
        let json;
        if (err) console.log(err);
        else {
            json = data.split('$');
            json.pop();
            json = json.map((el) => {
                return JSON.parse(el);
            })
            res.status(200)
            res.set(corsOptions);
            res.send(json);
        }
    })
});

app.get('/', (req, res) => {
    res.status(200)
    res.set(corsOptions);
    res.sendFile(path.join(__dirname + '/../client/'));
});

app.options('/tweet', (req, res) => {
    res.set(corsOptions);
    res.status(200);
    res.end();
})

app.post('/tweet', jsonParser, (req, res, next) => {
    res.set(corsOptions);
    res.status(200);
    let data = JSON.stringify(req.body) + '$';
    fs.appendFile('tweetData.txt', data, (err) => {
        if (err) console.log(err);
    })
    res.send('success!');
    res.end();
})

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!").end();
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})