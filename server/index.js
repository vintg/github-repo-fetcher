const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const git = require('../helpers/github.js');
const db = require('../database/index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
    console.log('post request was made');
    git.getReposByUsername(req.body.username);
    res.end();
});

app.get('/repos', function (req, res) {
  console.log('get request was made');
  var repos = db.Repo;
  var query = Repo.find({});

  query.limit(25);
  query.sort({ followers: -1 });
  query.exec((err, data)=> {
    if (err) return handleError(err);
  })
  .then(results => res.send(results));
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

