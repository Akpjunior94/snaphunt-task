import React from 'react'

const Searchbar = ({text, setText, handleSearch}) => {

  return (
    <div className='searchbar'>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search title"
          onChange={(e)=>setText(e.target.value)}
          value={text}
          required
        />
      </form>
    </div>
  )
}

export default Searchbar
