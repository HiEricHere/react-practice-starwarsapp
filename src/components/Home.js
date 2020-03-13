import React from 'react'
import { Link } from 'react-router-dom'
import Quote from './Quote/Quote'

const Home = () => {
  return (
    <section>
      <Link to='/people'>Search some folks!</Link>
      <Quote />
    </section>
  )
}

export default Home