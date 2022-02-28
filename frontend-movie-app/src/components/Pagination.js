import React from 'react'
import './Pagination.css'

const Pagination = ({numberOfPages, setPageNumber}) => {

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  return (
    <div className="pagination">
      {pages.map(number => (
        <li key={number} onClick={() => setPageNumber(number)}>
          <span>
            {number + 1}
          </span> 
        </li>
          ))}
    </div>
  )
}

export default Pagination;
