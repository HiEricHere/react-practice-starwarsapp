import React from 'react'
import { Link } from 'react-router-dom'
import Quote from '../Quote/Quote'

import './Home.css'

const Home = () => {
  return (
    <section id="home">
      <Quote />
      <Link to='/people'><span className="h2">Search Star Wars Characters</span></Link>
      <p>
        This is a little app made using the <a href="https://swapi.co">swapi.co</a> api 
        for Star Wars characters look up and built with React. It doesn't do much, but 
        it was a lot of fun to build!
      </p>
    </section>
  )
}

export default Home