import React from 'react'
import MovieDetails from '../components/MovieDetails'
import { movieData } from '../Data'

const DetailsPage = () => {
  return (
    <div>
      <MovieDetails movies={movieData}/>
    </div>
  )
}

export default DetailsPage
