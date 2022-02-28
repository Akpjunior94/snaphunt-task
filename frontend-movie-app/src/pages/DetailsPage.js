import React from 'react'
import MovieDetails from '../components/MovieDetails'

const DetailsPage = ({movieData}) => {
  return (
    <div>
      <MovieDetails movies={movieData}/>
    </div>
  )
}

export default DetailsPage
