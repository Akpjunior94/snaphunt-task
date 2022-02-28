import React, { useState } from 'react'
import MovieList from '../components/MovieList'
import Pagination from '../components/Pagination'
import Title from '../components/Title'


const HomePage = ({movieData, setPageNumber, numberOfPages}) => {

  return (
    <div className="container">
      <Title 
          title="Movie information hub"
          subtitle="We provide a list of your favourite movies and information about the cast."
        />
        <MovieList movies={movieData}/>
        <Pagination numberOfPages={numberOfPages} setPageNumber={setPageNumber}/>
    </div>
  )
}

export default HomePage
