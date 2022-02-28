const mongoose = require('mongoose') 

const MovieSchema = mongoose.Schema({
  "title": String,
  "description": String,
  "categories": String,
  "bannerImg": String,
  "cast": {
    "originalName": String,
    "characterName": String,
    "image": String
  }
})

module.exports = mongoose.model('Movie', MovieSchema);