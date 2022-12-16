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

app.post('/zero-sum', (req, res) => {
    var a = parseInt(req.body.n);
    
    var temp = func.main(a);
    var result = JSON.stringify(temp);

    var { authorization } = req.headers;
    res.send({
      result,
      authorization,
    });
  });

app.listen(port, () => {
    console.log(`This app is running on port ${port}`);
});