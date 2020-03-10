import React from 'react'

export const Loading = () => 
  <>
    <p>"Many <span style={styles.strikethrough}>Bothans</span> rogues died to bring us this information..."</p>
    <p>Decrypting data ...</p>
  </>

export const Fail = message => 
  <>
    <p>"These aren't the droids you're looking for:"</p>
    <p>{message}</p>
  </>

const styles = {
  strikethrough: {
    textDecoration: "line-through"
  }
}