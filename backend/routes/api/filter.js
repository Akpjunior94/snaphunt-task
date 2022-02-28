const express = require('express');
const Movie = require('../../models/Movie');
const router = express.Router();


// filtering using movie title
router.get('/', async(req, res) => {
  let options = {}
  if(req.query.search) {
    options = {
      ...options,
      where: {
        title: new RegExp(req.query.search.toString(), $flags, 'i')
      }
    }
  }

  try {
    const data = await Movie.find(options)
    res.send(data)
  } catch (error) {
    res
      .sendStatus(500)
      .send(error.message)
  }
})

module.exports = router;