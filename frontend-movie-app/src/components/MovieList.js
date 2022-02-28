import React from 'react'
import { Link } from 'react-router-dom'
import './MovieList.css'

const MovieList = ({movies}) => {


  return (
    <div className="movie-list container">
      {movies.map(data => (
       <Link key={data._id} to={`/details/${data._id}`}>
          <img src={data.bannerImg} alt="banner"/>
          <h3>{data.title}</h3>
          <p>{data.description.substring(0, 100)}...</p>
        </Link>
      ))}
    </div>
  )
}

export default MovieList
