import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section>
      <h1 style={styles.original}>H-hi</h1>
      <p style={styles.original}>A long time ago, in a galaxy far, far away</p>
      <p style={styles.original}>I love you...</p>
      <p style={styles.codepen}>...I know.</p>
      <p style={styles.codepen}>Never tell me the odds!</p>
      <p style={styles.original}>Punch it, Chewie!</p>
      <p style={styles.codepen}>Search your heart, Luke. You know it to be true.</p>
      <p style={styles.codepen}>NOOOOOOOOOOOOOOoooOOOoOOooOOOOOOOooooo!!!!</p>
      <Link to='/people'>Search some folks!</Link>
    </section>
  )
}

// color: rgb(74, 153, 255);
// color: rgb(30, 177, 235);

const styles = {
  original: {
    color: 'rgb(74, 153, 255)'
  },
  codepen: {
    color: 'rgb(30, 177, 235)'
  }
}

export default Home