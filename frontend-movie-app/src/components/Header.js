import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import './Header.css'
import Searchbar from './Searchbar'

const Header = ({text, setText, handleSearch, filteredResult}) => {

  return (
    <div className="header">
      <nav className="container">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Searchbar handleSearch={handleSearch}/>
      </nav>
    </div>
  )
}

export default Header
