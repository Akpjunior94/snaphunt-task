const express = require('express');
const Movie = require('../../models/Movie');
const router = express.Router();

// getting all movies with pagination
router.get('/', async(req, res, next) => {
  try {
    let {page, size} = req.query
    if (!page) {
      page = 1
    }
    if (!size) {
      size = 12
    }

    const limit = parseInt(size);
    const skip = (page - 1) * size

    const movies = await Movie
      .find({})
      .limit(limit)
      .skip(skip)
    res.send({page, size, data: movies})
    // console.log('i got the header')
  } catch (error) {
    res
      .sendStatus(500)
      .send(error.message)
  }
})

// add movie data
router.post('/', async(req, res, next) => {
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