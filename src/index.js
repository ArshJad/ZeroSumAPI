const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const func = require('./function.js');
const port = 5000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    var a = parseInt(req.body.n);
    const getData = async() => {
        var y = await func.main(a);;
        console.log(y);
    }
    var b = JSON.stringify(a);
    getData();
    var { authorization } = req.headers;
    res.send({
      b,
      authorization,
    });
  });

app.listen(port, () => {
    console.log(`This app is running on port ${port}`);
});