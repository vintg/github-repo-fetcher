const request = require('request');
const config = require('../config.js');
const db = require('../database/index');

let getReposByUsername = (username) => {

   let options = {
    url: `https://api.github.com/users/${username}/repos`,
    method: 'GET',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (err, response, body) => {
      if(err) return console.log(err);
      console.log('statusCode:', response && response.statusCode);

      var data = JSON.parse(response.body);
      var res = [];

      for(var k in data){
        var obj = data[k];

        var entry = {
          id: obj.id,
          reponame: obj.name,
          owner: {
              login: obj.owner.login,
              id: obj.owner.id,
              avatar: obj.owner.avatar_url
              },
          description:obj.description,
          link: obj.url,
          created_at: obj.created_at,
          updated_at: obj.updated_at,
          size: obj.size,
          forks: obj.forks,
          issues: obj.open_issues_count,
          followers: obj.watchers
        };
        res.push(entry);
      }

      console.log('saving', res);
      db.save(res);
  });

};

module.exports.getReposByUsername = getReposByUsername;