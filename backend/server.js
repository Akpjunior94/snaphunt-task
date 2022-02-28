const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config');

// creating the express app and using it
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())


// setting up mongoDB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('err', err => console.log(err))
db.once('open', () => console.log('Connected to Database'))

// importing all routes
const moviesRoute = require('./routes/api/movies')
const moviesFilterRoute = require('./routes/api/filter')

// route used as a middleware
app.use('/movies', moviesRoute);
app.use('/movies', moviesFilterRoute);

// Home route
app.get('/', (req, res) => {
  res.send(`
  <h1>Welcome to the TODO RESTFUL Api for Medical App</h1>
  `);
})







// listening on PORT
const PORT = process.env.PORT || '4500'
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`)
})

