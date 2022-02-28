import React from 'react'
import './Banner.css'

const Banner = ({movies}) => {
  return (
    <div className="sticky-banner">
      <h1>Cast</h1>
      <div className="cast">
        {movies.map(movie => (
          <div className="cast-card">
            <img className="cast-img" src={movie.cast.image} alt="" />
            <p>{movie.cast.originalName} <br/> <span>{movie.cast.characterName} </span></p>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Banner
