import React from 'react'

const Searchbar = ({handleSearch}) => {

  return (
    <div className='searchbar'>
      <div>
        <input 
          type="text" 
          placeholder="Search title"
          onChange={(e)=>handleSearch(e.target.value)}
          // value={text}
          required
        />
      </div>
    </div>
  )
}

export default Searchbar
