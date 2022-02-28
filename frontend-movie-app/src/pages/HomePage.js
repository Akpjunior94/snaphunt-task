import React, { useState } from 'react'
import MovieList from '../components/MovieList'
import Pagination from '../components/Pagination'
import Title from '../components/Title'


const HomePage = ({movieData}) => {
  const [data, setData] = useState(movieData)
  const [currentPage, setCurrentPage] = useState(1)
  const [moviesPerPage] = useState(9)


  // Get current profile
 const indexOfLastMovie = currentPage * moviesPerPage;
 const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
 const currentData = data.slice(indexOfFirstMovie, indexOfLastMovie);

 // change page
 const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="container">
      <Title 
          title="Movie information hub"
          subtitle="We provide a list of your favourite movies and information about the cast."
        />
        <MovieList movies={currentData}/>
        <Pagination moviesPerPage={moviesPerPage} totalMovies={data.length} paginate={paginate}/>
    </div>
  )
}

export default HomePage
