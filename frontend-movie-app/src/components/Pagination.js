import React from 'react'
import './Pagination.css'

const Pagination = ({moviesPerPage, totalMovies, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map(number => (
        <li key={number} onClick={() => paginate(number)}>
          <span>
            {number}
          </span> 
        </li>
          ))}
    </div>
  )
}

export default Pagination;
