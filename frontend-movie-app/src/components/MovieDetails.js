import React from 'react'
import Banner from './Banner.js'
import './MovieDetails.css'
import { useParams } from "react-router-dom";

const MovieDetails = ({movies}) => {
  const { id } = useParams()
  console.log(id)

  const singleMovieData = movies.filter(movie => movie._id == id)[0]
  console.log(singleMovieData)

  return (
    <div className="details-page container">
      {
        <>
          <img className='detail-img' alt="img" src={singleMovieData.bannerImg} />
          <h1>Movie information hub</h1>
          <p>{singleMovieData.description}</p>
        </>
      }
      <Banner movies={movies}/>
    </div>
  )
}

export default MovieDetails
