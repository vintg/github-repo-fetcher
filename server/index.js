const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const git = require('../helpers/github.js');
const save = require('../database/index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

// var Promise = require('bluebird');

app.post('/repos', function (req, res) {
    console.log('post request was made');
    git.getReposByUsername(req.body.username);
    res.end();
    // return new Promise((resolve,reject)=>{
    //   git.getReposByUsername(req.body.username, (err, data)=>{
    //     if(err) {
    //       reject(err);
    //     } else {
    //       console.log(data);
    //       resolve(data)
    //     }
    //   });
    // })
    // .then(result => {
    //   console.log('resolve from promise', result)
    //     res.json(result);
    //     save(result);
    // }).catch(err=> console.log('ERR:',err))

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

