import React from 'react'
import { Link } from 'react-router-dom'
import './MovieList.css'

const MovieList = ({movies}) => {


  return (
    <div className="movie-list container">
      {movies.map(data => (
       <Link key={data.id} to={`/details/${data.id}`}>
          <img src={data.bannerImg}/>
          <h3>{data.title}</h3>
          <p>{data.Description.substring(0, 100)}...</p>
        </Link>
      ))}
    </div>
  )
}

export default MovieList
