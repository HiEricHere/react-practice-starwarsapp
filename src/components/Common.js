import React from 'react'

export const Loading = () => {
// Add extra loading messages
// Cycle through on interval
// Add "blinking" on Decrypting data
  return (
    <div>
      <p>"Many <span style={styles.strikethrough}>Bothans</span> rogues died to bring us this information..."</p>
      <p>Decrypting data ...</p>
    </div>
  )
}

export const Rejected = error => 
// <span role="img" aria-label="handwaving">👋</span>
// Add handwaving animation across the screen
  <div>
    <p>"These aren't the droids you're looking for."</p>
    <p>{error.message}</p>
  </div>

const styles = {
  strikethrough: {
    textDecoration: "line-through"
  }
}