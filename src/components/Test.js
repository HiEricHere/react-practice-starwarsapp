import React, { useState, useEffect } from 'react'

const Guaranteed = data => ({
  fold: (available, unavailable) => data.count > 0 ? available : unavailable
})

const Unavailable = () => (<div>Data unavailable.</div>)
const Available = props => {
  const { count, results } = props.data
  return (
    <div style={{...styles.font, ...styles.rows}}>
      <h1>Count: {count}</h1>
      <ul style={styles.rows}>
        {results.map(person => (
          <li key={person.name}>
            <p>{person.name}</p>
            <p>{person.gender}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

const defaultState = {
  count: 0,
  results: [],
}

const Test = () => {
  const [data, setData] = useState(defaultState)

  useEffect(() => {
    fetch('https://swapi.co/api/people/')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div style={styles.grid}>
      <div style={styles.mid}>
        <p>A long time ago, in a galaxy far,</p>
        <p>far away...</p>
      </div>
      <div style={{...styles.mid, ...styles.font}}>
        {Guaranteed(data).fold(<Available data={data} />, <Unavailable />)}
      </div>
    </div>
  )
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    gridTemplateRows: 'auto',
    rowGap: '2vw'
  },
  mid: {
    gridColumn: '2/3'
  },
  font: {
    fontFamily: 'Saira, Arial'
  },
  rows: {
    display: 'grid',
    gridTemplateRows: 'auto',
    rowGap: '2vw'
  }
}

export default Test