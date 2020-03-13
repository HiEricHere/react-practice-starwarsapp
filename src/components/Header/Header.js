import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
  return (
    <header className="logo">
      <h1><Link to='/'>Star Wars</Link></h1>
      <p className="h5">totally legit logo</p>
    </header>
  )
}

export default Header;