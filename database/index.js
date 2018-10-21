const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher',  { useMongoClient: true });
mongoose.Promise = global.Promise;

let repoSchema = mongoose.Schema({
  id: { type: Number, required: true, unique: true},
  reponame: String,
  owner: {
          login: { type: String, lowercase:true, trim: true},
          id: { type: Number },
          avatar: { type:String }
         },
  description: String,
  link: String,
  created_at: Date,
  updated_at: Date,
  size: Number,
  forks: Number,
  issues: Number,
  followers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  Repo.insertMany(data, (err, docs) => {
    if(err) return console.log(err);
  });
};

module.exports.save = save;
module.exports.Repo = Repo;