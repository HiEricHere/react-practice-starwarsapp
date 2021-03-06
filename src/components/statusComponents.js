import React, { useContext } from 'react'
import { CharactersContext } from '../contexts/CharactersContext'

// Add extra loading messages
// Cycle through on interval
// Add "blinking" on Decrypting data
export const Loading = () => {
  return (
    <div style={styles.status}>
      <p>"Many <span style={styles.strikethrough}>Bothans</span> rogues died to bring us this information..."</p>
      <p>Decrypting data ...</p>
    </div>
  )
}

// <span role="img" aria-label="handwaving">👋</span>
// Add handwaving animation across the screen
export const Rejected = () => {
  const { state } = useContext(CharactersContext)
  const { error } = state
  return (
    <div style={styles.status}>
      <p>"These aren't the droids you're looking for."</p>
      <p>{error.message}</p>
    </div>
  )
}

const styles = {
  strikethrough: {
    textDecoration: "line-through"
  },
  status: {
    padding: '4vh',
    margin: '4vh auto',
    textAlign: 'center',
    display: 'grid',
    gridTemplateRows: 'auto',
    justifyContent: 'center',
    rowGap: '4vh',
  }
}