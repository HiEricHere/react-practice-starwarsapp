import React from 'react'
import { Link } from 'react-router-dom'
import Quote from '../Quote/Quote'

const Home = () => {
  return (
    <section id="home">
      <h1>Star Wars</h1>
      <p style={{fontSize: '0.8rem'}}>Totally legit logo</p>
      <Quote />
      <p>
        This is a little app made using the <a href="https://swapi.co">swapi.co</a> api 
        for Star Wars characters look up and built with React. It doesn't do much, but 
        it was a lot of fun to build!
      </p>
      <Link to='/people'>Search Star Wars Characters</Link>
    </section>
  )
}

export default Home