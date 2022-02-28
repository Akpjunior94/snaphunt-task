const express = require('express');
const Movie = require('../../models/Movie');
const router = express.Router();

// getting all movies with pagination
router.get('/', async(req, res, next) => {
  try {
    const PAGE_SIZE = 6;
    const page = parseInt(req.query.page || "0");
    const total = await Movie.countDocuments({});
    const movies = await Movie.find({})
      .limit(PAGE_SIZE)
      .skip(PAGE_SIZE * page);
    res.json({
      totalPages: Math.ceil(total / PAGE_SIZE),
      movies,
    });
    // console.log('i got the header')
  } catch (error) {
    res
      .sendStatus(500)
      .send(error.message)
  }
})


// add movie data
router.post('/filter', async(req, res) => {
  const movieData = new Movie({
    title: req.body.title,
    description: req.body.description,
    categories: req.body.categories,
    bannerImg: req.body.bannerImg,
    cast: {
      originalName: req.body.originalName,
      characterName: req.body.characterName,
      image: req.body.image
    }
  })
  try {
    const newMovieData = await movieData.save()
    res.send({newMovieData})
  } catch (error) {
    res
      .sendStatus(500)
      .send(error.message)
  }
})

module.exports = router;